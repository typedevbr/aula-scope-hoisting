function a() {
  console.log('HI 1')
}
if(true) {
  function a() {
    console.log('HI 2')
  }
}
a()
// O que vai acontecer?
// 1. Vai dar erro (não é possível redeclarar uma função)
// 2. Vai imprimir "HI 1"
// 3. Vai imprimir "HI 2"