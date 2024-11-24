let wordList = [
    {
        Japan: "君は明日は早く仕事を始めることになっている。",
        America: "You are to start work early tomorrow.",
        check: 0
    },
    {
        Japan: "この試験では辞書を使ってはいけません。",
        America: "You are not to use a dictionary on this exam.",
        check: 0
    },
    {
        Japan: "当社の社長が明日のパーティーでスピーチをすることになっている。",
        America: "The president of our company is to deliver a speech at the party tomorrow.",
        check: 0
    },
    {
        Japan: "私の携帯は部屋のどこにも見つからなかった。",
        America: "My cellphone was not to be found anywhere in the room.",
        check: 0
    },
    {
        Japan: "ケンとトムには何か共通点があるように思える。",
        America: "Ken and Tom seem to have something in common.",
        check: 0
    },
    {
        Japan: "サオリはハルナに会ったことがないようだ。",
        America: "Saori seems not to have met Haruna.",
        check: 0
    },
    {
        Japan: "ぼくの話を聞いている？何かほかのことを考えているようだね。",
        America: "Are you with me? You seem to be thinking of something else.",
        check: 0
    },
    {
        Japan: "彼の不用意な発言は彼女の機嫌を損ねたようだった。",
        America: "His careless remarks seemed to have hurt her feelings.",
        check: 0
    },
    {
        Japan: "先生は生徒に教科書を開くように言った。",
        America: "The teacher told his students to open their textbooks.",
        check: 0
    },
    {
        Japan: "友人に仕事を手伝ってくれるように頼みなさい。",
        America: "Ask a friend to help you with your work.",
        check: 0
    },
    {
        Japan: "私はスーに11時以降は電話をしないように言った。",
        America: "I told Sue not to call after 11 o'clock.",
        check: 0
    },
    {
        Japan: "弁護士はその顧客から電話がかかってきたらメッセージを受け取るように秘書に頼んだ。",
        America: "The lawyer asked the secretary to take a message if the client called.",
        check: 0
    },
    {
        Japan: "言うまでもないことだが、彼はとても才能がある。",
        America: "Needless to say, he's very talented.",
        check: 0
    },
    {
        Japan: "彼はフランス語を話せる。もちろん英語も話せる。",
        America: "He speaks French, to say nothing of English.",
        check: 0
    },
    {
        Japan: "さらに悪いことに雨が降り始めたが、私は傘を持っていなかった。",
        America: "To make matters worse, it started raining, and I did not have an umbrella.",
        check: 0
    },
    {
        Japan: "その番組は面白かった。私を笑わせた。",
        America: "That program was funny. It really made me laugh.",
        check: 0
    },
    {
        Japan: "息子に電話をかけ直させましょうか。",
        America: "Shall I have my son call you back?",
        check: 0
    },
    {
        Japan: "彼女は娘に週に一度電話をすることを約束させた。",
        America: "She made her daughter promise to call her once a week.",
        check: 0
    },
    {
        Japan: "ジェフは歯医者に歯を診てもらった。",
        America: "Jeff had the dentist look at his teeth.",
        check: 0
    },
    {
        Japan: "どうしてあなたは彼にあんなことを言ったのですか。",
        America: "What made you say such a thing to him?",
        check: 0
    },
    {
        Japan: "私はマネージャーにその問題を処理させなければならなかった。（Aを処理する：see to A）",
        America: "I had to have my manager see to the matter.",
        check: 0
    },
    {
        Japan: "私はその男の子が信号が赤に変わる前に道路を横切るのを見た。",
        America: "I saw the boy cross the road before the traffic light turned red.",
        check: 0
    },
    {
        Japan: "私が通りを横切っていたとき、友だちが私の名前を呼ぶのを聞いた。",
        America: "When I was crossing the street, I heard my friend call my name.",
        check: 0
    },
    {
        Japan: "君は彼があわてて出かけていくのを見ましたか。",
        America: "Did you see him go out in a hurry?",
        check: 0
    },
    {
        Japan: "官僚としてジョンは市民の不平に耳を傾けることに慣れている。",
        America: "As a government official, John is used to listening to citizens' complaints.",
        check: 0
    },
    {
        Japan: "あなたからすぐに返事が来るのを楽しみにしています。",
        America: "I am looking forward to hearing from you soon.",
        check: 0
    },
    {
        Japan: "多くの人がこの本は読むに値すると言っている。",
        America: "Many people say that this book is worth reading.",
        check: 0
    },
    {
        Japan: "メアリーは日本で運転免許を取得したので、左側を走ることに慣れている。",
        America: "Mary got her driver's license in Japan, so she is used to driving on the left.",
        check: 0
    },
    {
        Japan: "ぼくたちの賢明な先生の助言は本当に耳を貸す価値がある。",
        America: "Our wise teacher's advice is really worth taking.",
        check: 0
    },
    {
        Japan: "医者は横柄だったが、私はそのような扱いに慣れていない。",
        America: "The doctor was impolite, and I was not accustomed to being treated in such a way.",
        check: 0
    },
    {
        Japan: "私は、あなたにお目にかかれるのを長い間楽しみにしていました。",
        America: "I have been looking forward to seeing you for a long time.",
        check: 0
    },
    {
        Japan: "ボランティア活動は私の生き甲斐です。（＝私の人生を生きる価値のあるものにしている）",
        America: "Volunteer activities make my life worth living.",
        check: 0
    },
    {
        Japan: "私は10年前にこの小さな村を訪れたことを覚えています。",
        America: "I remember visiting this small village ten years ago.",
        check: 0
    },
    {
        Japan: "私は何かが背中にあたったときびっくりしたことを覚えている。",
        America: "I remember being scared when something hit me on the back.",
        check: 0
    },
    {
        Japan: "ジャックはジルからのラブレターを受け取ると、すぐにそれを持って2階に走った。",
        America: "On receiving a love letter from Jill, Jack rushed upstairs with it.",
        check: 0
    },
    {
        Japan: "その男の子はドアのところにくると、騒々しくノックした。",
        America: "On arriving at the door, the boy knocked on it loudly.",
        check: 0
    },
    {
        Japan: "ぼくは彼の素晴らしい音楽を聞くと泣かずにはいられない。",
        America: "I can't help crying when I listen to his wonderful music.",
        check: 0
    },
    {
        Japan: "私は彼のおかしな冗談に笑わずにいられなかった。",
        America: "I couldn't help laughing at his funny jokes.",
        check: 0
    },
    {
        Japan: "私はその俳優のロメオのすばらしい演技に感嘆せざるを得なかった。（感嘆する：admire）",
        America: "I couldn't help admiring the actor's great performance of Romeo.",
        check: 0
    },
    {
        Japan: "嵐のために飛行機は定刻に離陸できなかった。",
        America: "The stormy weather prevented our plane from taking off on time.",
        check: 0
    },
    {
        Japan: "防犯カメラはこの通りで犯罪が起こるのを防ぐ役に立つだろう。",
        America: "The security camera will help prevent crimes from happening on this street.",
        check: 0
    },
    {
        Japan: "国果物や野菜をたくさんとることで、病気を予防できると信じられている。",
        America: "Eating lots of fruits and vegetables is believed to prevent us from getting sick.",
        check: 0
    },
    {
        Japan: "修理にどのくらい時間がかかるかは言えない。",
        America: "There is no telling how long the repairs will take.",
        check: 0
    },
    {
        Japan: "私をだまそうとしてもむだです。",
        America: "It is no use trying to deceive me.",
        check: 0
    },
    {
        Japan: "ケイトの能力がとても高いことは否定できない。",
        America: "There's no denying that Kate is very competent.",
        check: 0
    },
    {
        Japan: "このようなことを二度としないように彼に言ってもむだだ。",
        America: "It is no use telling him not to do such a thing again.",
        check: 0
    },
    {
        Japan: "私はいつも針の穴に糸を通すのに苦労する。（糸を通す：thread）",
        America: "I always have difficulty threading the eye of a needle.",
        check: 0
    },
    {
        Japan: "ジルは退屈だったので、あくびを抑える（suppress）のに苦労した。",
        America: "Jill had difficulty suppressing a yawn because she was bored.",
        check: 0
    }
]
const storage = localStorage;
let shuffledArray = [...wordList];
let quizList = []
let QuestionList = []
let missList = []

