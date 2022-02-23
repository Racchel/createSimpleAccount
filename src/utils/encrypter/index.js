const str = 'QuelIFAM*2018'

export const encrypter = (str) => {
  let encrypted = ''

  for (let i = 0; i < str.length - 1; i++) {
    i !== 0
      ? encrypted += `O${str.charCodeAt(i)}`
      : encrypted += str.charCodeAt(i)
  }

  return encrypted
}

export const decrypt = (str) => {
  const arrayStr = str.split('O')
  let decrypt = ''

  arrayStr.map(code => (
    decrypt += String.fromCharCode(code)
  ))

  return decrypt
}

const passwordEncrypter = encrypter(str)
const password = decrypt(passwordEncrypter)

console.log(`passwordEncrypter: ${passwordEncrypter}`)
console.log(password)
