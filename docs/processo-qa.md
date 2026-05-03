# 🧠 Padrão Operacional — ERP QA Lab

## 🎯 Objetivo

Definir o processo padrão de desenvolvimento, testes e validação do sistema ERP, garantindo rastreabilidade, qualidade e organização do fluxo de trabalho.

---

# 🔄 Fluxo de Trabalho

Story → Task → Desenvolvimento → Teste → Bug → Ajuste → Concluído

---

# 🟣 1. Padrão de Story

## 📌 Quando criar

Sempre que uma nova funcionalidade for necessária.

## 🧾 Estrutura

**Título:**
Cadastro de produtos no sistema

**Descrição:**
Permitir que o usuário cadastre produtos com nome, preço, quantidade e estoque mínimo.

**Critérios de aceite:**

* Nome aceita texto e caracteres especiais
* Preço aceita 2 casas decimais
* Quantidade entre 0 e 99.999
* Estoque mínimo entre 0 e 99.999

---

# 🔵 2. Padrão de Task

## 📌 Quando criar

Para cada ação necessária para implementar a Story.

## 🧾 Estrutura

**Título:**
Criar função registrarProduto()

**Descrição:**
Implementar função responsável por cadastrar produto no sistema.

**Regra:**
Toda task deve estar vinculada a uma Story.

---

# 🔴 3. Padrão de Bug

## 📌 Quando criar

Sempre que houver comportamento incorreto.

## 🧾 Estrutura

**Título:**
Mensagem incorreta para quantidade inválida

**Descrição:**
Sistema retorna mensagem errada ao inserir quantidade inválida.

**Passos para reproduzir:**

1. Inserir quantidade negativa
2. Tentar cadastrar produto

**Resultado esperado:**
Mensagem: "Quantidade inválida"

**Resultado atual:**
Mensagem: "Quantidade insuficiente"

---

# 🧪 4. Padrão de Teste (QA)

## 📌 O que validar

* Dados válidos
* Dados inválidos
* Limites de campo
* Regras de negócio

## 📌 Registro

Toda validação deve gerar evidência (print, log ou descrição).

---

# 📸 5. Evidência de Teste

## 📌 Tipos:

* Print de tela
* Log do sistema
* Resultado de teste
* Vídeo (opcional)

## 📌 Regra:

Nenhum bug pode existir sem evidência.

---

# 🔗 6. Integração Jira + GitHub

## 📌 Padrão de commit:

KAN-4: cria função registrarProduto com validação

## 📌 Regra:

Todo commit deve referenciar uma task.

---

# 🧠 7. Regras Gerais

* Nada começa sem ticket
* Nada termina sem validação
* Todo bug deve ser registrado
* Toda correção deve ser rastreável
* Toda entrega deve ser testada

---

# 🚀 8. Ferramentas do Projeto

## Gestão

* Jira

## Desenvolvimento

* GitHub
* VS Code

## QA

* Testes manuais
* Postman (API)
* JMeter (performance)
* Automação (futuro)

---

# 📊 9. Objetivo do Projeto

Criar um ambiente completo de engenharia de software que simule um cenário real de desenvolvimento, com foco em qualidade, rastreabilidade e boas práticas.

O ERP é utilizado como sistema base para aplicação das técnicas de QA.
