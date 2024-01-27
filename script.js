const slidebar = document.querySelector('.slidebar');
const toggleBtn = document.querySelector('.togggle-btn');

toggleBtn.addEventListener('click',() => {
    slidebar.classList.toggle('active');
});