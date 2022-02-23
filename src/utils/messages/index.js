// modulos externos
import chalk from 'chalk'

// MENSAGENS
const successMessage = (msg) => { console.log(chalk.bgGreen.black(msg)) }
const infoMessage = (msg) => { console.log(chalk.bgBlueBright.black(msg)) }
const errorMessage = (msg) => { console.log(chalk.bgRed.black(msg)) }

export {
  successMessage,
  infoMessage,
  errorMessage
}
