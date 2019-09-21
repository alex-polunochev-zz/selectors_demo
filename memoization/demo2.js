// Demo 2

function rFact(num) {
  if (!rFact.cache) {
    rFact.cache = {}
  }

  if (!rFact.cache[num]) {
    if (num === 0) {
      return rFact.cache[0] = 1
    } else {
      return rFact.cache[num] = num * rFact(num - 1)
    }
  } else {
    return rFact.cache[num]
  }
}


for (let i = 0; i < 50; i++) {
  console.time("next")
  rFact(5000)
  console.timeEnd("next")
}
