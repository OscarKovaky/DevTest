export function findOutlier(integers: number[]): number| undefined {
        // Verificar si hay suficientes números para determinar un valor atípico
        if (integers.length < 3) {
          return undefined;
        }
      
        // Contar la cantidad de números pares en las primeras tres posiciones
        const countEvens = integers.slice(0, 3).filter(num => num % 2 === 0).length;
        
        // Determinar si la mayoría son pares
        const isMajorityEven = countEvens < 2;
      
        // Buscar y devolver el valor atípico
        for (const num of integers) {
          if ((num % 2 === 0) === isMajorityEven) {
            return num;
          }
        }
      
        // Devolver 'undefined' si no se encuentra ningún valor atípico
        return undefined;
  }