<h3>Technical challenge: An API prototype for a game service.</h3>

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
```zsh
  Clone the repository: git clone https://github.com/Re44e/pokemons.git
```

```zsh
  Run application: docker-compose up or docker-compose up -d
```


Now with the SGDB of your choice, you should create a connection to the PostgreSQL database:</br> 
Enter the database name and the user credentials according to the .env file.

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


#
**Test coverage statistics**

<table class="coverage-summary">
<thead>
<tr>
   <th data-col="file" data-fmt="html" data-html="true" class="file">File</th>
   <th data-col="statements" data-type="number" data-fmt="pct" class="pct">Statements</th>
   <th data-col="statements_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="functions" data-type="number" data-fmt="pct" class="pct">Functions</th>
   <th data-col="functions_raw" data-type="number" data-fmt="html" class="abs"></th>
   <th data-col="lines" data-type="number" data-fmt="pct" class="pct">Lines</th>
   <th data-col="lines_raw" data-type="number" data-fmt="html" class="abs"></th>
</tr>
</thead>
<tbody><tr>
	<td class="file high" data-value="src"><a href="src/">src</a></td>
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="18" class="abs high">18/18</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="18" class="abs high">18/18</td>
	</tr>

<tr>
	<td class="file high" data-value="src/communication"><a href="src/communication/">src/communication</a></td>
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="25" class="abs high">25/25</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="25" class="abs high">25/25</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/core/application/game"><a href="src/core/application/game/">src/core/application/game</a></td>
	<div class="chart"><div class="cover-fill" style="width: 57%"></div><div class="cover-empty" style="width: 43%"></div></div>
	</td>
	<td data-value="57.14" class="pct medium">57.14%</td>
	<td data-value="14" class="abs medium">8/14</td>
	<td data-value="33.33" class="pct low">33.33%</td>
	<td data-value="3" class="abs low">1/3</td>
	<td data-value="61.54" class="pct medium">61.54%</td>
	<td data-value="13" class="abs medium">8/13</td>
	</tr>

<tr>
	<td class="file medium" data-value="src/core/application/pokemons"><a href="src/core/application/pokemons/">src/core/application/pokemons</a></td>
	<div class="chart"><div class="cover-fill" style="width: 59%"></div><div class="cover-empty" style="width: 41%"></div></div>
	</td>
	<td data-value="59.38" class="pct medium">59.38%</td>
	<td data-value="64" class="abs medium">38/64</td>
	<td data-value="46.67" class="pct low">46.67%</td>
	<td data-value="15" class="abs low">7/15</td>
	<td data-value="62.71" class="pct medium">62.71%</td>
	<td data-value="59" class="abs medium">37/59</td>
	</tr>

<tr>
	<td class="file low" data-value="src/core/business/value-object"><a href="src/core/business/value-object/">src/core/business/value-object</a></td>
	<div class="chart"><div class="cover-fill" style="width: 3%"></div><div class="cover-empty" style="width: 97%"></div></div>
	</td>
	<td data-value="3.85" class="pct low">3.85%</td>
	<td data-value="26" class="abs low">1/26</td>
	<td data-value="0" class="pct low">0%</td>
	<td data-value="1" class="abs low">0/1</td>
	<td data-value="3.85" class="pct low">3.85%</td>
	<td data-value="26" class="abs low">1/26</td>
	</tr>

<tr>
	<td class="file low" data-value="src/core/domain"><a href="src/core/domain/">src/core/domain</a></td>
	<div class="chart"><div class="cover-fill" style="width: 23%"></div><div class="cover-empty" style="width: 77%"></div></div>
	</td>
	<td data-value="23.68" class="pct low">23.68%</td>
	<td data-value="38" class="abs low">9/38</td>
	<td data-value="16.67" class="pct low">16.67%</td>
	<td data-value="6" class="abs low">1/6</td>
	<td data-value="24.32" class="pct low">24.32%</td>
	<td data-value="37" class="abs low">9/37</td>
	</tr>

<tr>
	<td class="file high" data-value="src/infrastructure/orm"><a href="src/infrastructure/orm/">src/infrastructure/orm</a></td>
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="6" class="abs high">6/6</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="0" class="abs high">0/0</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="6" class="abs high">6/6</td>
	</tr>

<tr>
	<td class="file high" data-value="src/infrastructure/postgres/entities"><a href="src/infrastructure/postgres/entities/">src/infrastructure/postgres/entities</a></td>
	<div class="chart"><div class="cover-fill cover-full" style="width: 100%"></div><div class="cover-empty" style="width: 0%"></div></div>
	</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="7" class="abs high">7/7</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="2" class="abs high">2/2</td>
	<td data-value="100" class="pct high">100%</td>
	<td data-value="7" class="abs high">7/7</td>
	</tr>

</tbody>
</table>
