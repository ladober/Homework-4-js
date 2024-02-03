let adviceId = document.querySelector("#js-advice-id");

let adviceText = document.querySelector("#js-advice");

const button = document.querySelector(".btn");

const appContainer = document.querySelector("#advice-text");

const api_url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  try {
    const response = await fetch(api_url);

    let data = await response.json();

    adviceId.innerHTML = data.slip.id;
    adviceText.innerHTML = data.slip.advice;
  } catch (error) {
    console.error(error);
  }
};
getAdvice();
button.addEventListener("click", () => {
  document.location.reload();
});
