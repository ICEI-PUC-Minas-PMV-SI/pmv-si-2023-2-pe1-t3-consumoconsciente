# Testes

Neste projeto serão realizados dois tipos de testes:

 - O **Teste de Software**, que utiliza uma abordadem de caixa preta, e tem por objetivo verificar a conformidade do software com os requisitos funcionais e não funcionais do sistema.
 - O **Teste de Usabilidade**, que busca avaliar a qualidade do uso do sistema por um usuário do público alvo. 

Se quiser conhecer um pouco mais sobre os tipos de teste de software, leia o documento [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/).

A documentação dos testes é dividida nas seguintes seções:

 - [Plano de Testes de Software](#plano-de-testes-de-software)
 - [Registro dos Testes de Software](#registro-dos-testes-de-software)
 - [Avaliação dos Testes de Software](#avaliação-dos-testes-de-software)
 - [Cenários de Teste de Usabilidade](#cenários-de-teste-de-usabilidade)
 - [Registro dos Testes de Usabilidade](#registro-dos-testes-de-usabilidade)
 - [Avaliação dos Testes de Usabilidade](#avaliação-dos-testes-de-usabilidade)

# Teste de Software

Nesta seção o grupo deverá documentar os testes de software que verificam a correta implementação dos requisitos funcionais e não funcionais do software.

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Editar dados do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página do perfil e clica em editar dados.<br>2) Os campos com os dados do usuário ficam habilitados para edição.<br>3) Usuário edita os campos conforme necessário e clica em salvar.<br>4) Os inputs são desabilitados novamente. A aplicação armazena os dados novos e os exibe nos inputs.
**Requisitos associados** | RF-003
**Resultado esperado** | Edição dos dados do usuário
**Dados de entrada** | Inserção de dados no formulário de informações cadastradas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Editar senha**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página do perfil e clica em editar senha.<br>2) Os campos para inserir a senha atual e a nova senha são exibidos na tela.<br>3) Usuário adiciona sua senha atual e sua senha nova<br>4) Aplicação verifica se os campos são válidos e informa o usuário caso não sejam.<br>4) A aplicação volta a exibir os inputs anteriores em caso de sucesso.
**Requisitos associados** | RF-003
**Resultado esperado** | Edição dos dados da senha
**Dados de entrada** | Inserção da senha atual, nova senha e confirmação da senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Visualizar despesas cadastradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) As despesas que ele cadastrou anteriormente são exibidas na tabela de despesa, informando os nomes, custos, classificações (essencial ou não essencial) e datas em que foram realizadas.
**Requisitos associados** | RF-007
**Resultado esperado** | Exibição das despesas cadastradas
**Dados de entrada** | - 
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Editar as despesas registradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) Usuário escolhe uma despesa para editar e clica no ícone do lápis<br>3) Um modal é exibido com os campos onde o usuário pode editar as informações sobre a despesa<br>4) Usuário edita os campos e clica em salvar.<br> A aplicação atualiza a despesa editada.
**Requisitos associados** | RF-008
**Resultado esperado** | Edição de despesas cadastradas
**Dados de entrada** | Inserção de informações sobre a despesa nos campos da despesa registrada
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Deletar as despesas registradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) Usuário escolhe uma despesa para deletar e clica no ícone do lápis<br>3) Um modal é exibido com a opção de deletar a despesa clicada<br>4) Usuário clica em deletar.<br>5) A aplicação remove a despesa selecionada da listagem de despesas salvas.
**Requisitos associados** | RF-008
**Resultado esperado** | Deleção de despesas cadastradas
**Dados de entrada** | -
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Filtrar as despesas registradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) Usuário escolhe uma classificação de despesas (essencial ou não essencial) e/ou um período de tempo em que as depesas foram realizadas<br>3) A aplicação exibe apenas as despesas que se encaixam dentro do filtro utilizado.
**Requisitos associados** | RF-009
**Resultado esperado** | Exibição de despesas cadastradas dependendo do filtro adicionado
**Dados de entrada** | Inserção da classificação das depesas e/ou período em que as despesas foram realizadas
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Simular rendimentos**
 :--------------: | ------------
**Procedimento**  | 1) Após o usuário filtrar as despesas registradas por não essencias, na pagina 'Visualizar Despesas', o mesmo irá clicar no botão 'Simular aplicação'. 
**Requisitos associados** | RF-010
**Resultado esperado** | Ao ser direcionado para a página de simulação, a mesma informa os possíveis rendimentos em 3, 6, 12 meses na Poupança, CDI e Prefixado.
**Dados de entrada** | Filtrar despesas entre essencias e não essenciais.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Recuperar Senha**
 :--------------: | ------------
