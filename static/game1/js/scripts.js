let quizNextStep = document.querySelector('.quiz-next-step');
let quizStep = document.querySelectorAll('.quiz-step');
let quizCountText = document.querySelector('.quiz-count-text');

quizNextStep.addEventListener('click', function () {
  if (quizStep[0].classList.contains('is-active')) {
    quizStep[0].classList.remove('is-active');
    quizStep[1].classList.add('is-active');
  } else if (quizStep[1].classList.contains('is-active')) {
    quizStep[1].classList.remove('is-active');
    quizStep[2].classList.add('is-active');
  } else if (quizStep[2].classList.contains('is-active')) {
    quizStep[2].classList.remove('is-active');
    quizStep[3].classList.add('is-active');
  } else if (quizStep[3].classList.contains('is-active')) {
    quizStep[3].classList.remove('is-active');
    quizStep[4].classList.add('is-active');
    quizNextStep.classList.remove('is-shown');

    var current_count = 3;
    function countDown() {
      var countVal = '';
      if (current_count >= 0) {
        countVal = current_count;
        current_count--;
      }
      quizCountText.innerHTML = countVal;
    }
    setInterval(function () {
      countDown();
    }, 1000);

    setTimeout(function () {
      quizStep[4].classList.remove('is-active');
      quizStep[5].classList.add('is-active');
    }, 4000);
  }
});

