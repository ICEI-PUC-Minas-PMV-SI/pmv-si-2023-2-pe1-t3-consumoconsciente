# Especificações do Projeto

Para desenvolver as especificações mínimas do projeto utilizamos:
- Trello
- Canva
- Pesquisas
- Kanban

## Personas

> 1 - Carlos Nascimento, casado e uma filha, formado em administração e funcionário de uma grande empresa no país.                                                
> Tem o desejo de realizar um dos sonhos da esposa e da filha, uma grande viagem em família. Entretanto, a viagem, ano após ano, é postergada, por falta  de planejamento financeiro por parte de Carlos. E, apesar de não estar inadimplente, não consegue economizar parte do seu salário, para a tão sonhada viagem, devido aos gastos descontrolados mensais.
> 
> <img src="/docs/img/carlos_nascimento.png" alt="Carlos" style="height: 100px; width:100px;"/>

> 2 - Giovana Martins Sousa de 58 anos, é divorciada e aposentada com duas filhas na faculdade. Ela tem bastante tempo livre e então tenta ocupar esse tempo nas redes sociais e por meio de novos hobbies. Gosta de comprar roupas e maquiagens para suas filhas, que são recomendadas por influencers online, e materiais ou equipamentos toda vez que inicia um hobby novo. Ela usa seu celular para fazer compras online e não possui um computador pessoal então tem preferência por aplicações mobile first.
>
> <img src="/docs/img/giovana_souza.jpg" alt="Giovana" style="height: 100px; width:100px;"/>

> 3 - Mateus Goncalves Pereira tem 20 anos, é estudante de medicina e mora de aluguel. Atualmente começou estágio na área e está em busca de aprender a gerenciar melhor o seu dinheiro, pois acha que está consumindo demais desnecessáriamente. Em seu tempo livre ele gosta de jogar online e ler. Seu objetivo principal ao buscar gerenciar melhor seu dinheiro seria seu sonho de conseguir um lugar próprio.
> 
> <img src="/docs/img/mateus_pereira.jpg" alt="Mateus" style="height: 100px; width:100px;"/>


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`  |PARA ... `MOTIVO/VALOR`                 |
|--------------------|-------------------------------------|----------------------------------------|
|Usuário do sistema  | Fazer uma lista de compras          | Não esquecer de fazê-las               |
|Usuário do sistema  | Controlar meus gastos               | Não gastar mais que o necessario  |
|Usuário do sistema  | Registrar meus gastos mensais e poder economizar    | Conseguir viajar|      
|Usuário do sistema  | Postar sobre meu progresso e minhas metas atingidas | Que outros usuários possam visualizar meus posts |
|Usuário do sistema  | Visualizar os posts de outros usuários | Que eu possa conseguir motivação para continuar progredindo no meu objetivo de economizar mais |
|Usuário do sistema  | Buscar dicas mais sustentaveis   |  Melhorar minha qualidade de vida |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA |  |
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA | |
|RF-003| Permitir que o usuário escreva e envie um post | MÉDIA | |
|RF-004| Permitir que o usuário visualize todos os posts em forma de feed, inclusive os seus próprios posts | MÉDIA | |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA |
|RNF-003| A arquitetura do sistema deverá ser de microsserviços | BAIXA |


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O número de desenvolvedores no projeto deverá ser 6 |
|04| As linguagens utilizadas no projeto deverão ser css, html e javascript |
|05| O projeto deve ser dividido em componentes estáticos e dinâmicos        |
|06| O projeto deve atender aos critérios de desempenho        |
|07| O projeto deve funcionar adequadamente em diversos ambientes de usuário        |



Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
