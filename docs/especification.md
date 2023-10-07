# Especificações do Projeto

Para desenvolver as especificações mínimas do projeto utilizamos:
- Trello
- Canva
- Pesquisas
- Kanban

## Personas

> 1 - Meu nome é Carlos Nascimento, tenho uma esposa e uma filha. Sou formado em administração e trabalho em uma grande empresa no país. Uma das coisas que mais quero na vida é realizar o sonho da minha esposa e da minha filha: fazer uma grande viagem em família. O problema é que, simplesmente, não consigo economizar parte do meu salário para essa tão sonhada viagem. Preciso realmente aprender a controlar meus gastos e fazer um planejamento financeiro para tornar esse sonho uma realidade.
> 
> <img src="/docs/img/carlos_nascimento.png" alt="Carlos" style="height: 100px; width:100px;"/>

> 2 - Meu nome é Giovana Martins Sousa e tenho 58 anos. Sou divorciada e aposentada, com duas filhas na faculdade. Tenho muito tempo livre e tenho tentado preenchê-lo nas redes sociais e com novos hobbies. Adoro comprar roupas e maquiagens para minhas filhas, especialmente as que são recomendadas por influenciadores online. Devido a isso, percebi que minha casa está ficando sem espaço para guardar todas essas compras novas. Comecei a pensar que talvez devesse começar a considerar quais dessas compras são realmente necessárias e quais eu poderia ter economizado para o futuro das minhas filhas.
>
> <img src="/docs/img/giovana_souza.jpg" alt="Giovana" style="height: 100px; width:100px;"/>

> 3 - Meu nome é Mateus Gonçalves Pereira, tenho 20 anos e sou estudante de medicina. Atualmente, estou morando de aluguel e comecei a estagiar na minha área. Estou em busca de aprender a gerenciar melhor o meu dinheiro, pois sinto que estou gastando demais desnecessariamente. Meu principal objetivo ao buscar um melhor gerenciamento financeiro é realizar o sonho de conseguir um lugar próprio para morar.
> 
> <img src="/docs/img/mateus_pereira.jpg" alt="Mateus" style="height: 100px; width:100px;"/>

> 4 - Sou o Ricardo Santos, tenho 30 anos e trabalho em uma empresa de tecnologia. Embora tenha uma carreira estável, estou enfrentando desafios financeiros devido ao acúmulo de dívidas de cartão de crédito e empréstimos pessoais. Diante dessa situação, estou determinado a tomar medidas para controlar meu consumo e, assim, melhorar significativamente minha gestão financeira.
> 
> <img src="/docs/img/Ricardo.jpeg" alt="Ricardo" style="height: 100px; width:100px;"/>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`  |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------|----------------------------------------|
|Carlos Nascimento  | Controlar meus gastos e identificá-los      | Saber o quanto economizei e guardar dinheiro para investir no futuro    |
|Carlos Nascimento  | classificar meus gastos não essencias   | Para ter controle sobre o que realmente preciso|  
|Giovana Martins Sousa  | Identificar onde tenho gastado meu dinheiro | Poder economizar, guardar dinheiro e assim, investir no futuro das minhas filhas |
|Giovana Martins Sousa  | Saber mais sobre quanto teria de retorno se tivesse investido meu dinheiro | Para iniciar meu caminho de economia e investimentos para um futuro financeiro mais seguro |
|Mateus Goncalves Pereira  | Desejo entender como levar uma vida sustentável   |  Melhorar minha qualidade de vida e no meio ambiente|
|Mateus Goncalves Pereira  | Conseguir identificar meu gastos de forma simples e clara             |  Para evitar gastar mais do que o necessário e manter um controle financeiro eficaz  |
|Ricardo Santos  | Ter orientações finaceiras  |  Para viver de forma mais consciente e ter controle sobre minhas dívidas  |
|Ricardo Santos  | Preciso ter maior controle sobre meu gastos não essenciais   |  Para controlar melhor meus gastos e tomar decisões financeiras mais sólidas |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----|----|
|RF-001| O sistema deve permitir que o usuário cadastre sua conta| ALTA |
|RF-002| O sistema deve permitir que o usuário cadastrado efetue login| ALTA |
|RF-003| O sistema deve permitir que o usuário logado gerencie os dados de sua conta| ALTA |
|RF-004| O sistema deve permitir que o usuário cadastrado recupere sua senha| ALTA |
|RF-005| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize a página inicial| ALTA |
|RF-006| O sistema deve permitir que o usuário logado registre uma lista dos seus gastos e que possam ser classificados como essencial ou não| ALTA |
|RF-007| O sistema deve permitir que o usuário logado visualize seus itens registrados| ALTA |
|RF-008| O sistema deve permitir que o usuário logado edite/delete os itens registrados| ALTA |
|RF-009| O sistema deve permitir que o usuário logado filtre os itens registrados em sua lista por classificação do item (essencial ou não essencial) e data| ALTA |
|RF-010| O sistema deve permitir que o usuário logado simule aplicação poupança/renda fixa em X meses o valor que gastou de forma supérflua| ALTA |
|RF-011| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize informações sobre a aplicação| ALTA |
|RF-012| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize dicas de sustentabilidade financeira| ALTA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA |
|RNF-003| As linguagens utilizadas no projeto deverão ser css, html e javascript | ALTA |
|RNF-004| Site de fácil navegação | BAIXA | |
|RNF-005| O sistema deve ser compatível para rodar em qualquer navegador | ALTA | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O número de desenvolvedores no projeto deverá ser 6 |
|04| O projeto deve ser dividido em componentes estáticos e dinâmicos        |



