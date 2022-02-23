import Account from '../../entity/account.js'
import { AccountService } from '../../services/index.js'

const makeAccount = () => {
  const account = new Account()
  const accountService = new AccountService(account)

  return {
    account,
    accountService
  }
}

export default makeAccount
