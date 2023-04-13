const hi = "Hello World"

function a() {
  const hi = "Hello World A"
  return function b() {
    console.log(hi)
  }
}

const c = a()
c()

// O que vai acontecer?
// 1. Vai imprimir "Hello World"
// 2. Vai imprimir "Hello World A"
