"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const boxen_1 = __importDefault(require("boxen"));
const asciiLogo = `
⣿⣿⣿⣿⣿⣿⣿⣿⠟⠋⠁⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿
⣿⣿⣿⣿⣿⣿⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⣿
⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠆⠜⣿
⣿⣿⣿⣿⠿⠿⠛⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠻⣿⣿
⣿⣿⡏⠁⠀⠀⠀⠀⠀⣀⣠⣤⣤⣶⣶⣶⣶⣶⣦⣤⡄⠀⠀⠀⠀⢀⣴⣿
⣿⣿⣷⣄⠀⠀⠀⢠⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⢿⡧⠇⢀⣤⣶
⣿⣿⣿⣿⣿⣿⣾⣮⣭⣿⡻⣽⣒⠀⣤⣜⣭⠐⢐⣒⠢⢰
⣿⣿⣿⣿⣿⣿⣿⣏⣿⣿⣿⣿⣿⣿⡟⣾⣿⠂⢈⢿⣷⣞
⣿⣿⣿⣿⣿⣿⣿⣿⣽⣿⣿⣷⣶⣾⡿⠿⣿⠗⠈⢻⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠻⠋⠉⠑⠀⠀⢘⢻
⣿⣿⣿⣿⣿⣿⣿⡿⠟⢹⣿⣿⡇⢀⣶⣶⠴⠶⠀⠀⢽
⣿⣿⣿⣿⣿⣿⡿⠀⠀⢸⣿⣿⠀⠀⠣⠀⠀⠀⠀⠀⡟⢿⣿
⣿⣿⣿⡿⠟⠋⠀⠀⠀⠀⠹⣿⣧⣀⠀⠀⠀⠀⡀⣴⠁⢘⡙
⠉⠉⠁⠀⠀⠀⠀⠀⠀⠀⠀⠈⠙⢿⠗⠂⠄⠀⣴⡟⠂⠈⠉    
`;
const details = {
    name: chalk_1.default.cyanBright("Kavin Kumar"),
    occupation: chalk_1.default.yellowBright("Software Engineer | ZOHO"),
    website: chalk_1.default.cyanBright(`https://kavinkumar.me`),
    github: chalk_1.default.greenBright(`https://github.com/kavikumar999`),
    linkedin: chalk_1.default.blueBright(`https://linkedin.com/in/kavinkumar999`),
    email: chalk_1.default.magentaBright(`kavin.kumar21k@gmail.com`),
    about: chalk_1.default.white(`Making impossible to possible with ${chalk_1.default.green('0s')} and ${chalk_1.default.green('1s')}`),
};
const info = [
    `${chalk_1.default.bold("👤 Name:")} ${details.name}`,
    `${chalk_1.default.bold("💼 Role:")} ${details.occupation}`,
    `${chalk_1.default.bold("🚀 Website:")} ${details.website}`,
    `${chalk_1.default.bold("📦 GitHub:")} ${details.github}`,
    `${chalk_1.default.bold("💌 Email:")} ${details.email}`,
    `${chalk_1.default.bold("🔗 LinkedIn:")} ${details.linkedin}`,
    `${chalk_1.default.bold("💬 About:")} ${details.about}`,
];
const asciiLogoLines = asciiLogo.trim().split("\n");
const logoWidth = Math.max(...asciiLogoLines.map((line) => line.length));
const outputLines = [];
let count = 0;
for (let i = 0; i < Math.max(asciiLogoLines.length, info.length); i++) {
    const logoLine = asciiLogoLines[i] || "";
    let infoLine = "";
    if (i % 2 === 0) {
        infoLine = info[count] || "";
        count++;
    }
    const paddedLogoLine = logoLine.padEnd(logoWidth, " ");
    outputLines.push(`${paddedLogoLine}    ${infoLine}`);
}
const output = outputLines.join("\n");
const message = (0, boxen_1.default)(output, { padding: 1, margin: 1, borderStyle: "classic" });
console.log(message);
