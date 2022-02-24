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

- [x] 1. Criar uma nova conta: usuário e senha
- [X] 2. Login: usuário e senha
- [X] 3. Depositar um valor em dinheiro
- [X] 4. Consultar saldo
- [X] 5. Sacar um valor em dinheiro
- [X] 6. Finalizar processo
- [X] 7. Logout

## Bônus

- [X] 1. Limpar console cada vez que volta para o menu
- [X] 2. Ter a opção de cadastrar nova conta na opção de login -> caso usuário não seja encontrado
- [ ] 3. Ter a opção de cadastrar recuperar senha na opção de login -> caso senha errada
- [X] 4. Mostrar usuário logado no momento
- [X] 5. Encriptar senha sem lib
- [ ] 6. Transferir um valor para outra conta

## Fluxo de sucesso

- [X] 0. MSG: Bem vindo(a) ao CreateSimpleAccount!
- [X] 1. MSG: Obrigado pela confiança! Sua conta foi criada como sucesso!: <usuario>
- [X] 2. MSG: Usuário <usuario> logado!
- [X] 3. MSG: Perfeito! O valor de R$<valor> foi depositado para <usuario>!
- [X] 4. MSG: Você possui um saldo de R$<valor>!
- [X] 5. MSG: Perfeito! Você sacou um valor de R$<valor> da conta <usuario>!
- [X] 6. MSG: Obrigado por usar o CreateSimpleAccount! Nos vemos na próxima!
- [X] 7. MSG: Você está deslogado!


## Fluxo alternativo: ERRO

### Criar uma nova conta
- [X] 1. ERRO: Usuário e senha são obrigatórios!
- [X] 1. ERRO: Essa conta já existe! Por favor, escolha outro usuário!
- [X] 1. ERRO: Senha inválida! A senha deve ter, no mínimo, 8 caracteres, um MAIUSCULO, um minusculo, um número e um caracter especial. Exemplo: AAaa*2022

### Login
- [X] 2. ERRO: Usuário e senha são obrigatórios!
- [X] 2. ERRO: Essa conta não existe! Por favor, informe novamente

### Depositar
- [X] 3. ERRO: Login necessário!
- [X] 3. ERRO: Valor de depósito é obrigatório!
- [X] 3. ERRO: Valor de depósito deve ser numérico!

### Consultar saldo
- [X] 4. ERRO: Login necessário!

### Sacar
- [X] 5. ERRO: Login necessário!
- [X] 5. ERRO: Valor de saque é obrigatório!
- [X] 5. ERRO: Valor de saque deve ser numérico!
- [X] 5. ERRO: Valor de saque superior ao saldo! Por favor, informe novamente

### Logout
- [X] 7. ERRO: Login necessário!