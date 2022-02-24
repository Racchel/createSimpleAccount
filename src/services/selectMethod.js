import inquirer from 'inquirer'
import { infoMessage, loginMessage } from '../utils/messages/index.js'

const selectMethod = async (accountService) => {
  // Mostra qual usuario está logado no momento

  loginMessage(`Logged in user is: ${
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

    const firstWordOfChoice = choice.action.split(' ')[0]

    // console.log(firstWordOfChoice)
    if (firstWordOfChoice === 'Login') await accountService.userInput({ isCreateAccount: false })
    if (firstWordOfChoice === 'Criar') await accountService.userInput({ isCreateAccount: true })
    if (firstWordOfChoice === 'Consultar') await accountService.checkBalance()
    if (firstWordOfChoice === 'Depositar') await accountService.deposit()
    if (firstWordOfChoice === 'Sacar') await accountService.withdraw()
    if (firstWordOfChoice === 'Logout') await accountService.logout()
    if (firstWordOfChoice === 'Sair') exitProcess()

    console.log('Loading...')

    setTimeout(async () => {
      console.clear()
      return await selectMethod(accountService)
    }, 3000)
  } catch (err) {
    console.error(err)
  }
}

const exitProcess = () => {
  infoMessage('Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!')
  return process.exit()
}

export default selectMethod
