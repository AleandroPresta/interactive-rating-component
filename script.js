const btnSubmit = document.getElementById('btnSubmit');

const ratingCard = document.querySelector('.rating-card');
const ratingCircles = document.querySelectorAll('.circle');

const ratingText = document.getElementById('rating-text');

const ratingWrapper = document.querySelector('.rating-wrapper');
const ratedWrapper = document.querySelector('.rated-wrapper');

btnSubmit.addEventListener('click', submitClick);

function submitClick(){

    ratingWrapper.style.display = 'none';
    ratedWrapper.style.display = 'flex';

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

    const newCircleTextContent = `You selected ${circle.textContent} out of 5`
    ratingText.textContent = newCircleTextContent;

}