document.addEventListener('DOMContentLoaded', function () {
    const dropdownArrows = document.querySelectorAll('.dropdown-arrow');
    
    dropdownArrows.forEach(arrow => {
        arrow.addEventListener('click', function () {
            const description = this.nextElementSibling;
            description.style.display = description.style.display === 'block' ? 'none' : 'block';
        });
    });
});
