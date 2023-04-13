function b() {
  let hi = "Hello World B"
  a()
  function a() {
    console.log(hi)
  }
}
let hi = "Hello World"
b()
// O que vai acontecer?
// 1. Vai dar erro (dentro da função a não existe variável hi)
// 2. Vai imprimir "Hello World B" (vai buscar da função que chamou)
// 3. Vai imprimir "Hello World" (vai buscar do escopo global)
// 4. Vai dar undefined