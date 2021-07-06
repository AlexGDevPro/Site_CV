/**
 * GESTION DE LA PREFACE
 */
(function () {
    const prefaceDiv = document.querySelector('.preface');
    // Seulement si .preface-title
    //const prefaceTitle = document.querySelector('.preface-title');
    const prefaceLogo = document.querySelector('.container-circle');
    const sectionPrefaces = document.querySelectorAll('.section-preface');
    const blurs = document.querySelectorAll('.blur');
    
    // Lorsqu'on click sur le titre de al preface, celle-ci disparaît définitivement
    /*prefaceTitle.addEventListener('click', function () {
        prefaceOff();
    });*/
    prefaceLogo.addEventListener('click', function () {
        prefaceOff();
    });

    /* A chaque fois qu'on place la souris sur le titre d'une préface de section
     on lance sectionPrefaceOff. */
    for (let i = 0; i < sectionPrefaces.length; i++) {
        let sectionPreface = sectionPrefaces[i];
        sectionPreface.addEventListener('mouseover', function () {
            sectionPrefaceOff(sectionPreface);
        });
    }

    /* A chaque fois qu'on enlève la souris de la couche blur d'une section
     on lance sectionPrefaceOn. */
    for (let i = 0; i < blurs.length; i++) {
        let blur = blurs[i];
        let sectionPreface = blur.parentNode.firstElementChild;
        blur.addEventListener('mouseleave', function () {
            sectionPrefaceOn(sectionPreface);
        });
    }
    
    /**
     * Fonction qui permet de faire disparaître la préface du site.
     */
    function prefaceOff () {
        prefaceDiv.style.opacity = "0";
        prefaceDiv.style.transition = "opacity .5s";
        window.setTimeout(() => {
                prefaceDiv.style.display = "none";
        }, 500);
    }

    /**
     * Fonction qui permet de faire disparaître la préface d'une section
     * lorsqu'on passe la souris dessus.
     */
     function sectionPrefaceOff (parentDiv) {
        parentDiv.style.opacity = "0";
        parentDiv.style.transition = "opacity .3s";
        parentDiv.style.zIndex = "-1";
    }

    /**
     * Fonction qui permet de faire apparaître la préface d'une section
     * lorsqu'on enlève la souris de la couche .blur (qui contient e contenu de la section).
     */
     function sectionPrefaceOn (sectionPreface) {
        sectionPreface.style.opacity = "1";
        sectionPreface.style.transition = "opacity .3s";
        sectionPreface.style.zIndex = "4";
    }
})();