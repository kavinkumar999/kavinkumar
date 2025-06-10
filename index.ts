import chalk, { ChalkInstance } from "chalk";
import boxen from "boxen";

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
interface Details {
  name: string;
  occupation: string;
  website: string;
  github: string;
  linkedin: string;
  email: string;
}

const details: Details = {
  name: chalk.cyanBright("Kavin Kumar"),
  occupation: chalk.yellowBright("Software Engineer | ZOHO"),
  website: chalk.cyanBright(`https://kavinkumar.me`),
  github: chalk.greenBright(`https://github.com/kavikumar999`),
  linkedin: chalk.blueBright(`https://linkedin.com/in/kavinkumar999`),
  email: chalk.magentaBright(`kavin.kumar21k@gmail.com`),
};

const info = [
  `${chalk.bold("👤 Name:")} ${details.name}`,
  `${chalk.bold("💼 Role:")} ${details.occupation}`,
  `${chalk.bold("🚀 Website:")} ${details.website}`,
  `${chalk.bold("📦 GitHub:")} ${details.github}`,
  `${chalk.bold("💌 Email:")} ${details.email}`,
  `${chalk.bold("🔗 LinkedIn:")} ${details.linkedin}`,
];

const asciiLogoLines = asciiLogo.trim().split("\n");
const infoLines = info;

const logoWidth = Math.max(...asciiLogoLines.map((line) => line.length));

const outputLines = [];
for (let i = 0; i < Math.max(asciiLogoLines.length, infoLines.length); i++) {
  const logoLine = asciiLogoLines[i] || "";
  const infoLine = infoLines[i] || "";
  const paddedLogoLine = logoLine.padEnd(logoWidth, " ");
  outputLines.push(`${paddedLogoLine}    ${infoLine}`);
}

const output = outputLines.join("\n");
const message = boxen(output, { padding: 1, margin: 1, borderStyle: "classic" });

console.log(message);