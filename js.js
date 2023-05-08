const pairs = [90, 10, 1, 2, 3, 4, 5, 10, 1, 90, 90, 90, 10, 22];
const pairsSorted = {};

const pairs1 = pairs.sort((a, b) => b - a);

for (let i = 0; i < pairs1.length - 1; i++) {
  let pairName = pairs1[i];
  if (pairs1[i] === pairs1[i + 1]) {
    i++;
    if (pairsSorted[pairName]) {
      pairsSorted[pairName] += 1;
    } else {
      pairsSorted[pairName] = 1;
    }
  }
}

console.log(pairs1);
console.log(pairsSorted);
