const ages = [11, 14, 16, 13];
const ages2 = [20, 15, 30, 18];
const ages3 = [22, 12, 31, 19];

const allAges = ages
  .concat(ages2)
  .concat([5])
  .concat(ages3);

const allAges2 = [...ages, ...ages2, 5, ...ages3];
//console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;

const takaPaisa = [650, 450, 250];

const maximum = Math.max(...takaPaisa);

console.log(maximum);
