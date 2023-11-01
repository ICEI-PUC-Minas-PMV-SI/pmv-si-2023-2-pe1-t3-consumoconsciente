# Programação de Funcionalidades

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.

Para cada requisito funcional, pode ser entregue um artefato desse tipo.

O professor Rommel Carneiro apresenta alguns exemplos prontos para serem utilizados como referência:
- Login do sistema: [https://repl.it/@rommelpuc/LoginApp](https://repl.it/@rommelpuc/LoginApp) 
- Cadastro de Contatos: [https://repl.it/@rommelpuc/Cadastro-de-Contatos](https://repl.it/@rommelpuc/Cadastro-de-Contatos)


> **Links Úteis**:
>
> - [Trabalhando com HTML5 Local Storage e JSON](https://www.devmedia.com.br/trabalhando-com-html5-local-storage-e-json/29045)
> - [JSON Tutorial](https://www.w3resource.com/JSON)
> - [JSON Data Set Sample](https://opensource.adobe.com/Spry/samples/data_region/JSONDataSetSample.html)
> - [JSON - Introduction (W3Schools)](https://www.w3schools.com/js/js_json_intro.asp)
> - [JSON Tutorial (TutorialsPoint)](https://www.tutorialspoint.com/json/index.htm)

## Exemplo

## Requisitos Atendidos

As tabelas que se seguem apresentam os requisitos funcionais e não-funcionais que relacionam o escopo do projeto com os artefatos criados:

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Responsável | Artefatos |
|------|-----------------------------------------|----|----|
|RF-001| O sistema deve permitir que o usuário cadastre sua conta| Lucas | |
|RF-002| O sistema deve permitir que o usuário cadastrado efetue login| Lucas | |
|RF-003| O sistema deve permitir que o usuário logado gerencie os dados de sua conta| Sofia | perfil.css, perfil.html |
|RF-004| O sistema deve permitir que o usuário cadastrado recupere sua senha| Eduardo | |
|RF-005| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize a página inicial| Vitor | |
|RF-006| O sistema deve permitir que o usuário logado registre uma lista dos seus gastos e que possam ser classificados como essencial ou não| Vitor | |adicionar-despesas.html
|RF-007| O sistema deve permitir que o usuário logado visualize seus itens registrados| Sofia | visualizarDespesas.css, visualizar-despesas.html |
|RF-008| O sistema deve permitir que o usuário logado edite/delete os itens registrados| Sofia | visualizarDespesas.css, visualizar-despesas.html |
|RF-009| O sistema deve permitir que o usuário logado filtre os itens registrados em sua lista por classificação do item (essencial ou não essencial) e data| Sofia | visualizarDespesas.css, visualizar-despesas.html |
|RF-010| O sistema deve permitir que o usuário logado simule aplicação poupança/renda fixa em X meses o valor que gastou de forma supérflua| Eduardo |
|RF-011| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize informações sobre a aplicação| Vitor | index.html
|RF-012| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize dicas de sustentabilidade financeira| Vitor | index.html

## Descrição das estruturas:

## Usuário
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Número (Inteiro)  | Identificador único do usuário            | 1545646                                              |
| Nome        | Texto             | Nome do usuário                         | João da Silva                                 |
| Email      | Texto             | Email do usuário                      | joaodasilva@hotmail.com                           |
| Telefone  | Texto  | Telefone do usuário | (11) 99123-4567                                     |
| Data de nascimento  | Texto  | Data de nascimento do usuário | 01/02/93                                         |
| Senha  | Texto  | Senha de login do usuário | !@$jhjf&$                                      |


## Despesa
|  **Nome**      | **Tipo**          | **Descrição**                             | **Exemplo**                                    |
|:--------------:|-------------------|-------------------------------------------|------------------------------------------------|
| Id             | Número (Inteiro)  | Identificador único da despesa            | 85239                                          |
| Nome do Item   | Texto             | Nome da despesa                           | Cafézinho                                      |
| Data de Compra | Texto             | Data que o produto foi adquirido          | 01/10/2023                                     |
| Classificação  | Boolean           | Se o item é Essencial ou não              | false (Não Essencial)                      |
| Custo          | Float             | Valor do item adquirido                   | 100,00                                      |
