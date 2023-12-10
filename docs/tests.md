# Teste de Software

## Plano de Testes de Software

**Caso de Teste** | **CT01 - Visualizar página inicial e informações sobre a aplicação**
 :--------------: | ------------
**Procedimento**  | 1) Usuário sem cadastro acessa a página inicial da aplicação e utiliza o scroll do mouse para visualizar as informações sobre a aplicação.
**Requisitos associados** | RF-005 e RF-011
**Resultado esperado** | Visualização da página inicial e informações sobre a aplicação
**Dados de entrada** | -
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT02 - Visualizar página de dicas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário sem cadastro acessa a página inicial da aplicação e clica no botão que o redireciona para a página de dicas.
**Requisitos associados** | RF-012
**Resultado esperado** | Visualização das dicas
**Dados de entrada** | -
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT03 - Cadastrar um novo usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página inicial da aplicação e clica no botão de login.<br>2) Na página de login, ele clica no botão para criar um conta.<br>3) Usuário adicionar seus dados no formulário de cadastro e clica em Cadastrar.
**Requisitos associados** | RF-001
**Resultado esperado** | Criação da conta do usuário
**Dados de entrada** | Inserção de dados no formulário de informações sobre o usuário.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT04 - Executar o login**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página de login.<br>2) Ele adiciona seu nome cadastrado e sua senha e clica em Entrar.
**Requisitos associados** | RF-002
**Resultado esperado** | Execução do login
**Dados de entrada** | Inserção do nome e da senha do usuário.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT05 - Adicionar despesas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário acessa a página de adicionar despesas.<br>2) Ele preenche os campos necessários e clica no botão de adicionar a nova despesa.
**Requisitos associados** | RF-006
**Resultado esperado** | Adição de despesas
**Dados de entrada** | Inserção de dados no formulário sobre a despesa.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT06 - Visualizar despesas cadastradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) As despesas que ele cadastrou anteriormente são exibidas na tabela de despesa, informando os nomes, custos, classificações (essencial ou não essencial) e datas em que foram realizadas.
**Requisitos associados** | RF-007
**Resultado esperado** | Exibição das despesas cadastradas
**Dados de entrada** | - 
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT07 - Editar as despesas registradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) Usuário escolhe uma despesa para editar e clica no ícone do lápis.<br>3) Um modal é exibido com os campos onde o usuário pode editar as informações sobre a despesa<br>4) Usuário edita os campos e clica em salvar.
**Requisitos associados** | RF-008
**Resultado esperado** | Edição de despesas cadastradas
**Dados de entrada** | Inserção de informações sobre a despesa nos campos da despesa registrada
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT08 - Deletar as despesas registradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) Usuário escolhe uma despesa para deletar e clica no ícone do lápis.<br>3) Um modal é exibido com a opção de deletar a despesa.<br>4) Usuário clica em deletar.
**Requisitos associados** | RF-008
**Resultado esperado** | Deleção de despesas cadastradas
**Dados de entrada** | -
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT09 - Filtrar as despesas registradas**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página de visualizar depesas.<br>2) Usuário escolhe uma classificação de despesas (essencial ou não essencial) e/ou um período de tempo em que as depesas foram realizadas
**Requisitos associados** | RF-009
**Resultado esperado** | Exibição de despesas cadastradas dependendo do filtro adicionado
**Dados de entrada** | Inserção da classificação das depesas e/ou período em que as despesas foram realizadas
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT10 - Simular rendimentos**
 :--------------: | ------------
**Procedimento**  | 1) Após o usuário filtrar as despesas registradas por não essencias, na pagina 'Visualizar Despesas', o mesmo irá clicar no botão 'Simular aplicação'. 
**Requisitos associados** | RF-010
**Resultado esperado** | Ao ser direcionado para a página de simulação, a mesma informa os possíveis rendimentos em 3, 6, 12 meses na Poupança, CDI e Prefixado.
**Dados de entrada** | Filtrar despesas entre essencias e não essenciais.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT11 - Editar dados do usuário**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página do perfil e clica em editar dados.<br>2) Usuário edita os campos com seus dados conforme necessário e clica em salvar.
**Requisitos associados** | RF-003
**Resultado esperado** | Edição dos dados do usuário
**Dados de entrada** | Inserção de dados no formulário de informações cadastradas.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT12 - Editar senha**
 :--------------: | ------------
**Procedimento**  | 1) Usuário clica na página do perfil e clica em editar senha.<br>2) Usuário adiciona sua senha atual e sua senha nova.
**Requisitos associados** | RF-003
**Resultado esperado** | Edição da senha
**Dados de entrada** | Inserção da senha atual, nova senha e confirmação da senha.
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT13 - Recuperar Senha**
 :--------------: | ------------
**Procedimento**  | 1) Na página de login, abaixo do botão de entrar, o usuário tem a opção de recuperar sua senha.<br> 2) Usuário adiciona seu email no campo disponível e clica o botão para enviar um email com sua senha temporária. 
**Requisitos associados** | RF-004
**Resultado esperado** | Recuperação da senha
**Dados de entrada** | Email do usuário
**Resultado obtido** | Sucesso.

