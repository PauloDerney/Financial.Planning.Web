# Financial.Web.Demo

Este projeto foi feito utilizando o template gratuito e open source [Paper Dashboard Angular 9](https://github.com/creativetimofficial/paper-dashboard-angular) desenvolvido pela empresa Creative Tim utilizando a licensa descrita [aqui](../master/LICENSE.md).

Essa é uma versão demo que disponibilizei com todos os dados mocados e com funcionalidades básicas e não finalizadas. Esse será o start para a lapidação desse projeto para chegar em uma versão final com tudo funcional inclusive a integração com o backend que também estou desenvolvendo com utilizando o conceito de micro serviços (exclusivamente para estudos da configuração de deploy, kubernates, escalabilidade entres outros) e também pretendo disponibilizar em um repositório público em breve.

O Projeto demo atualmente está com Angular 9.0.6 estilizado com Bootstrap 4.3.1.

Por enquanto nesse layout temos

[versão demo publicada](https://pauloderney.github.io/Financial.Web.Demo/#/pages/dashboard)

__Dashboard__
- Visualizar Divida do mes
- Visualizar Valor Pago no mes
- Visualizar Divida total
- Visualizar Contas em atraso
- Visualizar vencimentos proximos
- Visualizar Gráfico com evolução das Dívidas dos anos cadastrados
- Visualizar Gráfico com Contas do mês por categoria
- Visualizar Gráfico com Contas por categoria com dados anuais
![](../master/docs/dashboard.PNG?raw=true)

__Gasto__
- Cadastrar/Editar um Gasto Avulso ou um Gasto Fixo (recorrencia mensal)
- Listar os gastos avulso ativo e gastos fixo.

__Receita__
- Cadastrar/Editar uma receita avulsa ou uma receita fixa (recorrência mensal)
- Listar receitas avulsa ativa e receitas fixa.

__Orçamento__
- Visualizar/Editar/Excluir as receitas lançadas no mês referência
- Visualizar/Editar/Excluir as despesas lançadas no mês referência
- Enviar e-mail para emissão de nota (para receitas necessária)
- Realizar Pagamento de uma despesa
- Visualizar gráfico com relação de receita x despesa
- Visualizar gráfico com relação ao uso da receita (gastos/investimento/reserva/outros)
![](../master/docs/budget.PNG?raw=true)

__Fluxo de Caixa__
- Visualizar o valor que possui em cada meio bancário (conta corrente, investimento, aplicativos cashback entre outros)
- Visualizar gráfico com evolução do fluxo de caixa em todos meios bancarios
- Detalhar um fluxo de caixa específico
  - Visualizar gráfico com evolução do fluxo de caixa específico
  - Visualizar transações de forma detalhada daquele fluxo de caixa para um período informado
  ![](../master/docs/cash-flow.PNG?raw=true)
  
  __Estrutura do Projeto__
  ```
  src/app  
  |___ layouts  
  |     |__ admin-layout  
  |___ pages  
  |     |__ bills  
  |           |__ bill-add (html, scss and ts)  
  |           |__ bill-list (html, scss and ts)  
  |           |__ bills.module.ts  
  |           |__ bills.routing.ts  
  |     |__ budgets  
  |           |__ budget-dashboard (html, scss and ts)  
  |           |__ payment-add (html, scss and ts)  
  |           |__ budgets.module.ts  
  |           |__ budgets.routing.ts  
  |     |__ cash-flow  
  |           |__ cash-flow-dashboard (html, scss and ts)  
  |           |__ cash-flow-detail (html, scss and ts)  
  |           |__ cash-flow.module.ts  
  |           |__ cash-flow.routing.ts  
  |     |__ dashboard  
  |     |__ revenues  
  |           |__ revenue-add (html, scss and ts)  
  |           |__ revenue-list (html, scss and ts)  
  |           |__ revenues.module.ts  
  |           |__ revenues.routing.ts  
  |___ shared  
  |     |__ footer (html, scss and ts)  
  |     |__ navbar (html, scss and ts)  
  |     |__ sidebar (html, scss and ts)  
  |___ app.component.html  
  |___ app.component.scss  
  |___ app.component.ts  
  |___ app.module.ts  
  |___ app.routing.ts  
  ```
 
