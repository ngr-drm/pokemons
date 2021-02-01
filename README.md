<h3>Technical test: An API prototype for a game service.</h3>

#
**Overview**

The solution for this API was inspired by the DDD (domain-oriented design) approach.</br>
And its development process was conducted through the TDD (Test-driven development) technique. 

**Core technologies**

Node.js TypeScript Express.js Jest Docker Postgres Swagger</br>

**Technologies used to automate code standards and style guides**

Husky Commitlint Commitizen Eslint


#
**Instructions for running the project**

Dependencies: Docker and Docker Compose.</br>


#

```zsh
  Clone the repository: git clone https://github.com/Re44e/pokemons.git
```

```zsh
  Run application: docker-compose up or docker-compose up -d
```

```zsh
  Now with the SGDB of your choice, you should create a connection to the PostgreSQL database: 
  Enter the database name and the user credentials according to the .env file.
```

```zsh
  Enter the application container: docker exec -it api sh 
```

```zsh
  Then run the following commands:
  
  $ yarn migrations
  $ yarn test
```

To approve the API access the automatic documentation: <a href="https://localhost:5000/pokemons-doc/v1/#/">Homologation API</a>

