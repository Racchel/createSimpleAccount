import { infoMessage } from './utils/messages/index.js'
import { menu } from './services/index.js'
import { makeAccount } from './utils/factories/index.js'

const start = async () => {
  infoMessage('Bem vindo(a) ao CreateSimpleAccount!')
  const { accountService } = makeAccount()
  return await menu(accountService)
}

start()
