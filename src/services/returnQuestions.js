import { checkUsername, checkPassword, checkBalance } from '../utils/validations/index.js'

const returnQuestions = ({ indexs }) => {
  const rules = '\n -----------' +
  '\n (deve conter: ' +
  '\n * minimo de 8 caracteres,' +
  '\n * um dígito,' +
  '\n * uma letra maiúscula,' +
  '\n * uma letra minúscula e ' +
  '\n * um caractere especial)' +
  '\n -----------' +
  '\n :'

  const questions = [
    {
      name: 'username',
      message: 'Usuario: ',
      validate: (username) => (checkUsername(username))
    },

    {
      name: 'password',
      message: `Senha ${rules}`,
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
