const cardList = document.getElementById('cards-list');

cardList.addEventListener('click', event => {
  console.log(event.target.dataset.info);
})