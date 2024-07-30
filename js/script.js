const baudrates = 921600;
const clearButton = document.getElementById("botLimpar");
const consoleBaudrates = document.getElementById("baudRate");
const connectButton = document.getElementById("botConectar");
const resetButton = document.getElementById("botReset");
const eraseButton = document.getElementById("botApagar");
const consoleStartButton = document.getElementById("botStartTerminal");
const programButton = document.getElementById("botUpload");
const terminal = document.getElementById("monitor");
const logo = document.getElementById("logo");
const addFileButton = document.getElementById("addFile");
const variacoes = [":)", ";)"];
const chipID = document.getElementById("chipID");

const table = document.getElementById("fileTable");

import { ESPLoader, FlashOptions, LoaderOptions, Transport } from "../../../lib";
import { serial } from "web-serial-polyfill";
if (!navigator.serial && navigator.usb) navigator.serial = serial;

declare let Terminal; // Terminal is imported in HTML script
declare let CryptoJS; // CryptoJS is imported in HTML script

const term = new Terminal({ cols: 159, rows: 41 });
term.open(terminal);

let device = null;
let transport: Transport;
let chip: string = null;
let esploader: ESPLoader;
let indiceVariacoes = 0;

/**
 * The built in Event object.
 * @external Event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */

/**
 * File reader handler to read given local file.
 * @param {Event} evt File Select event
 */
function handleFileSelect(evt) {
    const file = evt.target.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = (ev: ProgressEvent<FileReader>) => {
        evt.target.data = ev.target.result;
    };

    reader.readAsBinaryString(file);
}

const espLoaderTerminal = {
    clean() {
        term.clear();
    },
    writeLine(data) {
        term.writeln(data);
    },
    write(data) {
        term.write(data);
    },
};

function errorMsg(text) {
    term.writeln('<span class="error-message">Erro:</span> ' + text);
    console.error(text);
}

connectButton.onclick = async () => {
    if (conectadoUI) {
        if (transport) await transport.disconnect();
        cleanUp();
    }

    else {
        if (device === null) {
            device = await navigator.serial.requestPort({});
            transport = new Transport(device, true);
        }

        try {
            const flashOptions = {
                transport,
                baudrate: parseInt(baudrates.value),
                terminal: espLoaderTerminal,
            } as LoaderOptions;
            esploader = new ESPLoader(flashOptions);

            chip = await esploader.main();

            conectadoUI(true);
        } catch (e) {
            errorMsg(e);
            conectadoUI(false);
        }

        console.log("Configurações finalizadas no " + chip);
        chipID.innerHTML = "Conectado a " + chip;
    }
};

resetButton.onclick = async () => {
    if (transport) {
        await transport.setDTR(false);
        await new Promise((resolve) => setTimeout(resolve, 100));
        await transport.setDTR(true);
    }
};

eraseButton.onclick = async () => {
    eraseButton.disabled = true;
    try {
        await esploader.eraseFlash();
    } catch (e) {
        errorMsg(e);
    } finally {
        eraseButton.disabled = false;
    }
};

clearButton.onclick = async () => {
    term.reset();
};

addFileButton.onclick = () => {
    const rowCount = table.rows.length;
    const row = table.insertRow(rowCount);

    //Column 1 - Offset
    const cell1 = row.insertCell(0);
    const element1 = document.createElement("input");
    element1.type = "text";
    element1.id = "offset" + rowCount;
    element1.value = "0x1000";
    cell1.appendChild(element1);

    // Column 2 - File selector
    const cell2 = row.insertCell(1);
    const element2 = document.createElement("input");
    element2.type = "file";
    element2.id = "selectFile" + rowCount;
    element2.name = "selected_File" + rowCount;
    element2.addEventListener("change", handleFileSelect, false);
    cell2.appendChild(element2);

    // Column 3  - Progress
    const cell3 = row.insertCell(2);
    cell3.classList.add("progress-cell");
    cell3.innerHTML = `<progress value="0" max="100"></progress>`;

    // Column 4  - Remove File
    const cell4 = row.insertCell(3);
    cell4.classList.add("action-cell");
    if (rowCount > 1) {
        const element4 = document.createElement("input");
        element4.type = "button";
        const btnName = "button" + rowCount;
        element4.name = btnName;
        element4.setAttribute("class", "btn");
        element4.setAttribute("value", "Remove"); // or element1.value = "button";
        element4.onclick = function () {
        };
        cell4.appendChild(element4);
    }
};

