// MODULOS EXTERNOS
import inquirer from 'inquirer'
import chalk from 'chalk'

// MODULOS INTERNOS
import fs from 'fs'

// ACCOUNT
class Account {
  login ({ username, password }) {
    console.log(chalk.bgGreen.black('Login'))
    console.log(`username: ${username} | password: ${password}`)
  }

  create ({ username, password }) {
    console.log(chalk.bgGreen.black('Criar nova conta'))
    console.log(`username: ${username} | password: ${password}`)
  }

  checkBalance ({ username, password }) {

  }

  deposit ({ username, password }) {

  }

  withdraw ({ username, password }) {

  }
}

// FACTORY
const makeAccount = () => {
  const account = new Account()

  return account
}

// Menu
const accountChoices = [
  'Criar conta',
  'Fazer login',
  'Consultar saldo',
  'Depositar',
  'Sacar',
  'Sair'
]

// Perguntas
const returnQuestions = ({ indexs, isCreate = false }) => {
  const questions = [
    // criar a conta: checkUsername deve retornar false
    {
      name: 'username',
      message: 'Usuario: ',
      validate: isCreate
        ? (username) => !(checkUsername(username))
        : (username) => (checkUsername(username))
    },
    // senha correta: checkPassword deve retornar true
    {
      name: 'password',
      message: 'Senha:',
      validate: isCreate
        ? (password) => (checkCreatedPassword(password))
        : (password) => (checkPassword(password))
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

  //   console.log(indexs)

  const arrayQuestions = indexs.map(i => questions[i])

  return {
    arrayQuestions
  }
}

// INICIO DO PROGRAMA

const menu = async () => {
  console.log('Bem vindo(a) ao CreateSimpleAccount!')

  const account = makeAccount()

  try {
    const answer = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer?',
      choices: accountChoices
    }])

    //  console.log(answer.action)

    const accountChoicesAndFeatures = [
      { 'Criar conta': createInput({ account: account, isCreate: true }) },
      { 'Fazer login': createInput({ account: account, isCreate: false }) },
      { 'Consultar saldo': checkBalanceInput(account) },
      { Depositar: depositInput(account) },
      { Sacar: withdrawInput(account) },
      { Sair: exitInput(account) }
    ]

    accountChoicesAndFeatures.map(choose => {
      return choose[answer.action]
    })
  } catch (err) {
    console.log(err)
  }
}

const createInput = async ({ account, isCreate }) => {
  try {
    const { arrayQuestions } = returnQuestions({ indexs: [0, 1], isCreate: isCreate })
    console.log(arrayQuestions)

    const { username, password } = await inquirer.prompt(arrayQuestions)

    isCreate
      ? account.create({ username, password })
      : account.login({ username, password })

    return
  } catch (err) {
    console.log(err)
  }
}
const checkBalanceInput = async (account) => {
  try {
    //  console.log('o')
  } catch (err) {
    console.log(err)
  }
}

const depositInput = async (account) => {}

const withdrawInput = async (account) => {}

const exitInput = async (account) => {}

// Helpers

const checkUsername = (username) => {
  return fs.existsSync(`../accounts/${username}.json`)
}

const checkCreatedPassword = (password) => {
  return true
}

const checkPassword = (password) => {
  return true
}

const checkBalance = async (account) => {
  return true
}

menu()
