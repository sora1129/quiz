const quiz = [
  {
    question: 'お文具さんが好きな食べ物は？',
    answers: [
      'ケーキ',
      'プリン',
      'エクレア',
      'ゼリー',
    ],
    correct: 'プリン'
  },  {
    question: 'お文具さんのアニメで、いないキャラクターは？',
    answers: [
      '猫さん',
      'プリンさん',
      '名も無きもの',
      'ヨーグルトさん',
    ],
    correct: 'ヨーグルトさん'
  },  {
    question: 'お文具さんは、何をモチーフに作られたキャラクター？',
    answers: [
      'ウーパーウーパー',
      'お餅',
      'カメレオン',
      'メタモン',
    ],
    correct: 'ウーパーウーパー'
  },  {
    question: 'お文具さんは、かつて何の危機から地球を救ったことがあるでしょうか？',
    answers: [
      '地震',
      'エイリアン',
      '隕石',
      '洪水',
    ],
    correct: '隕石'
  }, {
    question: 'アイコンでつられている時のお文具さんの気持ちとは？',
    answers: [
      '風が強いと、揺れが止まらなくなって大変なのです',
      'このままメデューサに石にされたら、変な形で手が固まってしまうなぁ',
      'はぁ...プリン食べられないや。誰か食べさせてくれないかな',
      '今、鳥さんがとおったらエサだと思われてしまわないだろうか',
    ],
    correct: 'このままメデューサに石にされたら、変な形で手が固まってしまうなぁ'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;

let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent= quiz[quizIndex].question; 
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }  
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else {
    window.alert('不正解！');
  }
  quizIndex++;

  if(quizIndex < quizLength) {
    // 問題数がまだあればこちらを実行
    setupQuiz();
  } else {
    // 問題数がなければこちらを実行
    window.alert('終了！あなたの正解数は'  + quizLength + '問中' + score + '問です！');
  }
};

// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}