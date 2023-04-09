const quiz = new Quiz(sorular);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  start_timer(10);
  start_timerLine();
  ui.soruGoster(quiz.soruGetir());
  ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex += 1;
    clearInterval(counter);
    start_timer(10);
    start_timerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
  } else {
    console.log("quiz bitti");
    clearInterval(counter_line);
    clearInterval(counter);
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.soruIndex = 0;
  quiz.dogruCevapSayisi = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counter_line);
  let cevap = option.querySelector("span b").textContent;
  let soru = quiz.soruGetir();

  if (soru.cevabiKontrolEt(cevap)) {
    quiz.dogruCevapSayisi += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }

  ui.btn_next.classList.add("show");
}

let counter;

function start_timer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    ui.time_second.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.time_text.textContent = "Süre Bitti.";
      let cevap = quiz.soruGetir().dogruCevap;
      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent == cevap) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }
        option.classList.add("disabled");
      }
      ui.btn_next.classList.add("show");
    }
  }
}

let counter_line;

function start_timerLine(time){
    let line_witdh=0 ;
    counter_line= setInterval(timer,100);
    function timer(){
        line_witdh += 5;
        ui.time_line.style.width =line_witdh +"px"
        if(line_witdh>549){
            clearInterval(counter_line);
        }

    }
}
