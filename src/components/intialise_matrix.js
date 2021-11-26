export const inputMatrix = [];

for (let i = 0; i < 5; i++) {
    const row = []
    for (let j = 0; j < 6; j++) {
      const max = 8;
      const number = Math.floor(Math.random() * max + 1);
      row.push(number);
    }
    inputMatrix.push(row);
  }

export default {
    inputMatrix}
;