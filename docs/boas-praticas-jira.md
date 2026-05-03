# 📘 Boas Práticas de QA e Padronização no Jira

## 🎯 Objetivo

Definir padrões de escrita e organização de tarefas no Jira, garantindo clareza, rastreabilidade e qualidade no processo de desenvolvimento.

---

# 🧭 Estrutura Hierárquica

EPIC → STORY → TASK → BUG

* **Epic**: grande objetivo (macro)
* **Story**: funcionalidade do usuário
* **Task**: atividade técnica
* **Bug**: erro identificado

---

# 🔵 EPIC

## 🎯 Objetivo

Representa um grande bloco de valor (módulo ou funcionalidade ampla)

## 🧱 Título

[MÓDULO] - [OBJETIVO PRINCIPAL]

## 🧾 Descrição

📌 Visão:
Descrição do problema ou necessidade

🎯 Objetivo:
Resultado esperado

📦 Escopo:

* Funcionalidade 1
* Funcionalidade 2

🚫 Fora de escopo:
Itens não contemplados

---

# 🟢 STORY

## 🎯 Objetivo

Descrever uma funcionalidade do ponto de vista do usuário

## 🧱 Título

Como [tipo de usuário]
Quero [ação]
Para [benefício]

## 🧾 Descrição

📌 Contexto:
Descrição da funcionalidade

🎯 Objetivo:
O que será entregue

📋 Regras de negócio:

* Regra 1
* Regra 2

🧪 Critérios de aceitação:

Cenário: Nome do cenário
Dado que ...
Quando ...
Então ...

---

# 🟡 TASK

## 🎯 Objetivo

Representar uma atividade técnica necessária para implementar uma Story

## 🧱 Título

[AÇÃO] + [COMPONENTE]

## 🧾 Descrição

📌 O que será feito:
Descrição técnica

🎯 Objetivo:
Parte da Story atendida

🧩 Dependências:
Itens relacionados

✔️ Critério de conclusão:
Definição de pronto (DoD)

---

# 🔴 BUG

## 🎯 Objetivo

Registrar falhas no sistema de forma objetiva e reproduzível

## 🧱 Título

[BUG] + [AÇÃO] + [ERRO]

## 🧾 Descrição

📌 Descrição:
O que ocorre

🔁 Passos para reproduzir:
1.
2.
3.

✅ Resultado esperado:
Comportamento correto

❌ Resultado atual:
Comportamento observado

📎 Evidência:
Prints, vídeos ou logs

---

# 🧪 Critérios de Aceitação (Gherkin)

Cenário: Exemplo

Dado que o usuário está na tela
Quando realiza uma ação
Então o sistema responde corretamente

---

# 📌 Padronização de Escrita

## ✔ Boas práticas

* Clareza e objetividade
* Linguagem neutra
* Foco em comportamento
* Escrita testável

## ❌ Evitar

* “Acho que...”
* “Parece...”
* “Erro estranho”

---

# ⚙️ Regras de Qualidade

* Cada item deve ter um único objetivo
* Story não deve ser técnica
* Task não deve ser funcional
* Bug deve ser objetivo e reproduzível
* Critérios devem ser testáveis

---

# 🔄 Fluxo de Trabalho

EPIC
├── STORY
│     ├── TASK
│     ├── TASK
│     └── BUG

---

# 💥 Exemplo Prático

## EPIC

Cadastro de Produtos

## STORY

Como usuário quero cadastrar produtos para controlar estoque

## TASKS

* Criar função de cadastro
* Validar preço
* Validar quantidade
* Escrever testes unitários

## BUGS

* Sistema aceita preço inválido
* Sistema permite quantidade negativa

---

# 🚀 Benefícios

* Organização clara do projeto
* Facilidade na automação de testes
* Redução de retrabalho
* Melhor comunicação entre áreas
* Base sólida para evolução em QA
