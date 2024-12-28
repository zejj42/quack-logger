const fs = require("fs");
const path = require("path");

const cjsContent = `
const chalk = require('chalk');

const duckIcon = chalk.yellow('🦆');
const quackLabel = chalk.blue('QUACK:');

function quack(...args) {
  const message = args.join(' ');
  console.log(\`\${duckIcon} \${quackLabel} \${message}\`);
}

module.exports = { quack };
`;

const esmContent = `
import chalk from 'chalk';

const duckIcon = chalk.yellow('🦆');
const quackLabel = chalk.blue('QUACK:');

function quack(...args) {
  const message = args.join(' ');
  console.log(\`\${duckIcon} \${quackLabel} \${message}\`);
}

export { quack };
`;

const cjsDir = path.join(__dirname, "dist", "cjs");
const esmDir = path.join(__dirname, "dist", "esm");

fs.mkdirSync(cjsDir, { recursive: true });
fs.mkdirSync(esmDir, { recursive: true });

fs.writeFileSync(path.join(cjsDir, "index.cjs"), cjsContent);
fs.writeFileSync(path.join(esmDir, "index.mjs"), esmContent);

console.log("Build completed successfully.");
