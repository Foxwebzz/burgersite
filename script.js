const toggle = document.querySelector('.toggle')
const ulList = document.querySelector('.ul-list')

toggle.addEventListener('click', function() {
    ulList.classList.toggle('active')
})