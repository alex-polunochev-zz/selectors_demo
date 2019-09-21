// Demo 3
function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}

function memoize(fn) {
  return function() {
    var args = Array.prototype.slice.call(arguments)
    fn.cache = fn.cache || {}
    return fn.cache[args] ? fn.cache[args] : 
      (fn.cache[args] = fn.apply(this, args))
  }
}

const memoizedFact = memoize(rFact)

for (let i = 0; i < 50; i++){
  console.time('next')
  memoizedFact(5000)
  console.timeEnd('next')
}