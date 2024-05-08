const btnSubmit = document.getElementById('btnSubmit');
const ratingCard = document.querySelector('.rating-card');
const ratingCircles = document.querySelectorAll('.circle');

console.log(ratingText);

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

const defaultBackgroundColor = 'hsl(216, 12%, 54%, 0.2)';
const defaultTextColor = 'hsl(217, 12%, 63%)';

function selectRating(circle){

    // Reset color of all the circles
    
    ratingCircles.forEach(
        (element) => {
            element.style.backgroundColor = defaultBackgroundColor;
            element.style.color = defaultTextColor;
        }
    );

    circle.style.backgroundColor = clickBackgroundColor;
    circle.style.color = clickTextColor;

}