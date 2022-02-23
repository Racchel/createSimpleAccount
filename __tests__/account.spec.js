// MODULOS EXTERNOS
import inquirer from 'inquirer'
// import chalk from 'chalk'

// MODULOS INTERNOS
// import fs from 'fs'

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

const start = async () => {
  console.log('Bem vindo(a) ao CreateSimpleAccount!')

  const account = makeAccount()

  try {
    const answer = await inquirer.prompt([{
      type: 'list',
      name: 'action',
      message: 'O que você deseja fazer?',
      choices: accountChoices
    }])

    console.log(answer)
  } catch (err) {
    console.log(err)
  }

  const accountChoicesAndFeatures = [
    { 'Criar conta': createInput(account) },
    { 'Consultar saldo': checkBalance(account) },
    { Depositar: deposit(account) },
    { Sacar: withdraw(account) },
    { Sair: exit(account) }
  ]

  accountChoicesAndFeatures.map(choose => {
    return console.log(choose)
  })
}

const createInput = async (account) => {
  try {
    const username = await inquirer.prompt([{
      name: 'action',
      message: 'Nome do usuário da conta: '
    }])

    const password = await inquirer.prompt([{
      name: 'action',
      message: 'Nome do usuário da conta: '
    }])

    return account.create({ username, password })
  } catch (err) {
    console.log(err)
  }
}

start()

// TESTES
describe('Account', () => {
  test('Should create an account with username and password', () => {
    const { account } = makeAccount()

    const result = account.create = {
      username: 'any_username',
      password: 'Any_password*123'
    }

    expect(result.message).toBe('Obrigado pela confiança! Sua conta foi criada como sucesso!')
    expect(result.isCorrect).toBe(true)
  })
})
