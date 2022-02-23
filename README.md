# Projeto: CreateSimpleAccount

Projeto simples para criação de conta:

- **Javascript ES6**
- **NodeJs**

### Módulos internos

- **Fs**: módulo do NodeJS para interagir com o sistema de arquivos

### Dependencies

- **Inquirer**: fazer perguntas e receber respostas no terminal
- **Chalk**: personalizar logs

### DevDependencies

- **Jest**: aplicar testes automatizados
- **babel-jest**: usar jest com ES6
- **@babel/plugin-transform-runtime**:
- **@babel/preset-env**:
- **Standard**: JS: guia de estilo e formatador
- **Lint-staged**: permite que rode scripts na nossa staged area do github
- **Husky**: permite adicionar hooks no git (rodar um script antes que aconteça um commit ou um push)
- **Nodemon**: atualizar o código automaticamente ao salvar arquivo

## Links importantes:
- **Usar JEST**: [Guia Jest](https://oieduardorabelo.medium.com/jest-escrever-testes-nunca-foi-t%C3%A3o-divertido-5f0e1950ba10)

- **Usar Jest com ES6**: [Jest com ES6](https://stackoverflow.com/questions/35756479/does-jest-support-es6-import-export)

## Funcionalidades:

1. [ ] Criar uma conta nova: usuário e senha
2. [ ] Depositar um valor em dinheiro
3. [ ] Consultar saldo
4. [ ] Sacar um valor em dinheiro
5. [ ] Finalizar processo

## Bônus

1. [ ] Transferir um valor para outra conta

## Fluxo de sucesso

0. [ ] MSG: Bem vindo(a) ao CreateSimpleAccount!

1. [ ] MSG: Obrigado pela confiança! Sua conta foi criada como sucesso!

2. [ ] MSG: Perfeito! O valor de R$<valor> foi depositado para <usuario>!

3. [ ] MSG: Você possui um saldo de R$<valor>!

4. [ ] MSG: Perfeito! Você sacou um valor de R$<valor> da conta <usuario>!
 
5. [ ] MSG: Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!


## Fluxo alternativo: ERRO

1. [ ] ERRO: Usuário e senha são obrigatórios!
1. [ ] ERRO: Essa conta já existe! Por favor, escolha outro usuario!
1. [ ] ERRO: A senha deve ter, no mínimo, 8 caracteres, um MAIUSCULO, um minusculo, um número e um caracter especial. Exemplo: AAaa*2022

2. [ ] ERRO: Essa conta não existe! Por favor, informe novamente
2. [ ] ERRO: Usuário ou senha incorreta

3. [ ] ERRO: Essa conta não existe! Por favor, informe novamente
3. [ ] ERRO: Usuário ou senha incorreta

4. [ ] ERRO: Essa conta não existe! Por favor, informe novamente
4. [ ] ERRO: Usuário ou senha incorreta
4. [ ] ERRO: Valor de saque superior ao saldo! Por favor, informe novamente