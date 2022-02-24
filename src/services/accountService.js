import inquirer from 'inquirer'
import { returnQuestions } from './index.js'
import { errorMessage, infoMessage } from '../utils/messages/index.js'

export default class AccountService {
  constructor (account) {
    this.ACCOUNT = account
  }

  async userInput ({ isCreateAccount }) {
    // input de usuario
    const usernameQuestion = returnQuestions({ indexs: [0] })
    const { username } = await inquirer.prompt(usernameQuestion)

    // validar usuario
    if (username === '') {
      errorMessage('Usuário é obrigatório!')
      return await this.userInput({ isCreateAccount })
    }

    const usernameIsCorrect = this.ACCOUNT.checkUsername(username)

    if (!usernameIsCorrect && isCreateAccount === false) {
      errorMessage('Essa conta não existe! Por favor, informe novamente')

      const choice = await inquirer.prompt([{
        name: 'action',
        message: 'Caso queira criar uma nova conta, digite 1. Caso contrário, digite 2: '
      }])

      return choice.action === '1'
        ? (
            infoMessage('Criar nova conta: '),
            await this.userInput({ isCreateAccount: true })
          )
        : (
            infoMessage('Login: '),
            await this.userInput({ isCreateAccount })
          )
    }

    if (usernameIsCorrect && isCreateAccount === true) {
      errorMessage('Essa conta já existe! Por favor, escolha outro usuario!')
      return await this.userInput({ isCreateAccount })
    }

    // input de senha
    const passwordQuestion = returnQuestions({ indexs: [1] })
    const { password } = await inquirer.prompt(passwordQuestion)

    // validar senha
    if (password === '') {
      errorMessage('Senha é obrigatória!')
      return await this.userInput({ isCreateAccount })
    }

    const passwordIsCorrect = this.ACCOUNT.checkPassword(password)

    if (!passwordIsCorrect && isCreateAccount === true) {
      errorMessage('Senha inválida!')
      infoMessage(' A senha deve ter, no mínimo, 8 caracteres, um MAIUSCULO, um minusculo, um número e um caracter especial. Exemplo: AAaa*2022')
      return await this.userInput({ isCreateAccount })
    }

    // se tudo der certo
    return (isCreateAccount)
      ? this.ACCOUNT.create({ username, password })
      : this.ACCOUNT.login({ username, password })
  }

  checkBalance () {
    if (this.ACCOUNT.checkLogin()) {
      return this.ACCOUNT.checkBalance()
    }
  }

  async deposit () {
    if (this.ACCOUNT.checkLogin()) {
      const arrayQuestions = returnQuestions({ indexs: [2] })

      const { depositAmount } = await inquirer.prompt(arrayQuestions)

      if (depositAmount === '') return errorMessage('Valor de depósito é obrigatório!')

      if (isNaN(depositAmount)) {
        errorMessage('Valor deve ser numérico')
        return await this.deposit()
      }
      return this.ACCOUNT.deposit({ depositAmount })
    }
  }

  async withdraw () {
    if (this.ACCOUNT.checkLogin()) {
      const arrayQuestions = returnQuestions({ indexs: [3] })

      const { withdrawAmount } = await inquirer.prompt(arrayQuestions)

      if (withdrawAmount === '') return errorMessage('Valor de saque é obrigatório!')

      if (isNaN(withdrawAmount)) {
        errorMessage('Valor deve ser numérico')
        return await this.withdraw()
      }

      return this.ACCOUNT.withdraw(withdrawAmount)
    }
  }

  async logout () {
    if (this.ACCOUNT.checkLogin()) {
      return this.ACCOUNT.logout()
    }
  }
}
