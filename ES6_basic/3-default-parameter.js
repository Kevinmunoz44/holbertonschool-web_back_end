export default function getSumOfHoods(initialNumber, expansion1989 = 3, expansion2019 = 4) {
    if (expansion1989 === undefined) {
      expansion1989 = 89;
    }
  
    if (expansion2019 === undefined) {
      expansion2019 = 19;
    }
    return initialNumber + expansion1989 + expansion2019;
  }