function showAlert() {
    let x = 0;
    for (let i = 0; i < wordList.length; i++) {
        if (japanese.value === wordList[i].Japan && english.value === wordList[i].America) {
            alert('既に入力されている構文カードです。');
            document.getElementById('japanese').value = '';
            document.getElementById('english').value = '';
            return x = 1;
        }
    }
    if (x == 0) {
        wordList.push({
            Japan: japanese.value,
            America: english.value,
            check: 0
        })
    }
    shuffledArray = [...wordList];
    document.getElementById('japanese').value = '';
    document.getElementById('english').value = '';
    if (check_quiz === 1) {
        alert('内容が変更されたため、構文練習帳を終了します。');
        resetQuiz();
    }
    showList(shuffledArray);
    practiceNote()
    storage.store = JSON.stringify(wordList);
}
addEventListener('load', function () {
    showList(shuffledArray);
});

if (storage.store === undefined) {
} else {
    wordList = JSON.parse(storage.store);
    shuffledArray = [...wordList];
    showList(shuffledArray);
    practiceNote()
}


// function searchWord() {
//     const Search = document.getElementById('search');
//     const KeyWord = document.getElementById('key-word').value;
//     const Message_button = document.createElement('button');
//     document.getElementById('message_btn').appendChild(Message_button);
//     Message_button.style.display = 'none';
//     const Message = document.getElementById('message');

