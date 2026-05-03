# 🧠 Padrão de Commits — ERP QA Lab

## 🎯 Objetivo

Padronizar os commits do projeto para garantir clareza, rastreabilidade e integração com o Jira.

---

# 🧭 Estrutura do Commit

TIPO: descrição objetiva

Com Jira:

ERPQA-XX: TIPO: descrição

---

# 🔤 Tipos de Commit

| Tipo     | Uso                                          |
| -------- | -------------------------------------------- |
| feat     | Nova funcionalidade                          |
| fix      | Correção de bug                              |
| docs     | Documentação                                 |
| test     | Criação ou ajuste de testes                  |
| refactor | Melhoria de código sem alterar comportamento |
| chore    | Ajustes gerais (config, estrutura, etc)      |

---

# 📌 Regras de Escrita

## ✔ Boas práticas

* Usar verbo no infinitivo (criar, validar, ajustar)
* Ser direto e objetivo
* Descrever o que foi feito, não como
* Referenciar ticket do Jira sempre que possível

## ❌ Evitar

* "update"
* "ajustes"
* "teste"
* "coisas"
* mensagens vagas

---

# 🔗 Integração Jira + GitHub

Sempre utilizar o ID do ticket:

Exemplo:

ERPQA-4: feat: cria função registrarProduto

---

# 💥 Exemplos Reais do Projeto

## 🟣 Funcionalidade

ERPQA-2: feat: implementa cadastro de produtos

---

## 🔵 Task técnica

ERPQA-4: feat: cria função registrarProduto

ERPQA-5: feat: implementa validação de preço e quantidade

---

## 🔴 Bug

ERPQA-6: fix: corrige validação de quantidade negativa

---

## 🧪 Testes

ERPQA-7: test: adiciona testes para cadastro de produto

---

## 📄 Documentação

docs: adiciona padrão operacional de QA

docs: cria guia de boas práticas no Jira

---

## 🧠 Refatoração

refactor: melhora estrutura da função de cadastro

---

## ⚙️ Configuração

chore: organiza estrutura de pastas do projeto

---

# 🔥 Regra de Ouro

Todo commit deve responder:

O que foi feito e por quê?

---

# 🚀 Benefícios

* Histórico claro do projeto
* Integração com Jira
* Facilidade de manutenção
* Padrão profissional de mercado
* Melhoria na comunicação entre times
