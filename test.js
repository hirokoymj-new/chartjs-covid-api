// const array = [
//   1633236300000, 1633244100000, 1633248000000, 1633252500000, 1633287600000,
//   1633291500000,
// ];

const values = [2560768, 2586739, 2610385, 2631994, 2648751, 2659414, 2668094];

const result = values.reduce((acc, curr, i, src) => {
  if (i !== 0) acc.push(curr - src[i - 1]);
  return acc;
}, []);

console.log(result);
