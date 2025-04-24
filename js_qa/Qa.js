

var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
  };
  
  
  services["Розбити скло"] = "200 грн"
  
  
  function price() {
    let total = 0
    for (let key in services) {
      let numberOnly = parseInt(services[key])
      total += numberOnly
    }
    return total + " грн"
  }
  
  
  function minPrice() {
    let allPrices = [];
    for (let key in services) {
      let numberOnly = parseInt(services[key]);
      allPrices.push(numberOnly);
    }
    let min = Math.min(...allPrices);
    return min + " грн";
  }
  
  
  function maxPrice() {
    let allPrices = [];
    for (let key in services) {
      let numberOnly = parseInt(services[key]);
      allPrices.push(numberOnly);
    }
    let max = Math.max(...allPrices);
    return max + " грн";
  }
  
  
  console.log("Загальна вартість послуг:", price());
  console.log("Мінімальна ціна:", minPrice());
  console.log("Максимальна ціна:", maxPrice());