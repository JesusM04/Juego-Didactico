setTimeout(() => {
    document.querySelector('.welcome-animation').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';
    window.location.href = "quiz.html";
}, 8000);