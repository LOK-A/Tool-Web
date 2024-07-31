const consoleBaudrates = document.getElementById("baud") as HTMLSelectElement;
const clearButton = document.getElementById("botLimpar") as HTMLButtonElement;
const connectButton = document.getElementById("botConectar") as HTMLButtonElement;
const resetButton = document.getElementById("botReset") as HTMLButtonElement;
const eraseButton = document.getElementById("botApagar") as HTMLButtonElement;
const consoleStartButton = document.getElementById("botStartTerminal") as HTMLButtonElement;
const programButton = document.getElementById("botUpload") as HTMLButtonElement;
const comando = document.getElementById("entradaComando") as HTMLInputElement;
const terminal = document.getElementById("monitor");
const chipID = document.getElementById("chipID");

const table = document.getElementById("fileTable") as HTMLTableElement;

import {
    IEspLoaderTerminal,
    ESPLoader,
    FlashOptions,
    LoaderOptions,
    classicReset,
    customReset,
    hardReset,
    usbJTAGSerialReset,
    validateCustomResetStringSequence,
    ROM,
    Transport,
    SerialOptions
} from "esptool-js/lib/index.js";
import { serial } from "web-serial-polyfill";
if (!navigator.serial && navigator.usb) navigator.serial = serial;

//declare let Terminal; // Terminal is imported in HTML script
declare let CryptoJS; // CryptoJS is imported in HTML script

import { Terminal } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';

const term = new Terminal();
const fitAddon = new FitAddon();

term.loadAddon(fitAddon);
term.options = {
    fontSize: 11,
    fontFamily: 'Nanum Gothic',
    letterSpacing: -4,
    lineHeight: 1.4,
}

term.open(terminal);
fitAddon.fit();
mLog('Terminal iniciado...');
term.writeln('');


let device = null;
let transport: Transport;
let chip: string = null;
let esploader: ESPLoader;

/**
 * The built in Event object.
 * @external Event
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Event}
 */

/**
 * File reader handler to read given local file.
 * @param {Event} evt File Select event
 */
function mLog(text) {
    term.writeln(text);
}

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

connectButton.onclick = async () => {
    if (device === null) {
        {
            device = await navigator.serial.requestPort({});
            transport = new Transport(device, true);
        }
        try {
            const flashOptions = {
                transport,
                baudrate: parseInt(consoleBaudrates.value),
                terminal: espLoaderTerminal,
            } as LoaderOptions;
            esploader = new ESPLoader(flashOptions);

            chip = await esploader.main();

            // Temporarily broken
            // await esploader.flashId();
        } catch (e) {
            mLog('Erro: ' + e);
        }
        connectButton.value = 'Desconectar';
        mLog("Configurações finalizadas em " + chip);
        chipID.innerHTML = "Conectado a " + chip;

    }
    else {
        if (transport) await transport.disconnect();
        connectButton.value = 'Conectar ESP';
        cleanUp();
        mLog('Desconectado do ESP...');
    }
};

resetButton.onclick = async () => {
    try {
        await classicReset(transport, 100);
        //mLog("Resetando ESP...");
    } catch (e) {
        //errorMsg(e);
    }
};

eraseButton.onclick = async () => {
    if (device === null) { //mLog("***Sem conexão***"); 
    }
    else {
        eraseButton.disabled = true;
        try {
            await esploader.eraseFlash();
        } catch (e) {
            // mLog('Erro: ' + e);
        } finally {
            eraseButton.disabled = false;
        }
    }
};

clearButton.onclick = async () => {
    term.reset();
};

/*
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
            removeRow(row);
        };
        cell4.appendChild(element4);
    }
};
*/

/**
 * The built in HTMLTableRowElement object.
 * @external HTMLTableRowElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableRowElement}
 */

/**
 * Remove file row from HTML Table
 * @param {HTMLTableRowElement} row Table row element to remove
 */

