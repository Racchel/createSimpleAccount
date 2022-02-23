import inquirer from 'inquirer'
import { returnQuestions } from './index.js'

export default class AccountService {
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
