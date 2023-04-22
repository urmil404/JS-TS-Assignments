// window.onbeforeunload = function (e) {
//     localStorage.clear();
// };

$(document).ready(function () {
  const data = JSON.parse(localStorage.getItem("data"));

  let extraJainFood = 0;
  let extraSwamiFood = 0;
  let extraRegularFood = 0;

  const extraFood = {
    jain: extraJainFood,
    swami: extraSwamiFood,
    regular: extraRegularFood,
  };

  $(".day-heading").html(data.weekday);

  $(".jain-meal").html(data.jain.meal);
  $(".swami-meal").html(data.swaminarayan.meal);
  $(".regular-meal").html(data.regular.meal);

  $(".jain-quantity").html("Quantity - " + data.jain.quantity);
  $(".regular-quantity").html("Quantity - " + data.regular.quantity);
  $(".swami-quantity").html("Quantity - " + data.swaminarayan.quantity);

  let jainQuantity = data.jain.quantity;
  let swamiQuantity = data.swaminarayan.quantity;
  let regularQuantity = data.regular.quantity;

  $(".jain-order").click(function () {
    const value = $("#jain-food").val();

    if (jainQuantity - value >= 0) {
      jainQuantity = jainQuantity - value;
      $(".jain-quantity").html("Quantity - " + jainQuantity);
    } else if (value - jainQuantity > 0 && jainQuantity !== 0) {
      extraJainFood = value - jainQuantity;
      jainQuantity = 0;
      extraFood.jain = extraJainFood;
      localStorage.setItem("extra-food", JSON.stringify(extraFood));
      $(".jain-quantity").html("Quantity - " + jainQuantity);
    } else {
      extraJainFood = Number(value) + extraJainFood;
      // console.log(extraJainFood);
      extraFood.jain = extraJainFood;
      localStorage.setItem("extra-food", JSON.stringify(extraFood));
      $(".jain-quantity").html("Quantity - " + jainQuantity);
    }
  });

  $(".regular-order").click(function () {
    const value = $("#regular-food").val();

    if (regularQuantity - value >= 0) {
      regularQuantity = regularQuantity - value;
      $(".regular-quantity").html("Quantity - " + regularQuantity);
    } else if (value - regularQuantity > 0 && regularQuantity !== 0) {
      extraRegularFood = value - regularQuantity;
      regularQuantity = 0;
      extraFood.regular = extraRegularFood;
      localStorage.setItem("extra-food", JSON.stringify(extraFood));
      $(".regular-quantity").html("Quantity - " + regularQuantity);
    } else {
      extraRegularFood = Number(value) + extraRegularFood;
      extraFood.regular = extraRegularFood;
      localStorage.setItem("extra-food", JSON.stringify(extraFood));
      $(".regular-quantity").html("Quantity - " + regularQuantity);
    }
  });

  $(".swami-order").click(function () {
    const value = $("#swami-food").val();

    if (swamiQuantity - value >= 0) {
      swamiQuantity = swamiQuantity - value;
      $(".swami-quantity").html("Quantity - " + swamiQuantity);
    } else if (value - swamiQuantity > 0 && swamiQuantity !== 0) {
      extraSwamiFood = value - swamiQuantity;
      swamiQuantity = 0;
      extraFood.swami = extraSwamiFood;
      localStorage.setItem("extra-food", JSON.stringify(extraFood));
      $(".swami-quantity").html("Quantity - " + swamiQuantity);
    } else {
      extraSwamiFood = Number(value) + extraSwamiFood;
      extraFood.swami = extraSwamiFood;
      localStorage.setItem("extra-food", JSON.stringify(extraFood));
      $(".swami-quantity").html("Quantity - " + swamiQuantity);
    }
  });
});
