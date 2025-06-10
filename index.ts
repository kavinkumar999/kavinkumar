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
  about: string;
}

const details: Details = {
  name: chalk.cyanBright("Kavin Kumar"),
  occupation: chalk.yellowBright("Software Engineer | ZOHO"),
  website: chalk.cyanBright(`https://kavinkumar.me`),
  github: chalk.greenBright(`https://github.com/kavikumar999`),
  linkedin: chalk.blueBright(`https://linkedin.com/in/kavinkumar999`),
  email: chalk.magentaBright(`kavin.kumar21k@gmail.com`),
  about: chalk.white(`Making impossible to possible with ${chalk.green('0s')} and ${chalk.green('1s')}`),
};

const info = [
  `${chalk.bold("👤 Name:")} ${details.name}`,
  `${chalk.bold("💼 Role:")} ${details.occupation}`,
  `${chalk.bold("🚀 Website:")} ${details.website}`,
  `${chalk.bold("📦 GitHub:")} ${details.github}`,
  `${chalk.bold("💌 Email:")} ${details.email}`,
  `${chalk.bold("🔗 LinkedIn:")} ${details.linkedin}`,
  `${chalk.bold("💬 About:")} ${details.about}`,
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
const message = boxen(output, { padding: 1, margin: 1, borderStyle: "classic" });

console.log(message);