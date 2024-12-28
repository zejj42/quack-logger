import chalk from "chalk";

const duckIcon = chalk.yellow("🦆");
const quackLabel = chalk.blue("QUACK:");

function quack(...args) {
  const message = args.join(" ");
  console.log(`${duckIcon} ${quackLabel} ${message}`);
}

export { quack };
