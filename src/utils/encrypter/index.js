const encrypter = (str) => {
  let encrypted = ''

  for (let i = 0; i < str.length; i++) {
    i !== 0
      ? encrypted += `O${str.charCodeAt(i)}`
      : encrypted += str.charCodeAt(i)
  }

  return encrypted
}

const decrypt = (str) => {
  const arrayStr = str.split('O')
  let decrypted = ''

  arrayStr.map(code => (
    decrypted += String.fromCharCode(code)
  ))

  return decrypted
}

export {
  encrypter,
  decrypt
}
