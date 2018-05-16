var ativo = true;
var administrador = false;
console.log(ativo && administrador);
console.log(ativo || administrador);
console.log();

console.log(ativo & administrador);
console.log(ativo | administrador);
console.log();

//comparativo binário
/* Operador OR
10 = 1 0 1 0
 1 = 0 0 0 1
------------- (or)
     1 0 1 1

1011 = 11
*/
console.log(10 | 1);

/* Operador AND
10 = 1 0 1 0
 1 = 0 0 0 1
------------- (and)
     0 0 0 0

0000 = 0
*/
console.log(10 & 1);
