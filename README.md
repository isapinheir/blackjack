# 🃏 Blackjack

Um jogo interativo de blackjack/vinte-e-um desenvolvido em JavaScript para aplicar e consolidar os conceitos fundamentais da linguagem.

## Conceitos de JavaScript Aplicados

Abaixo estão detalhados os pilares técnicos da linguagem que foram implementados na construção da mecânica do jogo:

### 1. Controle de Fluxo e Condicionais
* **`if` / `else` / `else if`:** Utilizados para tomar decisões no jogo, controlando o fluxo do que acontece dependendo das cartas tiradas.
* **Operadores de Comparação (`>`, `<`, `>=`, `<=`, `!=`):** Aplicados para validar pontuações e condições dojogo.
* **Operadores Lógicos (`&&`, `||`, `!`):** Para combinar múltiplas condições na mesma expressão.
* **Igualdade Ampla (`==`) vs. Igualdade Estrita (`===`):** Implementação consciente de comparações de valor e tipo. No projeto, a preferência pelo operador `===` garante que dados lidos (como inputs de texto) sejam validados corretamente em relação aos tipos numéricos do sistema, evitando coerções indesejadas de tipo (*type coercion*).

### 2. Manipulação de Arrays (Vetores)
Arrays foram utilizados para gerenciar as cartas listadas.
* **`.length`:** Utilizado para monitorar a quantidade de cartas.
* **`.push()`:** Insere novos elementos ao final da lista de forma dinâmica.

### 3. Geração de Números Aleatórios (Objeto `Math`)
* **`Math.random()` e `Math.floor()`:** Utilizados em conjunto para gerar a imprevisibilidade do jogo. A combinação limpa os números decimais flutuantes e entrega inteiros dentro de um intervalo controlado.