//     Search.style.display = 'none';
//     let is_found = false;
//     Message_button.textContent = '終了する'
//     Message_button.style.display = 'block';
//     for (const key of wordList) {
//         if (key.Japan === KeyWord || key.America === KeyWord) {
//             const KeyCard_1 = document.createElement('button');
//             KeyCard_1.setAttribute('id', 'card');
//             document.getElementById('key-card.ja').appendChild(KeyCard_1);
//             const KeyCard_2 = document.createElement('button');
//             KeyCard_2.setAttribute('id', 'card');
//             document.getElementById('key-card.eg').appendChild(KeyCard_2);

//             is_found = true;
//             KeyCard_1.textContent = key.Japan;
//             KeyCard_2.textContent = key.America;
//             KeyCard_1.style.display = 'block';
//             KeyCard_2.style.display = 'block';
//             KeyCard_1.addEventListener('contextmenu', function () {
//                 change(key.Japan, key.America);
//                 resetSearch();
//             });
//             KeyCard_2.addEventListener('contextmenu', function () {
//                 change(key.Japan, key.America);
//                 resetSearch();
//             });
//         }
//     }
//     if (!is_found) {
//         Message.style.display = 'block';
//         Message.textContent = `"${KeyWord}"は構文帳に存在しません。`
//     }

//     Message_button.addEventListener('click', function () {
//         resetSearch();
//     });

//     document.getElementById('key-word').value = '';


//     function resetSearch() {
//         // KeyCard_1.style.display = 'none';
//         // KeyCard_2.style.display = 'none';
//         document.getElementById('key-card.ja').innerHTML = "";
//         document.getElementById('key-card.eg').innerHTML = "";
//         Search.style.display = 'block';
//         Message.style.display = 'none';
//         Message_button.style.display = 'none';
//     }
// }



const quizContainer = document.getElementById('quiz-container');
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer-input');
const replyElement = document.getElementById('reply');
const endElement = document.getElementById('end');
let currentQuestionIndex = 0;

const First = document.getElementsByClassName('first-class');
const Second = document.getElementsByClassName('second-class');

const finishButton = document.createElement('button');
document.getElementById('finish-btn').appendChild(finishButton);
finishButton.textContent = '終了する';
finishButton.style.display = 'none';
let check_quiz = 0;

const endButton = document.createElement('button');
document.getElementById('end-btn').appendChild(endButton);
endButton.textContent = 'やめる';
endButton.style.display = 'none';
endButton.addEventListener('click', function () {
    endElement.textContent = `${count}問中${right}問正解!お疲れ様でした♪( ´▽｀)`;
    count = 0;
    right = 0;
    finishButton.style.display = 'block';
    endButton.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
})


const shuffleButton = document.createElement('button');
document.getElementById('shuffle-btn').appendChild(shuffleButton);
shuffleButton.textContent = 'シャッフルする';
shuffleButton.addEventListener('click', function () {
    shuffledArray = shuffleArray(wordList);
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、構文練習帳を終了します。');
        resetQuiz();
    }
});

//シャッフルする
function shuffleArray(array) {
    const cloneArray = [...array];
    array.forEach((_, idx) => {
        const randomNum = Math.floor(Math.random() * (idx + 1));
        [cloneArray[idx], cloneArray[randomNum]] = [cloneArray[randomNum], cloneArray[idx]];
    });
    return cloneArray;
}