/*
function removeRow(row: HTMLTableRowElement) {
    const rowIndex = Array.from(table.rows).indexOf(row);
    table.deleteRow(rowIndex);
}
*/

/**
 * Clean devices variables on chip disconnect. Remove stale references if any.
 */
function cleanUp() {
    device = null;
    transport = null;
    chip = null;
}

let isConsoleClosed = false;

consoleStartButton.onclick = async () => {
    if (device === null) {
        device = await navigator.serial.requestPort({});
        transport = new Transport(device, false);
    }
    await transport.connect(parseInt(consoleBaudrates.value));
    isConsoleClosed = false;
    mLog("Conectado");

    while (true && !isConsoleClosed) {
        connectButton.value = 'Desconectar';
        const val = await transport.rawRead();
        if (typeof val !== "undefined") {
            term.write(val);
        } else {
            break;
        }
    }

    if (device === null) {
        mLog("Desconectado");
        connectButton.value = 'Conectar ESP';
    }
    console.log("quitting console");
};

//consoleStopButton.onclick = async () => {
//    isConsoleClosed = true;
//    if (transport) {
//      await transport.disconnect();
//      await transport.waitForUnlock(1500);
//    }
//    term.reset();
//    cleanUp();
//  };

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

/*programButton.onclick = async () => {
    const err = validateProgramInputs();

    if (err != "success") {
        const alertMsg = "<strong>" + err + "</strong>";
        errorMsg(alertMsg);
        return;
    }

    const fileArray = [];
    const progressBars = [];

    for (let index = 1; index < table.rows.length; index++) {
        const row = table.rows[index];

        const offSetObj = row.cells[0].childNodes[0] as HTMLInputElement;
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
        mLog('ERRO:' + e);
    } finally {
        // Hide progress bars and show erase buttons
        for (let index = 1; index < table.rows.length; index++) {
        }
    }
};*/


export type Partition = {
    name: string;
    data: Uint8Array;
    offset: number;
}

/*
programButton.onclick = async () => {

    1500000 --flash_mode dio--flash_freq 80m--flash_size detect
    0x1000 "../bin/bootloader_qio_80m.bin"
    0x8000 "../bin/partitions.bin"
    0xe000 "../bin/boot_app0.bin"
    0x10000 "../bin/firmware.bin"
    0x3B0000 "../bin/spiffs.img"

    // TODO: Here you have to specify the partitions you want to flash to the ESP32.
    const partitions: Partition[{ "bootloader_qio_80m.bin", 4096 }, { "partitions.bin", 32768}, { "boot_app0.bin", 57344}, { "firmware.bin", 65536}] =[];

    await port.open({ baudRate: 115200 });
    try {
        const loader = new EspLoader(port, { debug: true, logger: console });
        mLog("connecting...");
        await loader.connect();
        try {
            mLoglog("connected");
            mLoglog("writing device partitions");
            const chipName = await loader.chipName();
            const macAddr = await loader.macAddr();
            await loader.loadStub();
            await loader.setBaudRate(options.baudRate, 921600);


            for (let i = 0; i < partitions.length; i++) {
                options.logger.log("\nWriting partition: " + partitions[i].name);
                await loader.flashData(partitions[i].data, partitions[i].offset, function (idx, cnt) {
                    if (options.progressCallback) {
                        options.progressCallback(partitions[i].name, idx, cnt);
                    }
                });
                await sleep(100);
            }
            options.logger.log("successfully written device partitions");
            options.logger.log("flashing succeeded");
        } finally {
            await loader.disconnect();
        }
    } finally {
        await port.close();
    }
};

//addFileButton.onclick(this);
*/
comando.onchange = async () => {
    if (device === null) {
        mLog("***Sem conexão***");
    }
    else {
        mLog(comando.value);
        transport.write(comando.value);
        espLoaderTerminal.writeLine(comando.value);
        comando.value = '';
    }
};


