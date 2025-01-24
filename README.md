<h1> Aplicação NodeJS rodando em Docker </h1>

<p>Projeto simples de nodejs rodando em docker</p>

<h2> Como rodar o projeto </h2>

### 🎲 Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/gefersonholdorf/app-node-docker.git

# Acesse a pasta do projeto no terminal/cmd
$ cd app-node-docker

# Rodar docker e iniciar os containers
$  doker compose up -d --build

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