**Caso de Teste** | **CT14 - Responsividade**
 :--------------: | ------------
**Procedimento**  | 1) Usuário navega pela aplicação utilizando um tamanho de tela mobile 
**Requisitos associados** | RNF-001
**Resultado esperado** | Todas as telas tem comportamento ajustado para telas mobile.
**Dados de entrada** | -
**Resultado obtido** | Sucesso

**Caso de Teste** | **CT15 - Compatibilidade com qualquer navegador**
 :--------------: | ------------
**Procedimento**  | 1) Usuário usa link da aplicação em navegadores diferentes. 
**Requisitos associados** | RNF-005
**Resultado esperado** | Site é renderizado e funcionalidades listadas acima funcionam como esperado.
**Dados de entrada** | -
**Resultado obtido** | Sucesso


## Registro dos Testes de Software


|*Caso de Teste*                                 |*CT01 - Visualizar página inicial e informações sobre a aplicação*                                         |
|---|---|
|Requisito Associado | RF-005 e RF-011 - Visualização da página inicial e informações sobre a aplicação.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1-27UDYjw5anziBm5Hg8KNhZDbGi5dSW_/view?usp=sharing | 
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1qcMvX9XXRAgpUT4SHM6VsfehR1d4MDp5/view?usp=drive_link | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT02 - Visualizar página de dicas*                                         |
|---|---|
|Requisito Associado | RF-012 - Visualização das dicas.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1Iad9XUzXZ1z1VsfN1CxUeMzJs2gK_dtZ/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT03 - Cadastrar um novo usuário*                                         |
|---|---|
|Requisito Associado | RF-001 - Criação da conta do usuário.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1CD6h1Aw_BKcO-cS6W8JkYbEdqdbxKPxS/view?usp=sharing | 
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1PQJ4TT0ifg_kLllFgOSlLZWkxGzzxZK0/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT04 - Executar o login*                                         |
|---|---|
|Requisito Associado | RF-002 - Execução do login.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1N8nbIV05cnvFLhaSvMoSyBsDHMUrYx9M/view?usp=sharing | 
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1i1FikA3-8W-g4o5OySP4Nn198an1DX5j/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT05 - Adicionar despesas*                                         |
|---|---|
|Requisito Associado | RF-006 - Adição de despesas.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1H4x9eV6dJ2iLP_T_qdjOWYSzn60ITqNB/view?usp=sharing | 
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1Jvq0KgLqmHy3KxjJUSPD6RYduif5rEI8/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT06 - Visualizar despesas cadastradas*                                         |
|---|---|
|Requisito Associado | RF-007 - Exibição das despesas cadastradas.|
|Link do vídeo do teste realizado: |https://drive.google.com/file/d/1d7_ADTFPRng9u5lJy4E6hdSS47moCbCz/view?usp=sharing  | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT07 - Editar as despesas registradas*                                         |
|---|---|
|Requisito Associado | RF-008 - Edição de despesas cadastradas.|
|Link do vídeo do teste realizado: |https://drive.google.com/file/d/1hkRG5Gw7fj4JH-4kq-vP2EI62znGavm6/view?usp=drive_link | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT08 - Deletar as despesas registradas*                                         |
|---|---|
|Requisito Associado | RF-008 - Deleção de despesas cadastradas.|
|Link do vídeo do teste realizado: |https://drive.google.com/file/d/1UFaftoA4w_A_00gdiFEsZRhBkZx7s5k4/view?usp=drive_link  | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT09 - Filtrar as despesas registradas*                                         |
|---|---|
|Requisito Associado | RF-009 - Exibição de despesas cadastradas dependendo do filtro adicionado.|
|Link do vídeo do teste realizado: |https://drive.google.com/file/d/1MmZskAB_A0BQUpB5pN5jIYsmhZQNdUuB/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT10 - Simular rendimentos*                                         |
|---|---|
|Requisito Associado | RF-010 - Ao ser direcionado para a página de simulação, a mesma informa os possíveis rendimentos em 3, 6, 12 meses na Poupança, CDI e Prefixado.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1hlGpzzmsyvjZ8KsduHApOrTsdwss5Up9/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT11 - Editar dados do usuário*                                         |
|---|---|
|Requisito Associado | RF-003 - Edição dos dados do usuário.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1g3cXjBsPtV_RHmsk6uK7NdVzQRh6yRov/view?usp=sharing  | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT12 - Editar senha*                                         |
|---|---|
|Requisito Associado | RF-003 - Edição da senha.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1igGqHdOcnMqVfLgEC3tL61_AyXusxhyf/view?usp=sharing  | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT13 - Recuperar Senha*                                         |
|---|---|
|Requisito Associado | RF-004 - Recuperação da senha.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1Lo0DC8BUsMTxxEslmv-o0msmotI6NsW-/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT14 - Responsividade*                                         |
|---|---|
|Requisito Associado | RNF-001 - Todas as telas tem comportamento ajustado para telas mobile.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1SV_BX2JI2UHLYuwyS14MI4TWEkfjWQg_/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 

