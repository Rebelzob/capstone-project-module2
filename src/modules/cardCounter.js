const cardCounter = () => {
  const counter = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');
  counter.innerHTML = cards.length;
};

export default cardCounter;