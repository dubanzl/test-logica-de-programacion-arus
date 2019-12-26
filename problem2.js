const readline = require('readline');
const _ = require('lodash');

// teniendo la función WordSplit(strArr) leer un array de string almacenada en strArr,
// que contendrá 2 elementos: el primer elemento será una secuencia de caracteres, y el
// segundo elemento será una larga cadena de palabras separadas por comas, en orden
// alfabético, que representa un diccionario de cierta longitud arbitraria. Por ejemplo: strArr
// puede ser: [hellocat, apple,bat,cat,goodbye,hello,yellow,why]. Su objetivo es determinar si
// el primer elemento en la entrada se puede dividir en dos palabras, donde ambas palabras
// existen en el diccionario que se proporciona en la segunda entrada. En este ejemplo, el primer
// elemento se puede dividir en dos palabras: hola y gato porque ambas palabras están en el
// diccionario.
 
// Su programa debe devolver las dos palabras que existen en el diccionario separadas por una
// coma. Entonces, para el ejemplo anterior, su programa debería devolver hola, cat. Solo habrá
// una forma correcta de dividir el primer elemento de los caracteres en dos palabras. Si no hay
// forma de dividir la cadena en dos palabras que existen en el diccionario, no es posible
// devolver la cadena. El primer elemento en sí mismo nunca existirá en el diccionario como una
// palabra real.
// Ejemplo
// Input: [baseball, a,all,b,ball,bas,base,cat,code,d,e,quit,z]
// Output: base,ball
// Input: [abcgefd, a,ab,abc,abcg,b,c,dog,e,efd,zzzz]
// Output: abcg,efd

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese array, ejemplo:["baseball","a,all,b,ball,bas,base,cat,code,d,e,quit,z"]:',(answer) => {
  const data = JSON.parse(answer);
  const dictionary = data[1].split(',');
  const words = data[0];
  try {
    dictionary.map((word) => {
      const first = words.replace(word, '');
      const second = words.replace(first, '');    let result = '';    const n = words.split(first);    if (n[0] == '') {
        result += first + ' ' + second;
      } else {
        result += second + ' ' +  first;
      }    
      if (_.find(dictionary, (w) => w == first) && _.find(dictionary, (w) => w == second)) {
        console.log(result);
        throw BreakException;
      }
    });
} catch(e) {}
  rl.close();
});