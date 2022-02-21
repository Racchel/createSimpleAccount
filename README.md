# Projeto: CreateSimpleAccount

Projeto simples para criação de conta:

- NodeJs
- Inquirer: fazer perguntas e receber respostas no terminal
- Chalk: personalizar logs
- Jest: testes automatizados

## Funcionalidades:

1. [ ] Criar uma conta nova: usuario e senha
2. [ ] Depositar um valor em dinheiro
3. [ ] Consultar saldo
4. [ ] Sacar um valor em dinheiro
5. [ ] Finalizar processo

## Bônus

1. [ ] Transferir um valor para outra conta

## Fluxo de sucesso

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