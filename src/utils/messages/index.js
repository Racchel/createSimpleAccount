// modulos externos
import chalk from 'chalk'

// MENSAGENS
const successMessage = (msg) => { console.log(chalk.bgGreen.black(msg)) }
const infoMessage = (msg) => { console.log(chalk.bgCyan.black(msg)) }
const loginMessage = (msg) => { console.log(chalk.bgWhite.black(msg)) }
const errorMessage = (msg) => { console.log(chalk.bgRed.black(msg)) }

export {
  successMessage,
  infoMessage,
  loginMessage,
  errorMessage
}
