makeGrid = n => {
  for (let i = 0; i < n; i++) {
    console.log(Math.floor(i / 3) * 33)
  }
}

makeGrid(9)

// 0 0 0
// 33 33 33
// 66 66 66
