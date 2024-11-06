<script>
    document.querySelectorAll('.dropdown-arrow').forEach(button => {
        button.addEventListener('click', function () {
            this.closest('.product-row').classList.toggle('active');
        });
    });
</script>
