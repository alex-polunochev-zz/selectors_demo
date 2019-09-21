// Demo 1
// Factorial of 5:  1 * 2 * 3 * 4 * 5 = 120

function rFact(num)
{
    if (num === 0)
      { return 1; }
    else
      { return num * rFact( num - 1 ); }
}

for (let i = 0; i < 50; i++){
  console.time('next')
  rFact(5000)
  console.timeEnd('next')
}