|*Caso de Teste*                                 |*CT15 - Compatibilidade com qualquer navegador*                                         |
|---|---|
|Requisito Associado | RNF-005 - Site é renderizado e funcionalidades listadas acima funcionam como esperado.|
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/1SHI22wVc8Tc-NDePD9FwosdDoVimgTEE/view?usp=sharing | 
|Link do vídeo do teste realizado: | https://drive.google.com/file/d/16MmvuxxG982vIP-iY-mGEDesfpBSWc8b/view?usp=sharing | 
|Link do vídeo do teste realizado: |  | 
|Link do vídeo do teste realizado: |  | 


## Avaliação dos Testes de Software

Discorra sobre os resultados do teste. Ressaltando pontos fortes e fracos identificados na solução. Comente como o grupo pretende atacar esses pontos nas próximas iterações. Apresente as falhas detectadas e as melhorias geradas a partir dos resultados obtidos nos testes.

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
| 1 | Você é uma pessoa que quer gerenciar suas finanças. Encontre onde fazer o cadastro na aplicação, faça o login e adicione pelo menos 5 despesas que variem entre essencial e não essencial |
| 2 | Voce é uma pessoa que deseja visualizar suas despesas cadastradas. Encontre onde visualizá-las e filtre apenas as despesas essenciais. |
| 3 | Você é uma pessoa que registrou suas despesas com campos incorretos. Encontre onde editar uma despesa e deletar outra despesa. |
| 4 | Você é uma pessoa que gostaria de visualizar quanto suas despesas não essenciais renderiam em uma aplicação. Encontre a página de visualizar quanto você ganharia aplicando o valor de suas despesas não essencias. |


## Registro de Testes de Usabilidade

Cenário 1: Você é uma pessoa que quer gerenciar suas finanças. Encontre onde fazer o cadastro na aplicação, faça o login e adicione pelo menos 5 despesas que variem entre essencial e não essencial

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       |  SIM            | 4                   | 3min 35.06 segundos                  |
| 2       |              | 5                    | 35.00 segundos                  |
| 3       |              | 4                    | 50.10 segundos                  |
| 4       |              | 4                    | 50.10 segundos                  |
|  |  |  |  |
| **Média**     | 100%           | 5                | 38.79 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 25.00 segundos |


    Comentários dos usuários: Muito intuitivo. Achei o cadastro rápido e adicionei minhas despesas em pouco tempo. 




Cenário 2: Voce é uma pessoa que deseja visualizar suas despesas cadastradas. Encontre onde visualizá-las e filtre apenas as despesas essenciais.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 02.31 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |


    Comentários dos usuários: O site é fácil de acessar, mas algumas páginas poderiam 
    redirecionar a gente automaticamente para outras. Senti a falta de mais opções de filtros, 
    tanto na hora da pesquisa, quanto depois dela, nos resultados.

Cenário 3: Você é uma pessoa que registrou suas despesas com campos incorretos. Encontre onde editar uma despesa e deletar outra despesa.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 5                    | 24.83 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |

Comentários dos usuários: O site está intuitivo de usar.

Cenário 3: Você é uma pessoa que gostaria de visualizar quanto suas despesas não essenciais renderiam em uma aplicação. Encontre a página de visualizar quanto você ganharia aplicando o valor de suas despesas não essencias.

| Usuário | Taxa de sucesso | Satisfação subjetiva | Tempo para conclusão do cenário |
|---------|-----------------|----------------------|---------------------------------|
| 1       | SIM             | 4                    | 07.22 segundos                          |
| 2       | SIM             | 5                    | 31.42 segundos                          |
| 3       | SIM             | 5                    | 36.21 segundos                          |
|  |  |  |  |
| **Média**     | 0%           | 0                | 0 segundos                           |
| **Tempo para conclusão pelo especialista** | SIM | 5 | 13.57 segundos |

Comentários dos usuários: Poderia deixar explicito que os valores passados para a página de simulação de aplicação são apenas os não essenciais do filtro feito pelo usuário.

## Avaliação dos Testes de Usabilidade


Tomando como base os resultados obtidos, foi possível verificar que a aplicação web apresenta bons resultados quanto à taxa de sucesso na interação dos usuários, tendo em vista que os cenários propostos foram concluídos com sucesso.

Além disso, a aplicação obteve também uma elevada satisfação subjetiva dos usuários no momento que realizavam os cenários propostos. Prova são as médias das avaliações em cada um dos cenários, que variou entre 4 (bom) e 5 (ótimo).

Com relação ao tempo para conclusão de cada tarefa/cenário, notamos discrepância entre a média de tempo dos usuários e o tempo do especialista/desenvolvedor em todos os cenários. Tal discrepância, em certa medida, é esperada, tendo em vista que o desenvolvedor já tem prévio conhecimento de toda a interface da aplicação, do posicionamento dos elementos, lógica de organização das páginas, etc.

Contudo, tendo em vista que a diferença foi relevante (por exemplo, 113 segundos — média usuários — contra 25 segundos — especialista — no cenário três), e ainda os comentários feitos por alguns usuários, entendemos haver oportunidades de melhoria na usabilidade da aplicação.



