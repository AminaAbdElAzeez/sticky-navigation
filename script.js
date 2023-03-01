const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
// https://www.javatpoint.com/javascript-offsetheight
// offsetHeight is an HTML DOM property, which is used by JavaScript
// It returns the visible height of an element in pixels that includes
//  the height of visible content, border, padding, and scrollbar if present.
// offsetHeight = height + border + padding + horizontal scrollbar

// offsetWidth = width + border + padding + vertical scrollbar    
