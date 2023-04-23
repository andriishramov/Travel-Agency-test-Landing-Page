function showMap(button) {
    let iframe = button.nextElementSibling;

    // toggle the display of the iframe
    iframe.style.display = iframe.style.display === 'none' ? 'block' : 'none';
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    document.addEventListener('click', function(e) {
        if (!iframe.contains(e.target) && e.target !== button) {
            iframe.style.display = 'none';
            overlay.style.display = 'none';
        }
        else overlay.style.display = 'block';
    });
}
function getOffer(button) {
    let form = document.querySelector('form');

    // toggle the display of the iframe
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    let overlay = document.querySelector('.overlay');
    overlay.style.display = 'block';
    document.addEventListener('click', function(e) {
            if (!form.contains(e.target) && e.target !== button) {
                form.style.display = 'none';
                overlay.style.display = 'none';
            }
            else {
                overlay.style.display = 'block';
                form.style.display = 'block';
            }
    });
}
/*The expression iframe.style.display === 'none' ? 'block' : 'none' is called a ternary operator. It is a shorthand way of writing an if-else statement. It evaluates the condition iframe.style.display === 'none', which checks whether the CSS display property of the iframe is set to 'none'. If the condition is true, it returns the value 'block', indicating that the iframe should be displayed. If the condition is false, it returns the value 'none', indicating that the iframe should be hidden.*/




const reviewsContainer = document.querySelector('.reviews-container');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const getStars = (rating) => {
            const starPercentage = (rating / 5) * 100;
            const starRounded = `${Math.round(starPercentage / 10) * 10}%`;
            let stars = '<div class="stars-outer">';
            for (let i = 0; i < 5; i++) {
                stars += '<i class="fa fa-star"></i>';
            }
            stars += '<div class="stars-inner" style="width:' + starRounded + '">';
            for (let i = 0; i < Math.floor(rating); i++) {
                stars += '<i class="fa fa-star"></i>';
            }
            if (rating % 1 !== 0) {
                stars += '<i class="fa fa-star-half"></i>';
            }
            stars += '</div></div>';
            return stars;
        }

        let reviews = "";

        for (let i = 0; i < data.length; i++) {
            const rating = data[i].rating;
            const name = data[i].author;
            const description = data[i].text;
            const date = data[i].date;
            const stars = getStars(rating);

            reviews += `
        <div class="reviews">
          <div class="stars">${stars}</div>
          <div class="rating"> ${rating} / 5</div>
          <div class="author">${name}</div>
          <div class="description">"${description}"</div>
          <div class="date">${date}</div>
        </div>
      `;
        }

        reviewsContainer.innerHTML = reviews;
    });


