document.addEventListener('DOMContentLoaded', function () {
    const pages = document.querySelectorAll('.pagination .page');
    const prev = document.querySelector('.pagination .prev');
    const next = document.querySelector('.pagination .next');

    pages.forEach(page => {
        page.addEventListener('click', function (event) {
            event.preventDefault();
            setActivePage(this);
        });
    });

    prev.addEventListener('click', function (event) {
        event.preventDefault();
        const currentPage = document.querySelector('.pagination .page.active');
        const prevPage = currentPage.previousElementSibling;
        if (prevPage && prevPage.classList.contains('page')) {
            setActivePage(prevPage);
        }
    });

    next.addEventListener('click', function (event) {
        event.preventDefault();
        const currentPage = document.querySelector('.pagination .page.active');
        const nextPage = currentPage.nextElementSibling;
        if (nextPage && nextPage.classList.contains('page')) {
            setActivePage(nextPage);
        }
    });

    function setActivePage(page) {
        pages.forEach(p => p.classList.remove('active'));
        page.classList.add('active');
    }
});
