function checkProbabilityTheory(count) {
    let evenCount = 0
    let oddCount = 0
  
    for (let i = 0; i < count; i++) {
      let randomNumber = Math.floor(Math.random() * 100)
  
      if (randomNumber % 2 === 0) {
        evenCount++
      } else {
        oddCount++
      }
    }
  
    let evenPercentage = ((evenCount / count) * 100).toFixed(2)
    let oddPercentage = ((oddCount / count) * 100).toFixed(2)

    console.log("Кількість згенерованих чисел:", count)
    console.log("Парних чисел:", evenCount)
    console.log("Непарних чисел:", oddCount)
    console.log("Відсоток парних:", evenPercentage + "%")
    console.log("Відсоток непарних:", oddPercentage + "%")
  }
  checkProbabilityTheory(1000) 