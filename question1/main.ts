export function isValidWalk(walk: string[]) {
    if (walk.length !== 10) {
        return false;
      }
    
      let vertical = 0;
      let horizontal = 0;
    
      for (let i = 0; i < walk.length; i++) {
        switch (walk[i]) {
          case 'n':
            vertical++;
            break;
          case 's':
            vertical--;
            break;
          case 'e':
            horizontal++;
            break;
          case 'w':
            horizontal--;
            break;
          default:
            return false;
        }
      }
    
      return vertical === 0 && horizontal === 0;
    
}

