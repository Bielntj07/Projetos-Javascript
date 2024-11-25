# Use a imagem base adequada
FROM node:14

# Defina o diretório de trabalho
WORKDIR /app

# Copie os arquivos de código para o contêiner
COPY . .

# Instale as dependências
RUN npm install

# Comando para rodar a aplicação
CMD ["npm", "start"]
