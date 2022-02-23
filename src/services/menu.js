import inquirer from 'inquirer'
import { infoMessage } from '../utils/messages/index.js'

const menu = async (accountService) => {
  try {
    const choice = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer?',
      choices: [
        'Login',
        'Criar conta',
        'Consultar saldo',
        'Depositar',
        'Sacar',
        'Sair'
      ]
    }])

    const ch = choice.action.split(' ')[0]

    console.log(ch)
    if (ch === 'Login') await accountService.userInput({ isCreate: false })
    if (ch === 'Criar') await accountService.userInput({ isCreate: true })
    if (ch === 'Consultar') await accountService.checkBalance()
    if (ch === 'Depositar') await accountService.deposit()
    if (ch === 'Sacar') await accountService.withdraw()
    if (ch === 'Sair') exitProcess()

    return await menu(accountService)
  } catch (err) {
    console.error(err)
  }
}

const exitProcess = () => {
  infoMessage('Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!')
  return process.exit()
}

export default menu
