// select the form
const form = document.getElementById('review');

// get name and review
const name = form.elements[0];
const review = form.elements[1];


form.addEventListener('submit', (event) => {
        document.getElementById('name').innerHTML=document.getElementById('name_area').value;
	    document.getElementById('reviewed').innerHTML=document.getElementById('review_area').value;
});