var a = function() {
  console.log('HI 1')
}

if(true) {
  var a = function() {
    console.log('HI 2')
  }
}

a()

// O que vai acontecer?
// 1. Vai imprimir "HI 1"
// 2. Vai imprimir "HI 2"