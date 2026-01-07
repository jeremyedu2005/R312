const helix = document.querySelector('.helix');
        let timeout;

        window.addEventListener('scroll', function () {
            helix.classList.add('rotating'); 

            clearTimeout(timeout); 

            // Si plus de scroll pendant 500ms, on arrête
            timeout = setTimeout(function () {
                helix.classList.remove('rotating');
            }, 500);
        });

