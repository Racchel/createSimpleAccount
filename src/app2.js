// modulos externos
import inquirer from 'inquirer'
import chalk from 'chalk'

// modulos internos
import fs from 'fs'

// START
const start = async () => {
  infoMessage('Bem vindo(a) ao CreateSimpleAccount!')

  //   const { menu } = makeMenu()

  //   return menu.start()
  const { accountRepo } = makeAccount()
  return await menu(accountRepo)
}

// FACTORY
const makeAccount = () => {
  const account = new Account()
  const accountRepo = new AccountRepository(account)

  return {
    account,
    accountRepo
  }
}

const makeMenu = () => {
  const { accountRepo } = makeAccount()

  const menu = new Menu(accountRepo)

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
  constructor (accountRepo) {
    this.accountRepo = accountRepo
  }

  async start () {
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
      if (ch === 'Login') return await this.accountRepo.userInput({ isCreate: false })
      if (ch === 'Criar') return await this.accountRepo.userInput({ isCreate: true })
      if (ch === 'Consultar') return await this.accountRepo.checkBalance()
      if (ch === 'Depositar') return await this.accountRepo.deposit()
      if (ch === 'Sacar') return await this.accountRepo.withdraw()
      if (ch === 'Sair') return this.exitProcess()

      await this.start()
    } catch (err) {
      console.error(err)
    }
  }

  exitProcess () {
    infoMessage('Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!')
    return process.exit()
  }
}

const menu = async (accountRepo) => {
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
    if (ch === 'Login') return await accountRepo.userInput({ isCreate: false })
    if (ch === 'Criar') return await accountRepo.userInput({ isCreate: true })
    if (ch === 'Consultar') return await accountRepo.checkBalance()
    if (ch === 'Depositar') return await accountRepo.deposit()
    if (ch === 'Sacar') return await accountRepo.withdraw()
    if (ch === 'Sair') return exitProcess()

    await start(accountRepo)
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
class AccountRepository {
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

start()
