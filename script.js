let lista = [45, 4, 9, 16, 25];
let lista2 = [];

/*lista2 = lista.map(function (item) {
  return item * 2;
});*/

lista2 = lista.every(function (item) {
  if (item < 20) {
    return true;
  } else {
    return false;
  }
});

let res = lista2;

console.log(res);
