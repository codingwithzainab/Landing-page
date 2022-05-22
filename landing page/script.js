console.log('hello world')

// Get DOM elements
const menuToggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const model = document.getElementById('model');

// Event Listeners
// 1. Listen for click on toggle button
menuToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

// 2. Listen for click on open button
open.addEventListener('click', () => model.classList.add('show-model') );

// 3. Listen for click on close button
close.addEventListener('click', () => model.classList.remove('show-model') );

// 4. Listen for click outside of modal
window.addEventListener('click', e => 
    e.target === model ? model.classList.remove('show-model') : false
)