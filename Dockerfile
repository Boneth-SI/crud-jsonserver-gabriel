# Use a imagem oficial do Node
FROM node:18

# Diretório de trabalho dentro do container
WORKDIR /app

# Copia apenas os manifests primeiro (melhora o cache de build)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Agora copia o restante do código
COPY . .

# Expõe a porta que sua app usa
EXPOSE 3000

# Comando de inicialização
CMD ["npm", "start"]