//リセットする
const resetButton = document.createElement('button');
document.getElementById('reset-btn').appendChild(resetButton);
resetButton.textContent = 'リセットする';
resetButton.addEventListener('click', function () {
    shuffledArray = [...wordList];
    showList(shuffledArray);
    if (check_quiz === 1) {
        alert('内容が変更されたため、構文練習帳を終了します。');
        resetQuiz();
    }
});

//全てのカードを有効にする
const whiteButton = document.createElement('button');
document.getElementById('white-btn').appendChild(whiteButton);
whiteButton.textContent = '全てのカードを有効にする';
whiteButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 0;
    }
    storage.store = JSON.stringify(wordList);
    changeCardleroad(wordList);
});

//全てのカードを無効にする
const blockButton = document.createElement('button');
document.getElementById('block-btn').appendChild(blockButton);
blockButton.textContent = '全てのカードを無効にする';
blockButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 1;
    }
    storage.store = JSON.stringify(wordList);
    changeCardleroad(wordList);
});


//答え合わせがEnterで反応するようにする
// answerInput.addEventListener('keydown', text_event);
// function text_event(e) {
//     if (e.key === 'Enter') {
//         Check();
//     }
// }

function showNextQuestion() {
    replyElement.textContent = '';
    currentQuestionIndex++;
    if (currentQuestionIndex < QuestionList.length) {
        showQuestion();
    } else {
        endElement.textContent = `クイズ終了!${count}問中${right}問正解!お疲れ様でした♪( ´▽｀)`;
        count = 0;
        right = 0;
        submitButton.style.display = 'none';
        nextButton.style.display = 'none';
        startButton.style.display = 'none';
        finishButton.style.display = 'block';
        endButton.style.display = 'none';
        check_quiz = 0;
        shuffledArray = [...wordList];
    }
}


finishButton.addEventListener('click', function () {
    resetQuiz();
});

function resetQuiz() {
    currentQuestionIndex = 0;
    questionElement.textContent = '';
    endElement.textContent = '';
    quizContainer.style.display = 'none';
    startButton.style.display = 'block';
    nextButton.style.display = 'none';
    finishButton.style.display = 'none';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
    replyElement.style.display = 'none';
    endButton.style.display = 'none';
    miss = 0;
    check_quiz = 0;
    shuffledArray = [...wordList];
    quizList = [];
    QuestionList = [];
    // console.log(missList);
    practiceNote()
    showList(shuffledArray);
}

const submitButton = document.createElement('button');
document.getElementById('submit-btn').appendChild(submitButton);
submitButton.textContent = '答え合わせ';
submitButton.style.display = 'none';

submitButton.addEventListener('click', Check);

let count = 0;
let right = 0;
let miss = 0;
function Check() {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const correctAnswer = QuestionList[currentQuestionIndex].America.toLowerCase();
    replyElement.style.display = 'block';

    if (userAnswer === correctAnswer) {
        replyElement.textContent = '正解!';
        submitButton.style.display = 'none';
        nextButton.style.display = 'block';
        if (miss == 0) {
            count += 1;
            right += 1;
        } else {
            miss = 0;
        }
    } else {
        replyElement.textContent = `不正解。正解は「${QuestionList[currentQuestionIndex].America}」です。`;
        nextButton.style.display = 'block';
        if (miss == 0) {
            missList.push({
                Japan: QuestionList[currentQuestionIndex].Japan,
                America: QuestionList[currentQuestionIndex].America
            })
            miss = 1;
            count += 1;
        }
    }
};

const nextButton = document.createElement('button');
nextButton.textContent = '次の問題';
nextButton.style.display = 'none';
nextButton.addEventListener('click', function () {
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    miss = 0;
    showNextQuestion();
});
document.getElementById('next').appendChild(nextButton);

function showQuestion() {
    const currentQuestion = QuestionList[currentQuestionIndex];
    questionElement.textContent = (`問題：${currentQuestion.Japan}`);
    answerInput.value = '';
}


