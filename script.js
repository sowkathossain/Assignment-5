// Heart Icon Functionality
const hearts = document.querySelectorAll('.heart-icon');
let heartClicked = 0;
for(const heart of hearts){
    heart.addEventListener('click', function(){
    heartClicked = heartClicked + 1;
    document.getElementById('heart-count').innerText = heartClicked;
    })
}