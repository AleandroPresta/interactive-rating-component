const btnSubmit = document.getElementById('btnSubmit');
const ratingCard = document.querySelector('.rating-card');



btnSubmit.addEventListener("click", submitClick);

function submitClick(){

    window.location.href = 'thank-you.html';

}