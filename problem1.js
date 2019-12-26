const readline = require('readline');

// Matriz Espiral
// Teniendo la función MatrixSpiral(strArr) leer un array de string  en strArr el cual
// representa una matriz 2D N matriz, hacer un programa que retorne los elementos imprimiendo
// cada uno de los elementos de la matriz en orden de espirar en sentido de las manecillas del
// reloj. Los elementos se deben retornar separados por coma, por ejemplo si strArr es [1, 2,
// 3], [4, 5, 6], [7, 8, 9] la matriz se veria de la siguiente manera:
 
// 1 2 3
// 4 5 6
// 7 8 9
 
// Deberia imprimir la matriz en espiral en sentido de las manecillas del reloj: 1,2,3,6,9,8,7,4,5
// Ejemplo
// Input: [[1, 2], [10, 14]]
// Output: 1,2,14,10
// Input: [[4, 5, 6, 5],[1, 1, 2, 2], [5, 4, 2, 9]]
// Output: 4,5,6,5,2,9,2,4,5,1,1,2

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese array, ejemplo: ["[5,3]","[4,3]","[3,1]","[3,6]"]:',(answer) => {
  
  function getMatrixSpral(answer){
    const array = JSON.parse(answer);
    const arrayNormalized = []; 
    array.map((value) => {
      arrayNormalized.push(JSON.parse(value));
      console.log(JSON.parse(value));
    });
    
    return MatrixSpiral(array.length,arrayNormalized[0].length, arrayNormalized);
  }  

  function MatrixSpiral(m, n, a){
    let k = 0;
    let l = 0;
    let result = "";      
    while (k < m && l < n)
    {
        for (let index = l; index < n; index++) {
          result += a[k][index] + ",";
        }        k++;        
    
       for (let index = k; index < m; index++) {
            result += a[index][n - 1] + ",";       
         }
        n--;        
   
      if (k < m)
        {
          for (let index = n - 1; index >= l; --index) {
            result += a[m - 1][index] + ",";
          }
          m--;
        }        
        if (l < n)
        {
          for (let index = m - 1; index >= k; --index) {
            result += a[index][l] + ",";
          }
          l++;
        }
    }
    return result;
  };
  console.log(getMatrixSpral(answer));
  rl.close();
});