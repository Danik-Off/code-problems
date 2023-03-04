/**
 * @param {any} arg
 * @returns any
 */
function undefinedToNull(arg) {
    for(const key in arg)
    {
     
      if(typeof arg[key] ==="object")
      {
        undefinedToNull(arg[key]);
      }
      else if(arg[key]===undefined)
      {
       arg[key]=null;
      }
    }
    return arg;
  }
  console.log(undefinedToNull({a:{c: undefined}, b: 'BFE.dev'}).a);