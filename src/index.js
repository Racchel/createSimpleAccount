// MODULOS EXTERNOS
import inquirer from 'inquirer'
import chalk from 'chalk'

// MODULOS INTERNOS
import fs from 'fs'

// ACCOUNT
class Account {
  create ({ username, password }) {

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

// INICIO DO PROGRAMA

const accountChoices = [
  'Criar conta',
  'Consultar saldo',
  'Depositar',
  'Sacar',
  'Sair'
]

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

    console.log(answer.action)

    const accountChoicesAndFeatures = [
      { 'Criar conta': createInput(account) },
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

const start = async (isCreate = false) => {
  const questions = [
    // criar a conta: checkUsername deve retornar false
    {
      name: 'usernameCreate',
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

  try {
    const answers = await inquirer.prompt([questions[0], questions[1]])
    console.log(answers)
  } catch (err) {
    console.log(err)
  }
}

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

const createInput = async (account) => {}

const depositInput = async (account) => {}

const withdrawInput = async (account) => {}

const exitInput = async (account) => {}

start()
// login()
