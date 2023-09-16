# Especificações do Projeto

Para desenvolver as especificações mínimas do projeto utilizamos:
- Trello
- Canva
- Pesquisas
- Kanban

## Personas

> 1 - Carlos Nascimento, casado e uma filha, formado em administração e funcionário de uma grande empresa no país.                                                
> Tem o desejo de realizar um dos sonhos da esposa e da filha, uma grande viagem em família. Entretanto, a viagem, ano após ano, é postergada, por falta  de planejamento financeiro por parte de Carlos. E, apesar de não estar inadimplente, não consegue economizar parte do seu salário, para a tão sonhada viagem, devido aos gastos fúteis mensais.
> 
> <img src="/docs/img/carlos_nascimento.png" alt="Carlos" style="height: 100px; width:100px;"/>

> 2 - Giovana Martins Sousa de 58 anos, é divorciada e aposentada com duas filhas na faculdade. Ela tem bastante tempo livre e então tenta ocupar esse tempo nas redes sociais e por meio de novos hobbies. Gosta de comprar roupas e maquiagens para suas filhas, que são recomendadas por influencers online, e materiais ou equipamentos toda vez que inicia um hobby novo. Ultimamente ela tem notado que sua casa está ficando sem espaço para guardar tantos presentes novos e que talvez ela precise começar a considerar quais dessas compras realmente são necessárias e quais ela poderia ter adicionado em uma poupança para suas filhas.
>
> <img src="/docs/img/giovana_souza.jpg" alt="Giovana" style="height: 100px; width:100px;"/>

> 3 - Mateus Goncalves Pereira tem 20 anos, é estudante de medicina e mora de aluguel. Atualmente começou estágio na área e está em busca de aprender a gerenciar melhor o seu dinheiro, pois acha que está consumindo demais desnecessáriamente. Em seu tempo livre ele gosta de jogar online e ler. Seu objetivo principal ao buscar gerenciar melhor seu dinheiro seria seu sonho de conseguir um lugar próprio.
> 
> <img src="/docs/img/mateus_pereira.jpg" alt="Mateus" style="height: 100px; width:100px;"/>

> 4 -Ricardo Santos, um profissional de 30 anos em uma empresa de tecnologia, apesar de ter uma carreira estável, enfrenta desafios financeiros devido ao acúmulo de dívidas de cartão de crédito e empréstimos pessoais. Diante dessa situação, ele está determinado a tomar medidas para controlar seu consumo e, assim, melhorar significativamente sua gestão financeira.
> 
> <img src="/docs/img/Ricardo.jpeg" alt="Ricardo" style="height: 100px; width:100px;"/>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`  |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------|----------------------------------------|
|Carlos Nascimento  | Cadastrar uma lista de bens que deixei de comprar       | Saber o quanto economizei           |
|Carlos Nascimento  | Classificar gastos por essencial \ Não essencial    | Economizar|  
|Giovana Martins Sousa  | Emitir um relatório de gastos supérfluos | Saber quanto dinheiro eu poderia estar guardando numa poupança |
|Giovana Martins Sousa  | Ser informada de quanto meu dinheiro gasto renderia se eu o tivesse aplicado em algum investimento | Que eu possa começar a economizar e aplicar futuramente |
|Mateus Goncalves Pereira  | Buscar dicas mais sustentáveis   |  Melhorar minha qualidade de vida |
|Mateus Goncalves Pereira  | Visualizar uma lista de gastos              | Não gastar mais que o necessário  |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| O sistema deve permitir que o usuário cadastre sua conta| ALTA |  |
|RF-002| O sistema deve permitir que o usuário cadastrado efetue login| ALTA |  |
|RF-003| O sistema deve permitir que o usuário logado gerencie os dados de sua conta| ALTA |  |
|RF-004| O sistema deve permitir que o usuário cadastrado recupere sua senha| ALTA |  |
|RF-005| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize a página inicial| ALTA |  |
|RF-006| O sistema deve permitir que o usuário logado registre uma lista de itens que deixou de adquirir e que possa ser classificada como essencial ou não| ALTA | |RF-007| O sistema deve permitir que o usuário logado visualize e edite os itens registrados| ALTA |  |
|RF-008| O sistema deve permitir que o usuário logado filtre os itens registrados em sua lista por classificação do item (essencial ou não essencial)| ALTA |  |
|RF-009| O sistema deve permitir que o usuário logado simule aplicação poupança/renda fixa em X meses o valor que deixou de gastar| ALTA |  |
|RF-010| O sistema deve permitir que o usuário logado emita um relatório dos itens registrados| ALTA |  |
|RF-011| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize a página de informação sobre a aplicação| ALTA |
|RF-012| O sistema deve permitir que tanto um usuário sem conta ou não logado, quanto um usuário logado visualize a página de dicas de sustentabilidade| ALTA |  |

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
|05| O projeto deve atender aos critérios de desempenho        |
|06| O projeto deve funcionar adequadamente em diversos ambientes de usuário        |



