makeGrid = n => {
  for (let i = 0; i < n; i++) {
    console.log(Math.floor(i / 4) * 33.3333)
  }
}
// 0 1 2  3 === 0
// 4 5 6  7 === 33
// 8 9 10 11 === 66

makeGrid(12)
