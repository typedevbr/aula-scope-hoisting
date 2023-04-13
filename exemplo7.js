const a = "HI 1"

if(true) {
  const a = "HI 2"
}

console.log(a)

// O que vai acontecer?
// 1. Vai dar erro (não é possível redeclarar uma const)
// 2. Vai imprimir "HI 1"
// 3. Vai imprimir "HI 2"