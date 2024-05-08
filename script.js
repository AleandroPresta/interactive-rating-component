const btnSubmit = document.getElementById('btnSubmit');
const ratingCard = document.querySelector('.rating-card');
const white = 'hsl(0, 0%, 100%)';
const ratingCircles = document.querySelectorAll('.circle');

btnSubmit.addEventListener('click', submitClick);

function submitClick(){

    window.location.href = 'thank-you.html';

}

ratingCircles.forEach(
    (circle) => {
        circle.addEventListener('click', () => selectRating(circle));
    }
);

function selectRating(circle){

    circle.style.backgroundColor = white;

}