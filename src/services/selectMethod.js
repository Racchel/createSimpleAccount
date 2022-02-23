import inquirer from 'inquirer'
import { infoMessage, loginMessage } from '../utils/messages/index.js'

const selectMethod = async (accountService) => {
  // Mostra qual usuario está logado no momento

  loginMessage(`Login: ${
    accountService.ACCOUNT.username
    ? accountService.ACCOUNT.username
    : '------'
  }`)

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
        'Logout',
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
    if (ch === 'Logout') await accountService.logout()
    if (ch === 'Sair') exitProcess()

    console.log('Loading...')

    setTimeout(async () => {
      console.clear()
      return await selectMethod(accountService)
    }, 1000)
  } catch (err) {
    console.error(err)
  }
}

const exitProcess = () => {
  infoMessage('Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!')
  return process.exit()
}

export default selectMethod
