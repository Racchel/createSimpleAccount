// modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

// modulos internos
import fs from 'fs'

// START
const start = () => {
  infoMessage('Bem vindo(a) ao CreateSimpleAccount!')

  const { menu } = makeMenu()

  return menu.start()
}

// FACTORY
const makeAccount = () => {
  const account = new Account()
  const accountService = new accountServicesitory(account)

  return {
    account,
    accountService
  }
}

const makeMenu = () => {
  const { accountService } = makeAccount()

  const menu = new Menu(accountService)

  return {
    menu
  }
}

// QUESTIONS
const returnQuestions = ({ indexs }) => {
  const questions = [
    {
      name: 'username',
      message: 'Usuario: ',
      validate: (username) => (checkUsername(username))
    },
    {
      name: 'password',
      message: 'Senha:',
      validate: (password) => (checkPassword(password))
    },
    {
      name: 'deposit',
      message: 'Quanto deseja depositar?'
    },
    {
      name: 'withdraw',
      message: 'Quanto deseja sacar?',
      validate: (withdraw) => checkBalance(withdraw)
    }
  ]

  return indexs.map(i => questions[i])
}

// MENU
class Menu {
  constructor (accountService) {
    this.accountService = accountService
  }

  async start () {
    // console.log(await this.accountService.userInput({ isCreate: false }))
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
      if (ch === 'Login') return await this.accountService.userInput({ isCreate: false })
      if (ch === 'Criar') return await this.accountService.userInput({ isCreate: true })
      if (ch === 'Consultar') return await this.accountService.checkBalance()
      if (ch === 'Depositar') return await this.accountService.deposit()
      if (ch === 'Sacar') return await this.accountService.withdraw()
      if (ch === 'Sair') return exitProcess()

      const selectMethod = {
        Login () { return this.accountService.userInput({ isCreate: false }) },
        Criar () { return this.accountService.userInput({ isCreate: true }) },
        Consultar () { return this.accountService.checkBalance() },
        Depositar () { return this.accountService.deposit() },
        Sacar () { return this.accountService.withdraw() },
        Sair () { return exitProcess() }
      }

      // const ch = choice.action.split(' ')[0]
      // const method = selectMethod[ch]

      // method()
      // this.start()
    } catch (err) {
      console.error(err)
    }
  }
}

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

    const selectMethod = {
      Login () { return accountService.userInput({ isCreate: false }) },
      Criar () { return accountService.userInput({ isCreate: true }) },
      Consultar () { return accountService.checkBalance() },
      Depositar () { return accountService.deposit() },
      Sacar () { return accountService.withdraw() },
      Sair () { return exitProcess() }
    }

    const ch = choice.action.split(' ')[0]
    const method = selectMethod[ch]

    method()
  } catch (err) {
    console.error(err)
  }
}

// ACCOUNT
class Account {
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

// ACCOUNT-REPOSITORY
class accountServicesitory {
  constructor (account) {
    this.ACCOUNT = account
  }

  async userInput ({ isCreate }) {
    const arrayQuestions = returnQuestions({ indexs: [0, 1] })

    const user = await inquirer.prompt(arrayQuestions)

    return (isCreate)
      ? this.ACCOUNT.create(user)
      : this.ACCOUNT.login(user)
  }

  checkBalance () {
    return this.ACCOUNT.checkBalance()
  }

  async deposit () {
    // console.log(this.ACCOUNT.username)

    // if (this.ACCOUNT.username !== '') {
    //   const arrayQuestions = returnQuestions({ indexs: [2] })

    //   const deposit = await inquirer.prompt(arrayQuestions)

    //   return this.ACCOUNT.deposit(deposit)
    // } else {
    //   errorMessage('Login necessário')
    // }

    console.log(this.ACCOUNT.checkLogin())
  }

  async withdraw () {
    const arrayQuestions = returnQuestions({ indexs: [3] })

    const withdraw = await inquirer.prompt(arrayQuestions)

    return this.ACCOUNT.withdraw(withdraw)
  }
}

// FUNÇÕES DE VALIDAÇÃO
const checkUsername = () => { return true }
const checkPassword = () => { return true }
const checkBalance = () => { return true }

// MENSAGENS
const successMessage = (msg) => { console.log(chalk.bgGreen.black(msg)) }
const infoMessage = (msg) => { console.log(chalk.bgBlueBright.black(msg)) }
const errorMessage = (msg) => { console.log(chalk.bgRed.black(msg)) }

// TERMINAR O PROCESSO
const exitProcess = () => {
  infoMessage('Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!')
  return process.exit()
}

start()
