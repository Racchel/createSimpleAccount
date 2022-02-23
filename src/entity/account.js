import { successMessage, infoMessage, errorMessage } from '../utils/messages/index.js'

export default class Account {
  constructor () {
    this.username = ''
    this.password = ''
    this.amount = null
  }

  async create ({ username, password }) {
    return infoMessage(`Criar conta: ${username} | ${password}`)
  }

  async login ({ username, password }) {
    this.username = username
    this.password = password

    infoMessage(`Login: ${this.username} | ${this.password}`)
  }

  async checkBalance () {
    return infoMessage('consultar saldo')
  }

  async deposit ({ deposit }) {
    return successMessage(`Perfeito! O valor de R$${deposit} foi depositado para ${this.username}!`)
  }

  async withdraw ({ withdraw }) {
    return successMessage(`Perfeito! Você sacou um valor de R$${withdraw} da conta <usuario>!`)
  }

  checkLogin () {
    if (this.username === '') {
      errorMessage('Login necessário')
      return false
    }

    return true
  }
}
