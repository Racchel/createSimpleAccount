// modulos externos
import inquirer from 'inquirer'

const start = async () => {
  console.log('Bem vindo(a) ao CreateSimpleAccount!')
  const menu = new Menu()
  return await menu.start()
}

// MENU
class Menu {
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

      const selectMethod = {
        Login () { return test('Login') },
        Criar () { return test('Criar') },
        Consultar () { return test('Consultar') },
        Depositar () { return test('a') },
        Sacar () { return test('a') },
        Sair () { return process.exit() }
      }

      const ch = choice.action.split(' ')[0]
      const method = selectMethod[ch]

      method()
      this.start()
    } catch (err) {
      console.error(err)
    }
  }
}

const test = (msg) => {
  console.log(msg)
}

start()
