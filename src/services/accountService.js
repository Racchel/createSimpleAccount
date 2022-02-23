import inquirer from 'inquirer'
import { returnQuestions } from './index.js'
import { errorMessage, infoMessage } from '../utils/messages/index.js'

export default class AccountService {
  constructor (account) {
    this.ACCOUNT = account
  }

  async userInput ({ isCreate }) {
    // input de usuario
    const qUsername = returnQuestions({ indexs: [0] })
    const { username } = await inquirer.prompt(qUsername)

    // validar usuario
    if (username === '') {
      errorMessage('Usuário é obrigatório!')
      return await this.userInput({ isCreate })
    }

    const usernameCorrect = this.ACCOUNT.checkUsername(username)

    if (!usernameCorrect && isCreate === false) {
      errorMessage('Essa conta não existe! Por favor, informe novamente')
      return await this.userInput({ isCreate })
    }

    if (usernameCorrect && isCreate === true) {
      errorMessage('Essa conta já existe! Por favor, escolha outro usuario!')
      return await this.userInput({ isCreate })
    }

    // input de senha
    const qPassword = returnQuestions({ indexs: [1] })
    const { password } = await inquirer.prompt(qPassword)

    // validar senha
    if (password === '') {
      errorMessage('Senha é obrigatória!')
      return await this.userInput({ isCreate })
    }

    const passwordCorrect = this.ACCOUNT.checkPassword(password)

    if (!passwordCorrect && isCreate === true) {
      errorMessage('Senha inválida!')
      infoMessage(' A senha deve ter, no mínimo, 8 caracteres, um MAIUSCULO, um minusculo, um número e um caracter especial. Exemplo: AAaa*2022')
      return await this.userInput({ isCreate })
    }

    // se tudo der certo
    return (isCreate)
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

      const { deposit } = await inquirer.prompt(arrayQuestions)

      if (deposit === '') return errorMessage('Valor é obrigatório!')
      if (isNaN(deposit)) {
        errorMessage('Valor deve ser numérico')
        return await this.deposit()
      }
      return this.ACCOUNT.deposit({ deposit })
    }
  }

  async withdraw () {
    if (this.ACCOUNT.checkLogin()) {
      const arrayQuestions = returnQuestions({ indexs: [3] })

      const withdraw = await inquirer.prompt(arrayQuestions)

      return this.ACCOUNT.withdraw(withdraw)
    }
  }

  async logout () {
    if (this.ACCOUNT.checkLogin()) {
      return this.ACCOUNT.logout()
    }
  }
}
