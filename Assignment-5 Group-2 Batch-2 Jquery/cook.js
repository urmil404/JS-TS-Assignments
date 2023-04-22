$(document).ready(function() {
    const data = JSON.parse(localStorage.getItem('extra-food'));

    console.log(data);

    const jain = data.jain;
    const swami = data.swami;
    const regular = data.regular;

    const total = jain + swami + regular;

    $(".total-meals").html(total);
    $(".extra-jain").html(jain);
    $(".extra-regular").html(regular);
    $(".extra-swami").html(swami);
})