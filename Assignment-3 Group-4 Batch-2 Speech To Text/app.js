// speech to text in vanila javascript group-5

const texts = document.querySelector(".texts");
const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");

//webkit
window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.interimResults = true;

//creating a new p tag for live text
let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
  //mapping through the speech list to join to words together
  const text = Array.from(e.results)
    .map((result) => result[0])
    .map((result) => result.transcript)
    .join("");

    texts.appendChild(p);
    console.log(text);
      p.innerText = ""+text;
  // p = document.createElement("p");

});

//ending the old session to a start a new one
recognition.addEventListener("end", () => {
  recognition.start();
});

button1.addEventListener("click", () => {
  recognition.start();
});

button2.addEventListener("click", () => {
  recognition.abort();
});