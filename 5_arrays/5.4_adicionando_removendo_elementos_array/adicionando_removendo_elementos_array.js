var emails = [];

console.log(emails.length);
//push: adiciona elemento(s) no fim do array
emails.push('joao@email.com');
console.log(emails.length);
console.log(emails);
console.log();

emails.push('maria@email.com', 'clara@email.com');
console.log(emails.length);
console.log(emails);
console.log();

emails.push('jose@email.com');
console.log(emails.length);
console.log(emails);
console.log();

//pop: remove e retorna o último elemento do array
console.log(emails.pop());
console.log(emails.length);
console.log(emails);
console.log();

//unshift: adiciona elemento(s) no início do array
emails.unshift('pedro@email.com', 'ana@email.com');
console.log(emails.length);
console.log(emails);
console.log();

//shift: remove e retorna o primeiro elemento do array
console.log(emails.shift());
console.log(emails.length);
console.log(emails);
console.log();

//Adiciona o elemento na posição 3 do array
emails.splice(2, 0, 'francisco@email.com', 'breno@email');
console.log(emails);
console.log();

//Remove 1 elemento a partir da posição 3 do array
console.log(emails.splice(2, 1));
console.log(emails);
console.log();
