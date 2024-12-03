document.addEventListener('DOMContentLoaded', (e) => {
    console.log('HTML parsed and DOM tree built', e);
});

window.addEventListener('load', (e) => {
    console.log('Page fully loaded', e);
});

// window.addEventListener('beforeunload', (e) => {
//     e.preventDefault();
//     console.log(e);
//     e.returnValue = '';
// });
