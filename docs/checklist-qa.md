# 🧪 Checklist de QA — ERP QA Lab

## 🎯 Objetivo

Garantir que todas as funcionalidades desenvolvidas sejam validadas de forma consistente, rastreável e com qualidade.

---

# 📋 Checklist de Teste por Task

Antes de mover para "Concluído", validar:

## 🔹 Dados válidos

* [ ] Sistema aceita dados corretos
* [ ] Registro é salvo corretamente
* [ ] Dados persistem corretamente

---

## 🔹 Dados inválidos

* [ ] Sistema rejeita dados incorretos
* [ ] Mensagens de erro são exibidas corretamente
* [ ] Não há falha silenciosa

---

## 🔹 Limites de campo

* [ ] Valor mínimo validado
* [ ] Valor máximo validado
* [ ] Campos obrigatórios validados

---

## 🔹 Regras de negócio

* [ ] Todas as regras foram respeitadas
* [ ] Não permite comportamento fora da regra
* [ ] Fluxo segue o esperado

---

## 🔹 Comportamento do sistema

* [ ] Não ocorre erro inesperado
* [ ] Interface responde corretamente
* [ ] Fluxo do usuário está correto

---

# 🧪 Validação de Bug

Antes de fechar um BUG:

* [ ] Bug foi reproduzido
* [ ] Correção aplicada
* [ ] Teste validado novamente
* [ ] Não gerou efeito colateral

---

# 📸 Padrão de Evidência

Cada teste deve conter:

## 📌 Estrutura

**Cenário:**
Descrição do teste realizado

**Entrada:**
Dados utilizados

**Resultado esperado:**
Comportamento esperado

**Resultado obtido:**
Comportamento observado

**Status:**
✔️ Aprovado / ❌ Reprovado

---

# 💥 Regra de Ouro

* Nenhuma task é concluída sem validação
* Nenhum bug é fechado sem revalidação
* Nenhum teste é válido sem evidência

---

# 🚀 Objetivo

Padronizar o processo de QA garantindo consistência, qualidade e rastreabilidade no projeto.
