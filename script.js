const flashcard = document.getElementById('flashcard');

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
}); 
flashcard.addEventListener('mouseleave', () => {
    flashcard.classList.remove('flipped');
});
   