**Procedimento**  | 1) Na página de login, abaixo do botão de entrar, o usuário tem a opção de recuperar sua senha 
**Requisitos associados** | RF-004
**Resultado esperado** | A senha é enviada via email
**Dados de entrada** | Clicar no botão recuperar senha
**Resultado obtido** | Falha. Não estamos conseguindo enviar email para recuperação de senha


## Registro dos Testes de Software

Esta seção deve apresentar o relatório com as evidências dos testes de software realizados no sistema pela equipe, baseado no plano de testes pré-definido. Documente cada caso de teste apresentando um vídeo ou animação que comprove o funcionamento da funcionalidade. Veja os exemplos a seguir.

|*Caso de Teste*                                 |*TC-01 - Criar uma conta*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/u/s!AhD2JqpOUvJChapRtRSQ9vPzbNLwGA?e=mxZs6t| 

|*Caso de Teste*                                 |*TC-02 - Efetuar Login (usuário autenticado)*                                         |
|---|---|
|Requisito Associado | RF-004 - Usuários não autenticados podem se cadastrar para criar uma conta e serem autenticados.|
|Link do vídeo do teste realizado: | https://1drv.ms/v/s!AhD2JqpOUvJChapQ8CPXL-TI_A7iVg?e=spD3Ar | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.



## Testes de unidade automatizados (Opcional)

Se o grupo tiver interesse em se aprofundar no desenvolvimento de testes de software, ele podera desenvolver testes automatizados de software que verificam o funcionamento das funções JavaScript desenvolvidas. Para conhecer sobre testes unitários em JavaScript, leia 0 documento  [Ferramentas de Teste para Java Script](https://geekflare.com/javascript-unit-testing/).


# Testes de Usabilidade

O objetivo do Plano de Testes de Usabilidade é obter informações quanto à expectativa dos usuários em relação à  funcionalidade da aplicação de forma geral.

Para tanto, elaboramos quatro cenários, cada um baseado na definição apresentada sobre as histórias dos usuários, definido na etapa das especificações do projeto.

Foram convidadas quatro pessoas que os perfis se encaixassem nas definições das histórias apresentadas na documentação, visando averiguar os seguintes indicadores:

Taxa de sucesso: responde se o usuário conseguiu ou não executar a tarefa proposta;

Satisfação subjetiva: responde como o usuário avalia o sistema com relação à execução da tarefa proposta, conforme a seguinte escala:

1. Péssimo; 
2. Ruim; 
3. Regular; 
4. Bom; 
5. Ótimo.

Tempo para conclusão da tarefa: em segundos, e em comparação com o tempo utilizado quando um especialista (um desenvolvedor) realiza a mesma tarefa.

Objetivando respeitar as diretrizes da Lei Geral de Proteção de Dados, as informações pessoais dos usuários que participaram do teste não foram coletadas, tendo em vista a ausência de Termo de Consentimento Livre e Esclarecido.


Apresente os cenários de testes utilizados na realização dos testes de usabilidade da sua aplicação. Escolha cenários de testes que demonstrem as principais histórias de usuário sendo realizadas. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.

> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


## Cenários de Teste de Usabilidade

| Nº do Cenário | Descrição do cenário |
|---------------|----------------------|
| 1 | Você é uma pessoa que deseja gerenciar suas despesas. Para isso, você deverá adicionar três despesas diferentes e filtrá-las por essenciais. |
| 2 | Voce é uma pessoa que adicionou uma despesa com o custo errado. Encontre onde editá-la e corrige esse valor. |
| 3 | Você é uma pessoa que cadastrou a data de nascimento incorreta ao se cadastrar na aplicação. Encontre onde é possível editar esse dado e corrija-o. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que adicionou várias despesas e deseja filtrar para que possa visualizar melhor. Encontre onde adicionar despesas e onde filtrá-la

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 27.87 segundos                  |
| 2       | SIM             | 5                    | 17.11 segundos                  |
| 3       | SIM             | 5                    | 39.09 segundos                  |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 8.66 segundos |


    Comentários dos usuários: Achei o site muito bom e intuitivo. 
    Não tive dificuldades e acho que ficou bem intuitivo.




Cenário 2: Você é uma pessoa que deseja comprar um smartphone até R$ 2.000,00. Encontre no site smartphone's nessa faixa de preço.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 22.54 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.


## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



