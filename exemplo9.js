const a = function() {
  console.log('HI 1')
}
if(true) {
  const a = function() {
    console.log('HI 2')
  }
}
a()

// O que vai acontecer?
// 1. Vai dar erro (não é possível redeclarar uma const)
// 2. Vai imprimir "HI 1"
// 3. Vai imprimir "HI 2"