<h3>Pokemons</h3>

#
**Overview**

The solution for this API was inspired by the DDD (domain-oriented design) approach.</br>
And its development process was conducted through the TDD (Test-driven development) technique.</br>

Design pattern applied: Mediator

**Core technologies**

Node.js TypeScript Express.js Sequelize Jest Docker PostgreSQL Swagger</br>


**Technologies used to automate code standards and style guides**

Husky Commitlint Commitizen Eslint

</br>
Note: In the Actions tab, you will find an experimental pipeline of  CI/CD.

#
**Instructions for running the project**

Dependencies: Docker and Docker Compose.</br>


#
Clone the repository and run the following command in the project root:

```zsh
   docker-compose up or docker-compose up -d
```
<br>

Now with the SGDB of your choice, you should create a connection to the PostgreSQL database:</br> 
Enter the database connection credentials according to the .env file.

#
```zsh
  Enter the application container: docker exec -it api sh 
```

```zsh
  Then run the following commands:
  
  $ yarn migrations
  $ yarn test
```

With online application homologate the API accessing the automatic documentation: <a href="https://localhost:5000/pokemons-doc/v1/#/">Homologation API</a>