setInterval(() => {
    logo.innerHTML = variacoes[indiceVariacoes];
    indiceVariacoes = (indiceVariacoes + 1) % variacoes.length;
}, 1000);

/**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */
function cleanUp() {
    device = null;
    transport = null;
    chip = null;
}

function conectadoUI(connected) {
    let lbl = "Conectar ESP";
    if (connected) {
        lbl = "Desconectar ESP";
    }
    botConectar.innerHTML = lbl;
}



let isConsoleClosed = false;
consoleStartButton.onclick = async () => {
    if (device === null) {
        device = await navigator.serial.requestPort({});
        transport = new Transport(device, true);
    }

    await transport.connect(parseInt(consoleBaudrates.value));
    isConsoleClosed = false;

    while (true && !isConsoleClosed) {
        const val = await transport.rawRead();
        if (typeof val !== "undefined") {
            term.write(val);
        } else {
            break;
        }
    }
    console.log("quitting console");
};

/**
 * Validate the provided files images and offset to see if they're valid.
 * @returns {string} Program input validation result
 */
function validateProgramInputs() {
    const offsetArr = [];
    const rowCount = table.rows.length;
    let row;
    let offset = 0;
    let fileData = null;

    // check for mandatory fields
    for (let index = 1; index < rowCount; index++) {
        row = table.rows[index];

        //offset fields checks
        const offSetObj = row.cells[0].childNodes[0];
        offset = parseInt(offSetObj.value);

        // Non-numeric or blank offset
        if (Number.isNaN(offset)) return "Offset field in row " + index + " is not a valid address!";
        // Repeated offset used
        else if (offsetArr.includes(offset)) return "Offset field in row " + index + " is already in use!";
        else offsetArr.push(offset);

        const fileObj = row.cells[1].childNodes[0];
        fileData = fileObj.data;
        if (fileData == null) return "No file selected for row " + index + "!";
    }
    return "success";
}

programButton.onclick = async () => {
    const alertMsg = document.getElementById("alertmsg");
    const err = validateProgramInputs();

    if (err != "success") {
        alertMsg.innerHTML = "<strong>" + err + "</strong>";
        return;
    }

    const fileArray = [];
    const progressBars = [];

    for (let index = 1; index < table.rows.length; index++) {
        const row = table.rows[index];

        const offSetObj = row.cells[0].childNodes[0];
        const offset = parseInt(offSetObj.value);

        const fileObj = row.cells[1].childNodes[0] as ChildNode & { data: string };
        const progressBar = row.cells[2].childNodes[0];

        progressBar.textContent = "0";
        progressBars.push(progressBar);

        fileArray.push({ data: fileObj.data, address: offset });
    }

    try {
        const flashOptions: FlashOptions = {
            fileArray: fileArray,
            flashSize: "keep",
            eraseAll: false,
            compress: true,
            reportProgress: (fileIndex, written, total) => {
                progressBars[fileIndex].value = (written / total) * 100;
            },
            calculateMD5Hash: (image) => CryptoJS.MD5(CryptoJS.enc.Latin1.parse(image)),
        } as FlashOptions;
        await esploader.writeFlash(flashOptions);
    } catch (e) {
        errorMsg(e);
    } finally {
        // Hide progress bars and show erase buttons
        for (let index = 1; index < table.rows.length; index++) {
        }
    }
};

addFileButton.onclick(this);
