# <img height="40" src="https://user-images.githubusercontent.com/84249945/219458363-0df46081-95bd-4878-a828-541457541cbd.png"/> Sobre
<p>Tutorial de um projeto feito em React, NodeJS e PostgreSQL. Para isso, foi utilizado também Express e JavaScript.</p>

<br><br>

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219459633-fbe0a910-0287-4f46-9ec3-0eaf1da53b87.png"/> Organização
- O projeto é bem simples, para isso é necessário criar um DataBase no PostgreSQL para que os dados sejam cadastrados.

- Em seguida, forneça um nome para seu DataBase e crie uma nova tabela.

- Vá na pasta de seu projeto e crie duas pastas:
  - client: para o React.
  - server: para o servidor.

<br><br>

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219701953-d9aadf6c-065a-4176-8c21-3b13c497f752.png"/> Instalações
- Instalar o pg (postgres)
```bash
npm install pg
```

- Instalar o express
```bash
npm install express
```

<br><br>

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219471082-bba3510e-ee6d-4a6e-bf78-d7afc692043e.png"/> Observações
<p>No decorrer do projeto, como estamos utilizando dois localhost diferentes (React na porta 3000 e o servidor na porta 4000) pode ser que haja erro de CORS.</p>
<p>O CORS é uma especificação do W3C e faz uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.</p>
<p>No entanto, para resolver este problema basta digitar o seguinte comando:</p>

```bash
npm install cors
```

<p>Um outro detalhe, para facilitar a usabilidade pelo programador, seria a instalação do <strong>nodemon</strong>.</p>
<p>O nodemon é um utilitário que monitora as mudanças nos arquivos do seu projeto e reinicia <strong>automaticamente</strong> o servidor Node. js quando necessário. No entanto, neste projeto é recomendável instalar o nodemon como dev dependency, então basta digitar o seguinte comando:</p>

```bash
npm install --save-dev nodemon
```

<br><br>

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219703721-e658e16f-fe7a-4a8b-bc90-22d9859c747c.png" /> Iniciar a aplicação
- Para iniciar a aplicação React (pasta client), basta apenas abrir o terminal e digitar:
```bash
npm start
```

- Para iniciar o servidor (pasta server), basta apenas abrir o terminal e digitar:
```bash
npm run dev
```

# <img height="40" src="https://user-images.githubusercontent.com/84249945/219471565-77dd520e-41ee-41f8-8fb9-0e259535a867.png"/> Tecnologias utilizadas

<p>
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=js,react,nodejs,express,postgres" />
  </a>
</p>