import { checkUsername, checkPassword, checkBalance } from '../utils/validations/index.js'

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

export default returnQuestions
