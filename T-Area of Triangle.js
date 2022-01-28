const sides = [12, 4, 9];
const areaOfTriangle = sides => {
   const [a, b, c] = sides;
   const sp = (a + b + c) / 2;
   const aDifference = sp - a;
   const bDiffernece = sp - b;
   const cDifference = sp - c;
   const area = Math.sqrt(sp * aDifference * bDiffernece * cDifference);
   return area;
};
console.log(areaOfTriangle(sides));