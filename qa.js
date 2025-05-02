const text = "Wonderful Joyful Happiness Time Task Apple"// рядок в якому шукаємо наші слова 
const result = text.match(/\b[^Aa\s]{6,}\b/g)// використовуємо регулярку 
console.log(result)//отримуємо результат 
