let theDiv      = document.getElementById('wrapper');
let clientWidth = document.getElementById('body').clientWidth;

let translateAllowed    = true;
let actualPos           = 0;
let maxTranslate        = theDiv.scrollWidth - clientWidth;
let scrollSpeed         = 60;
let xDown               = null;
let yDown               = null;

/* EVENT LISTENERS */

document.addEventListener('touchstart', handleTouchStart,   false);
document.addEventListener('touchmove',  handleTouchMove,    false);
document.addEventListener('wheel',      handleScroll,       true);
document.addEventListener('resize',     handleResize,       true);

/* MOUVEMENTS */

function goToLeft(varTrans, smooth = false) {
    if (typeof varTrans !== 'undefined')
    {
        actualPos += varTrans;
    } else {
        actualPos += document.getElementById('body').clientWidth;
    }
    if ( actualPos < 0)
    {
        actualPos = 0;
    } else if (actualPos > maxTranslate )
    {
        actualPos = maxTranslate;
    }
    if (smooth)
    {
        theDiv.style.transition = "all 0.3s ease";
    } else {
        theDiv.style.transition = "";
    }
    theDiv.style.transform  = "translateX(-" + actualPos + "px)";
}

function goToRight(varTrans, smooth = false) {
    if (typeof varTrans !== 'undefined')
    {
        actualPos += varTrans;
    } else {
        actualPos -= document.getElementById('body').clientWidth;
    }
    if ( actualPos < 0)
    {
        actualPos = 0;
    } else if (actualPos > maxTranslate )
    {
        actualPos = maxTranslate;
    }
    if (smooth)
    {
        theDiv.style.transition = "all 0.3s ease";
    } else {
        theDiv.style.transition = "";
    }
    theDiv.style.transform  = "translateX(-" + actualPos + "px)";
}

/* HANDLE SCROLL */

async function handleScroll(e) {
    e.preventDefault();
    if (!translateAllowed) {return; }
    translateAllowed = false;
    if (( actualPos >= 0 ) && (( e.deltaY > 0 ) || (e.deltaX > 0)))
    {
        if (e.deltaY > 0)
        {
            goToLeft( e.deltaY * scrollSpeed, true );
        } else {
            goToLeft( e.deltaX * scrollSpeed, true );
        }

    } else if (( actualPos >= 0 ) && (( e.deltaY < 0 ) || (e.deltaX < 0))) {
        if (e.deltaY < 0)
        {
            goToRight( e.deltaY * scrollSpeed, true );
        } else {
            goToRight( e.deltaX * scrollSpeed, true );
        }
    }
    await sleep(100);
    translateAllowed = true;
}

/* HANDLE TOUCH */

function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
}

async function handleTouchMove(e) {
    if ( ! xDown || ! yDown || !translateAllowed) {
        return;
    }
    e.preventDefault();
    let xUp = e.changedTouches[0].clientX;
    let yUp = e.changedTouches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) { /*most significant*/
        translateAllowed = false;
        if ( xDiff > 0 ) {
            /* left swipe */
            goToLeft(undefined, true);
        } else {
            /* right swipe */
            goToRight(undefined, true);
        }
    } else {
        if ( yDiff > 0 ) {
            /* up swipe */
            goToLeft(undefined, true);
        } else {
            /* down swipe */
            goToRight(undefined, true);
        }
    }
    xDown = null;
    yDown = null;
    await sleep(300);
    translateAllowed = true;
}

/* HANDLE RESIZE */

async function handleResize(e) {
    await sleep(500);
    maxTranslate = document.getElementById('wrapper').scrollWidth - document.getElementById('body').clientWidth;
    if ( actualPos < 0)
    {
        actualPos = 0;
        theDiv.style.transform = "translateX(-" + actualPos + "px)";
    } else if (actualPos > maxTranslate )
    {
        actualPos = maxTranslate;
        theDiv.style.transform = "translateX(-" + actualPos + "px)";
    }
}

/* SLEEP */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}