const btnSubmit = document.getElementById('btnSubmit');
const ratingCard = document.querySelector('.rating-card');
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

const clickBackgroundColor = 'hsl(217, 12%, 63%)';
const clickTextColor = 'hsl(0, 0%, 100%)';

function selectRating(circle){

    circle.style.backgroundColor = clickBackgroundColor;
    circle.style.color = clickTextColor;

}