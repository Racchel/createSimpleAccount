import { infoMessage } from './utils/messages/index.js'
import { selectMethod } from './services/index.js'
import { makeAccount } from './utils/factories/index.js'

const start = async () => {
  infoMessage('Bem vindo(a) ao CreateSimpleAccount!')
  const { accountService } = makeAccount()
  return await selectMethod(accountService)
}

start()
