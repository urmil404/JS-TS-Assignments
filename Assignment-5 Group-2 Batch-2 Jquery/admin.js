import { menu } from "./menu.js";

let items;
let generate = false;

window.onbeforeunload = function (e) {
  localStorage.clear();
};

const generateMenu = () => {
  const num1 = Math.floor(Math.random() * 7);
  const num2 = Math.floor(Math.random() * 7);
  const num3 = Math.floor(Math.random() * 7);
  const jainItem = menu.jain[num1];
  const swamiItem = menu.swaminarayan[num2];
  const regularItem = menu.regular[num3];
  return { jainItem, swamiItem, regularItem };
};

const setQuantity = (day, jainQuantity, swamiQuantity, regularQuantity) => {
  generate = true;
  const data = {
    weekday: day,
    jain: {
      meal: items.jainItem,
      quantity: jainQuantity,
    },
    swaminarayan: {
      meal: items.swamiItem,
      quantity: swamiQuantity,
    },
    regular: {
      meal: items.regularItem,
      quantity: regularQuantity,
    },
  };

  return data;
};

$(document).ready(function () {
  $("#genMeals").click(function () {
    items = generateMenu();
    $(".regular-title").html(items.regularItem);
    $(".jain-title").html(items.jainItem);
    $(".swami-title").html(items.swamiItem);
  });

  $("#saveQuantity").click(function () {
    const day = $("#daysDropdown").val();
    console.log(day);
    const jainQuantity = $("#jain").val();
    const swamiQuantity = $("#swaminarayan").val();
    const regularQuantity = $("#regular").val();
    if(!items) {
      alert("Please generate meals!")
    }
    else if (!jainQuantity || !swamiQuantity || !regularQuantity) {
      alert("Please enter the quantities!");
    } else {
      const result = setQuantity(
        day,
        jainQuantity,
        swamiQuantity,
        regularQuantity
      );
      console.log(result);
      localStorage.setItem("data", JSON.stringify(result));
      alert("Data Saved!");
      $("#saveQuantity").addClass("btn-success");
      $("#saveQuantity").removeClass("btn-dark");
      $("#saveQuantity").addClass("disabled");
    }
  });
});
