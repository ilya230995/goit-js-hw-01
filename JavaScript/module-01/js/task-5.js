" use strict";
const shipment = prompt("Укажите страну доставки");
let credits;
shipment.toLocaleLowerCase();

if (shipment !== null) {
  switch (shipment.toLocaleLowerCase()) {
    case "китай":
      credits = 100;
      alert(`Доставка в Китай будет стоить ${credits} кредитов`);
      break;
    case "чили":
      credits = 250;
      alert(`Доставка в Чили будет стоить ${credits} кредитов`);
      break;
    case "австралия":
      credits = 170;
      alert(`Доставка в Австралию будет стоить ${credits} кредитов`);
      break;
    case "индия":
      credits = 80;
      alert(`Доставка в Индию будет стоить ${credits} кредитов`);
      break;
    case "ямайка":
      credits = 120;
      alert(`Доставка в Ямайку будет стоить ${credits} кредитов`);
      break;

    default:
      alert("В вашей стране доставка не доступна");
  }
}