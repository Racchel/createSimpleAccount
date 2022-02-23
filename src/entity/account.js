import { successMessage, infoMessage, errorMessage } from '../utils/messages/index.js'
import { encrypter, decrypt } from '../utils/encrypter/index.js'

export default class Account {
  constructor () {
    this.username = ''
    this.password = ''
    this.amount = 0
    this.accountList = []
  }

  async create ({ username, password }) {
    const encryptedPassword = encrypter(password)

    this.accountList.push({ username: username, password: encryptedPassword })
    return successMessage(`Obrigado pela confiança! Sua conta foi criada como sucesso!: ${username}`)
  }

  async login ({ username, password }) {
    const accountCorrect = this.accountList.some(
      (account) => {
        const decryptedPassword = decrypt(account.password)
        return account.username === username && decryptedPassword === password
      }
    )

    if (!accountCorrect) return errorMessage('Usuário ou senha estão incorretos.')

    this.username = username
    this.password = encrypter(password)

    successMessage(`Usuário ${this.username} logado!`)

    return true
  }

  async logout () {
    this.username = ''
    this.password = ''

    infoMessage('Você está deslogado.')
  }

  async checkBalance () {
    return infoMessage(`Seu saldo é de: R$${this.amount}`)
  }

  async deposit ({ deposit }) {
    this.amount += parseFloat(deposit)

    return successMessage(`Perfeito! O valor de R$${deposit} foi depositado para ${this.username}!`)
  }

  async withdraw ({ withdraw }) {
    return successMessage(`Perfeito! Você sacou um valor de R$${withdraw} da conta <usuario>!`)
  }

  // funções de validação
  checkLogin () {
    if (this.username === '') {
      errorMessage('Login necessário')
      return false
    }

    return true
  }

  checkUsername (username) {
    return this.accountList.some(
      (account) => {
        return account.username === username
      }
    )
  }

  checkPassword (password) {
    /*
      (?=.*\d)              // deve conter ao menos um dígito
      (?=.*[a-z])           // deve conter ao menos uma letra minúscula
      (?=.*[A-Z])           // deve conter ao menos uma letra maiúscula
      (?=.*[$*&@#])         // deve conter ao menos um caractere especial
      [0-9a-zA-Z$*&@#]{8,}  // deve conter ao menos 8 dos caracteres mencionados
    */

    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

    return regex.test(password)
  }
}
