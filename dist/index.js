"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const jimp_1 = __importDefault(require("jimp"));
const main = async () => {
    const inputFolder = './input';
    const outputFolder = './output';
    const files = await fs_1.default.promises.readdir(inputFolder);
    for (const file of files) {
        const inputPath = path_1.default.join(inputFolder, file);
        const outputPath = path_1.default.join(outputFolder, file);
        if (file !== '.gitkeep') {
            console.log(`Converting ${file}`);
            const image = await jimp_1.default.read(inputPath);
            image.greyscale().write(outputPath);
        }
    }
    const separator = '=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=';
    console.log(separator);
    console.log(`        Finished!(●'◡'●)`);
    console.log(separator);
};
main()
    .catch((err) => console.error(err));