const startButton = document.createElement('button');
startButton.textContent = 'スタート';
answerInput.style.display = 'none';
startButton.addEventListener('click', function () {
    missList = [];
    for (let i = 0; i < shuffledArray.length; i++) {
        if (shuffledArray[i].check === 0) {
            let Question = { Japan: shuffledArray[i].Japan, America: shuffledArray[i].America }
            QuestionList.push(Question);
        }
    }
    if (QuestionList.length > 0) {
        for (let i = 0; i < shuffledArray.length; i++) {
            let newItem = { Japan: shuffledArray[i].Japan, America: '×', check: shuffledArray[i].check };
            quizList.push(newItem);
        }
        showList(quizList);
        startButton.style.display = 'none';
        quizContainer.style.display = 'block';
        nextButton.style.display = 'none';
        submitButton.style.display = 'block';
        answerInput.style.display = 'block';
        endButton.style.display = 'block';
        check_quiz = 1;


        showQuestion();
    } else {
        startButton.style.display = 'none';
        questionElement.textContent = '構文帳入力から構文カードを作成してください。'
        finishButton.style.display = 'block';
    }
});

document.getElementById('start').appendChild(startButton);




function showList(List) {
    let memo1_element = document.getElementById('memo_1');//memoを呼び出している
    let memo2_element = document.getElementById('memo_2')

    memo1_element.innerHTML = '';//memoのコードの中身そのものをまっさらにする
    memo2_element.innerHTML = '';

    for (const item of List) {
        let ja_element = document.createElement('p');//p要素作る
        // ja_element.id = assignUniqueID(item.Japan);
        ja_element.classList.add('word_card');
        // ja_element.innerText = item.Japan
        // let cleanJapan = ja_element.id.replace(/\s+/g, '_');

        let cleanBase = (assignUniqueID(`${item.America}`).replace(/\s+/g, '_'));
        let cleanJapan = (`${cleanBase}-Japan`)
        let cleanAmerica = (`${cleanBase}-America`);
        ja_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn-${cleanJapan} class="btn">${item.Japan}</button>`;
        // ja_element.innerHTML = `<button contextmenu="change('${item.Japan}', '${item.America}')" id=btn>${item.Japan}</button>`
        memo1_element.prepend(ja_element);//memoにnew_elementを追加

        let eg_element = document.createElement('p');//p要素作る
        eg_element.id = assignUniqueID(item.America);
        eg_element.classList.add('word_card')
        // eg_element.innerText = item.America

        // let cleanAmerica = eg_element.id.replace(/\s+/g, '_');

        eg_element.innerHTML = `<button onclick="remove('${item.Japan}', '${item.America}')" id=btn-${cleanAmerica} class="btn">${item.America}</button>`;
        // eg_element.innerHTML = `<button contextmenu="change('${item.Japan}', '${item.America}')" id=btn>${item.America}</button>`
        memo2_element.prepend(eg_element);//memoにnew_elementを追加

    }


    changeCardleroad(List);
}

addEventListener('contextmenu', function (event) {
    event.preventDefault();
    let str = event.target.id;
    let Japan_id = 0;
    let America_id = 0;
    if (str.endsWith('-Japan')) {
        Japan_id = str;
        America_id = str.slice(0, -6) + '-America'; // '-Japan'の6文字を削除して'-America'に
    } else if (str.endsWith('-America')) {
        America_id = str;
        Japan_id = str.slice(0, -8) + '-Japan'; // '-America'の8文字を削除して'-Japan'に
    } else { }

    const Japan_text = document.getElementById(Japan_id).textContent;
    const America_text = document.getElementById(America_id).textContent;
    change(Japan_id, America_id, Japan_text, America_text)
})


function assignUniqueID(baseID) {
    let newID = baseID + '-1';
    let counter = 1;

    // IDが重複している場合、末尾に数字を付けていく
    while (document.getElementById(newID)) {
        //while文　条件が真である限り、コードを繰り返し実行する。
        //今回はgetElementByIdが要素を返すとき、真であるとされる。
        newID = baseID + '-' + counter;
        counter++;
    }

    return newID;
}


function change(Japanese_id, English_id, Japanese_text, English_text) {
    for (let i = 0; i < wordList.length; i++) {
        if (wordList[i].Japan === Japanese_text && wordList[i].America === English_text) {
            const jaButton = document.getElementById(Japanese_id);
            const enButton = document.getElementById(English_id);
            if (wordList[i].check === 0) {
                wordList[i].check = 1;
                if (jaButton && enButton) {
                    jaButton.style.border = '8px double #003342'; // ボタンの border を変更
                    jaButton.style.backgroundColor = '#88898a';
                    enButton.style.border = '8px double #003342';
                    enButton.style.backgroundColor = '#88898a';
                }
            } else {
                wordList[i].check = 0;
                if (jaButton && enButton) {
                    jaButton.style.border = '8px double #0090bb'; // ボタンの border を変更
                    jaButton.style.backgroundColor = '';
                    enButton.style.border = '8px double #0090bb';
                    enButton.style.backgroundColor = '';
                }
            }
            // 変更された後にローカルストレージを更新
            storage.store = JSON.stringify(wordList);
            break;
        }
    }
}


function changeCardleroad(list) {
    const existingIDs = new Set();
    function assignUniqueID_roadver(baseID) {
        let counter = 1;
        let newID = `${baseID}-${counter}`;
        // IDがすでに存在する場合、末尾にカウンターを増やしていく
        while (existingIDs.has(newID)) {
            counter++;
            newID = `${baseID}-${counter}`;
        }
        existingIDs.add(newID);
        return newID;
    }
    for (let i = 0; i < list.length; i++) {
        const clean = assignUniqueID_roadver(list[i].America.replace(/\s+/g, '_'));
        const jaButton = document.getElementById(`btn-${clean}-Japan`);
        const enButton = document.getElementById(`btn-${clean}-America`);
        if (list[i].check === 1) {
            if (jaButton && enButton) {
                jaButton.style.border = '8px double #003342'; // ボタンの border を変更
                jaButton.style.backgroundColor = '#88898a';
                enButton.style.border = '8px double #003342';
                enButton.style.backgroundColor = '#88898a';
            }
        } else {
            if (jaButton && enButton) {
                jaButton.style.border = '8px double #0090bb'; // ボタンの border を変更
                jaButton.style.backgroundColor = '';
                enButton.style.border = '8px double #0090bb';
                enButton.style.backgroundColor = '';
            }
        }
    }
}




//remove関数に日本語と英語どちらも入れて、どちらもの値が一致するリストの配列があれば、そのindexを取得し、listから削除する。
// function remove(Japanese, English) {
//     const question = confirm('このカードを削除しますか?');
//     if (question == true) {
//         const word = { Japan: Japanese, America: English };
//         const index = wordList.findIndex(item => item.Japan === word.Japan && item.America === word.America);

//         if (index >= 0) {
//             wordList.splice(index, 1);
//         }

//         shuffledArray = [...wordList];

//         if (check_quiz === 1) {
//             alert('内容が変更されたため、構文練習帳を終了します。');
//             resetQuiz();
//         }

//         storage.store === undefined
//         storage.store = JSON.stringify(wordList);

//         showList(shuffledArray);
//         // practiceNote()
//     }
//     else {
//     }
// }

function practiceNote() {
    const Text = document.getElementById('text');
    Text.textContent = '練習ノートには構文練習帳で間違えた問題が表示されます。'
    Text.style.display = 'none';
    if (missList.length == 0) {
        Text.style.display = 'block';
    } else {
        Text.style.display = 'none';
        const container = document.getElementById('container');
        const template = document.getElementById('flame-template').content;

        container.innerHTML = '';

        // div要素を生成してコンテナに追加する関数
        function createDiv(index) {
            // テンプレートを複製
            const clone = document.importNode(template, true);

            // 複製した要素にインデックスを設定
            const div = clone.querySelector('.flame');
            div.id = `flame-card-${index}`;

            const prcWord = clone.querySelector('.prc_word');
            prcWord.id = `practice-word-${index}`;
            prcWord.innerHTML = `${missList[index].Japan}:${missList[index].America}`;

            const inputWord = clone.querySelector('.image');
            inputWord.id = `word-${index}`;
            inputWord.placeholder = missList[index].America;

            const searchBtn = clone.querySelector('.check');
            searchBtn.dataset.index = index;
            searchBtn.id = `search-btn-${index}`;

            const form = clone.querySelector('form');
            form.onsubmit = function (event) {
                showCard(event, index);
            };

            // コンテナに追加
            container.appendChild(clone);

            function showCard(event, index) {
                event.preventDefault();
                if (inputWord.value === missList[index].America) {
                    inputWord.value = '';
                } else { }
            }
        }


        for (let i = 0; i < missList.length; i++) {
            createDiv(i)
        }
    }
}