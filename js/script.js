let espStub;

const baudRates = [9600, 115200, 230400, 460800, 921600];

const bufferSize = 512;
const colors = ["#00a7e9", "#f89521", "#be1e2d"];
const measurementPeriodId = "0001";

const maxLogLength = 100;
const log = document.getElementById("monitor");
const butConnect = document.getElementById("butConnect");
const baudRate = document.getElementById("baudRate");
const butClear = document.getElementById("butClear");
const butErase = document.getElementById("butErase");
const butReset = document.getElementById("butReset")
const butProgram = document.getElementById("butUpload");
const autoscroll = document.getElementById("butScroll");
const firmware = document.querySelectorAll(".upload .firmware input");
const progress = document.querySelectorAll(".upload .progress-bar");
const offsets = document.querySelectorAll(".upload .offset");

document.addEventListener("DOMContentLoaded", () => {
    butConnect.addEventListener("click", () => {
        clickConnect().catch(async (e) => {
            console.error(e);
            errorMsg(e.message || e);
            if (espStub) {
                await espStub.disconnect();
            }
            toggleUIConnected(false);
        });
    });
    butClear.addEventListener("click", clickClear);
    butReset.addEventListener("click", clickReset);
    butErase.addEventListener("click", clickErase);
    butProgram.addEventListener("click", clickProgram);
    autoscroll.addEventListener("click", clickAutoscroll);
    baudRate.addEventListener("change", changeBaudRate);
    window.addEventListener("error", function (event) {
        console.log("Ocorreu um erro não detectado: ", event.error);
    });

    initBaudRate();
    loadAllSettings();
});

function initBaudRate() {
    for (let rate of baudRates) {
        var option = document.createElement("option");
        option.text = rate;
        option.value = rate;
        baudRate.add(option);
    }
}

function logMsg(text) {
    log.innerHTML += text + "<br>";

    // Remove old log content
    if (log.textContent.split("\n").length > maxLogLength + 1) {
        let logLines = log.innerHTML.replace(/(\n)/gm, "").split("<br>");
        log.innerHTML = logLines.splice(-maxLogLength).join("<br>\n");
    }

    if (scroll) {
        log.scrollTop = log.scrollHeight;
    }
}


function errorMsg(text) {
    logMsg('<span class="error-message">Error:</span> ' + text);
    console.error(text);
}


function formatMacAddr(macAddr) {
    return macAddr
        .map((value) => value.toString(16).toUpperCase().padStart(2, "0"))
        .join(":");
}

/**
 * @name clickConnect
 * Click handler for the connect/disconnect button.
 */
async function clickConnect() {
    logMsg("");
    logMsg("");

    if (espStub) {
        await espStub.disconnect();
        await espStub.port.close();
        toggleUIConnected(false);
        espStub = undefined;
        return;
    }

    const esploaderMod = await window.esptoolPackage;

    const esploader = await esploaderMod.connect({
        log: (...args) => logMsg(...args),
        error: (...args) => errorMsg(...args),
    });
    try {
        await esploader.initialize();

        logMsg("Connected to " + esploader.chipName);
        logMsg("MAC Address: " + formatMacAddr(esploader.macAddr()));

        espStub = await esploader.runStub();
        toggleUIConnected(true);
        espStub.addEventListener("disconnect", () => {
            toggleUIConnected(false);
            espStub = false;
        });
    } catch (err) {
        await esploader.disconnect();
        throw err;
    }
}

/**
 * @name changeBaudRate
 * Change handler for the Baud Rate selector.
 */
async function changeBaudRate() {
    saveSetting("baudrate", baudRate.value);
    if (espStub) {
        let baud = parseInt(baudRate.value);
        if (baudRates.includes(baud)) {
            await espStub.setBaudrate(baud);
        }
    }
}

/**
 * @name clickAutoscroll
 * Change handler for the Autoscroll checkbox.
 */
async function clickAutoscroll() {

    if (scroll) {
        scroll = false;
    }
    else {
        scroll = true;
    }
}


/**
 * @name clickErase
 * Click handler for the erase button.
 */
async function clickErase() {
    if (
        window.confirm("Isso apagará toda a flash. Clique em OK para continuar.")
    ) {
        try {
            logMsg("Apagando memoria flash. Aguarde...");
            let stamp = Date.now();
            await espStub.eraseFlash();
            logMsg("Finalizado. Demorou " + (Date.now() - stamp) + "ms para apagar.");
        } catch (e) {
            errorMsg(e);
        }
    }
}

/**
 * @name clickProgram
 * Click handler for the program button.
 */
async function clickProgram() {
    let bootloader = import("./bin/bootloader.bin");
    let partitions = import("./bin/partitions.bin");
    let app = import("./bin/app.bin");
    let firm = import("./bin/firmware.bin");

    try {
        await espStub.flashData(
            bootloader,
            (bytesWritten, totalBytes) => {
                progressBar.style.width =
                    Math.floor((bytesWritten / totalBytes) * 100) + "%";
            },
            4096
        );
        await sleep(100);
    } catch (e) {
        errorMsg(e);
    }

    try {
        await espStub.flashData(
            partitions,
            (bytesWritten, totalBytes) => {
                progressBar.style.width =
                    Math.floor((bytesWritten / totalBytes) * 100) + "%";
            },
            32768
        );
        await sleep(100);
    } catch (e) {
        errorMsg(e);
    }

    try {
        await espStub.flashData(
            app,
            (bytesWritten, totalBytes) => {
                progressBar.style.width =
                    Math.floor((bytesWritten / totalBytes) * 100) + "%";
            },
            57344
        );
        await sleep(100);
    } catch (e) {
        errorMsg(e);
    }

    try {
        await espStub.flashData(
            firm,
            (bytesWritten, totalBytes) => {
                progressBar.style.width =
                    Math.floor((bytesWritten / totalBytes) * 100) + "%";
            },
            65536
        );
        await sleep(100);
    } catch (e) {
        errorMsg(e);
    }

    logMsg("Para executar o novo firmware, reinicie o seu dispositivo.");
}

/**
 * @name clickClear
 * Click handler for the clear button.
 */
async function clickClear() {
    // reset();     Reset function wasnt declared.
    log.innerHTML = "";
}

function convertJSON(chunk) {
    try {
        let jsonObj = JSON.parse(chunk);
        return jsonObj;
    } catch (e) {
        return chunk;
    }
}

function toggleUIConnected(connected) {
    let lbl = "Conectar ESP";
    if (connected) {
        lbl = "Desconectar ESP";
    }
    butConnect.textContent = lbl;
}

function loadAllSettings() {
    autoscroll.checked = loadSetting("autoscroll", true);
    baudRate.value = loadSetting("baudrate", 115200);
}

function loadSetting(setting, defaultValue) {
    let value = JSON.parse(window.localStorage.getItem(setting));
    if (value == null) {
        return defaultValue;
    }

    return value;
}

function saveSetting(setting, value) {
    window.localStorage.setItem(setting, JSON.stringify(value));
}

function ucWords(text) {
    return text
        .replace("_", " ")
        .toLowerCase()
        .replace(/(?<= )[^\s]|^./g, (a) => a.toUpperCase());
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function clickReset() {
    try {
        await espStub.hardReset();
        logMsg("");
        logMsg("");

    } catch (e) {
        errorMsg(e);
    }
}

