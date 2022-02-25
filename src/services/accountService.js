import inquirer from 'inquirer'
import { returnQuestions } from './index.js'
import { errorMessage, infoMessage } from '../utils/messages/index.js'

export default class AccountService {
  constructor (account) {
    this.ACCOUNT = account
  }

  async userInput ({ isCreateAccount }) {
    try {
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
        errorMessage('Essa conta já existe! Por favor, escolha outro usuário!')
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

      if (!passwordIsCorrect && isCreateAccount === false) {
        errorMessage('Senha inválida!')
        infoMessage('Você deseja recuperar a senha?')

        const choice = await inquirer.prompt([{
          name: 'action',
          message: 'Caso queira, digite 1. Caso contrário, digite 2: '
        }])

        return choice.action === '1'
          ? (
              infoMessage('Recuperar conta: '),
              console.log('A fazer...')
            )
          : (
              infoMessage('Login: '),
              await this.userInput({ isCreateAccount })
            )
      }

      // se tudo der certo
      return (isCreateAccount)
        ? this.ACCOUNT.create({ username, password })
        : this.ACCOUNT.login({ username, password })
    } catch (err) {
      console.error(err)
    }
  }

  checkBalance () {
    if (this.ACCOUNT.checkLogin()) {
      return this.ACCOUNT.checkBalance()
    }
  }

  async deposit () {
    try {
      if (this.ACCOUNT.checkLogin()) {
        const arrayQuestions = returnQuestions({ indexs: [2] })

        const { depositAmount } = await inquirer.prompt(arrayQuestions)

        if (depositAmount === '') {
          errorMessage('Valor de depósito é obrigatório!')
          return await this.deposit()
        }

        if (isNaN(depositAmount)) {
          errorMessage('Valor de depósito deve ser numérico!')
          return await this.deposit()
        }
        return this.ACCOUNT.deposit({ depositAmount })
      }
    } catch (err) {
      console.error(err)
    }
  }

  async withdraw () {
    try {
      if (this.ACCOUNT.checkLogin()) {
        const arrayQuestions = returnQuestions({ indexs: [3] })

        const { withdrawAmount } = await inquirer.prompt(arrayQuestions)

        if (withdrawAmount === '') {
          errorMessage('Valor de saque é obrigatório!')
          return this.withdraw()
        }

        if (isNaN(withdrawAmount)) {
          errorMessage('Valor deve ser numérico')
          return await this.withdraw()
        }

        if (withdrawAmount > this.ACCOUNT.amount) {
          errorMessage('Valor de saque superior ao saldo! Por favor, informe novamente: ')
          return await this.withdraw()
        }

        return this.ACCOUNT.withdraw({ withdrawAmount })
      }
    } catch (err) {
      console.error(err)
    }
  }

  async logout () {
    if (this.ACCOUNT.checkLogin()) {
      return this.ACCOUNT.logout()
    }
  }
}
