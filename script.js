let wordList = [
    { Japan: "私の誕生日に花を送ってくれるなんてあなたはとても親切です。", America: "It is nice of you to send me some flowers on my birthday.", check: 0 },
    { Japan: "私たちがテストのために一生懸命勉強するのは当然だ。", America: "It is natural for us to study hard for a test.", check: 0 },
    { Japan: "月曜に彼と会うことはできますか。", America: "Is it possible for me to see him on Monday?", check: 0 },
    { Japan: "兄は新しいセーターを買うのに4千円かかった。", America: "It cost my big brother 4,000 yen to buy a new sweater.", check: 0 },
    { Japan: "アメリカはとても大きな国なので横断するのに長い時間がかかる。", America: "America is so large a country that it takes a long time to cross it.", check: 0 },
    { Japan: "その人気アイドルグループが解散するのは確かだ。", America: "It is certain that the popular idol group will break up.", check: 0 },
    { Japan: "彼は優れたアスリートだったようだ。", America: "It seems that he was a great athlete.", check: 0 },
    { Japan: "かなり多くの人々が, その若い歌手に親しみを感じているらしい。", America: "It seems that quite a few people feel close to the young singer.", check: 0 },
    { Japan: "その歌手はカナダで人気があると言われている。", America: "It is said that the singer is popular in Canada.", check: 0 },
    { Japan: "彼がパーティーに来るかどうかは問題ではない。", America: "It doesn't matter whether or not he comes to the party.", check: 0 },
    { Japan: "ゾウが人間よりも速く走れると知って驚くかもしれない。", America: "You may find it surprising to learn that elephants can run faster than people.", check: 0 },
    { Japan: "このようなことは二度と起こらないことをはっきり言っておきたいと思います。", America: "I would like to make it clear that this will never happen again.", check: 0 },
    { Japan: "ニックが大学院に進学することを希望するのも当然であると思う。", America: "We take it for granted that Nick hopes to go on to graduate school.", check: 0 },
    { Japan: "ベッドの横にあった花瓶を割ったのはジョンだ。", America: "It was John who broke the flower vase by the bed.", check: 0 },
    { Japan: "アランが君に要求したものは何だったのか。", America: "What was it that Allan asked you to do?", check: 0 },
    { Japan: "私たちは新しいオフィスビルをどこに立てたらいいか話し合ってきた。", America: "We have been discussing where to build our new office building.", check: 0 },
    { Japan: "私は科学の学位を取得するために大学に通うつもりだ。", America: "I am planning to go to college in order to get a degree in science.", check: 0 },
    { Japan: "コーチは私たちがついていけないほど速く歩いた。", America: "Our coach walked too fast for us to keep up with him.", check: 0 },
    { Japan: "昨夜はあまりに疲れていてレポートが書けなかった。", America: "I was too tired to write the report last night.", check: 0 },
    { Japan: "君は今では自活できるだけの年齢だ。", America: "You are old enough to earn a living now.", check: 0 },
    { Japan: "当社の社長が明日のパーティーでスピーチをすることになっている。", America: "The president of our company is to deliver a speech at the party tomorrow.", check: 0 },
    { Japan: "私の携帯は部屋のどこにも見つからなかった。", America: "My cellphone was not to be found anywhere in the room.", check: 0 },
    { Japan: "サオリはハルナに会ったことがないようだ。", America: "Saori seems not to have met Haruna.", check: 0 },
    { Japan: "友人に仕事を手伝ってくれるように頼みなさい。", America: "Ask a friend to help you with your work.", check: 0 },
    { Japan: "私はスーに11時以降は電話をしないように言った。", America: "I told Sue not to call after 11 o'clock.", check: 0 },
    { Japan: "言うまでもないことだが、彼はとても才能がある。", America: "Needless to say, he's very talented.", check: 0 },
    { Japan: "彼はフランス語を話せる。もちろん英語も話せる。", America: "He speaks French, to say nothing of English.", check: 0 },
    { Japan: "さらに悪いことに雨が降り始めたが、私は傘を持っていなかった。", America: "To make matters things worse, it started raining, and I did not have an umbrella.", check: 0 },
    { Japan: "息子に電話をかけ直させましょうか。", America: "Shall I have my son call you back?", check: 0 },
    { Japan: "私が通りを横切っていたとき、友だちが私の名前を呼ぶのを聞いた。", America: "When I was crossing the street, I heard my friend call my name.", check: 0 },
    { Japan: "官僚としてジョンは市民の不平に耳を傾けることに慣れている。", America: "As a government official, John is used to listening to citizens' complaints.", check: 0 },
    { Japan: "あなたからすぐに返事が来るのを楽しみにしています。", America: "I am looking forward to hearing from you soon.", check: 0 },
    { Japan: "多くの人がこの本は読むに値すると言っている。", America: "Many people say that this book is worth reading.", check: 0 },
    { Japan: "私は10年前にこの小さな村を訪れたことを覚えています。", America: "I remember visiting this small village ten years ago.", check: 0 },
    { Japan: "私は何かが背中にあたったときびっくりしたことを覚えている。", America: "I remember being scared when something hit me on the back.", check: 0 },
    { Japan: "私はその俳優のロメオのすばらしい演技に感嘆せざるを得なかった。", America: "I couldn't help admiring the actor's great performance of Romeo.", check: 0 },
    { Japan: "防犯カメラはこの通りで犯罪が起こるのを防ぐ役に立つだろう。", America: "The security camera will help prevent crimes from happening on this street.", check: 0 },
    { Japan: "修理にどのくらい時間がかかるかは言えない。", America: "There is no telling how long the repairs will take.", check: 0 },
    { Japan: "私をだまそうとしてもむだです。", America: "It is no use trying to deceive me.", check: 0 },
    { Japan: "私はいつも針の穴に糸を通すのに苦労する。", America: "I always have difficulty threading the eye of a needle.", check: 0 },
    { Japan: "レスキュー隊がその火災で最も被害を受けた地域に派遣された。", America: "The rescue team was sent to the most damaged area of the fire.", check: 0 },
    { Japan: "フランクは妹が夜遅くに宿題をしているところを見かけた。", America: "Frank saw his sister doing her homework late at night.", check: 0 },
    { Japan: "彼は先週床屋で髪を切ってもらった。", America: "He had his hair cut at the barber's last week.", check: 0 },
    { Japan: "日本の法律では運転中はシートベルトを着用することになっています。", America: "It is the law in Japan that you have to have your seatbelt fastened while you drive.", check: 0 },
    { Japan: "去年の夏空港でパスポートを盗まれた。", America: "I had my passport stolen at the airport last summer.", check: 0 },
    { Japan: "以前そこには一度も行ったことがなかったので、すぐ道に迷った。", America: "Not having been there before, I got lost easily.", check: 0 },
    { Japan: "彼の父親と比べると彼はそれほど保守的ではない。", America: "Compared with his father he is not as conservative.", check: 0 },
    { Japan: "空模様からすると、すぐに雨になりそうである。", America: "Judging from the sky, it is likely to rain soon.", check: 0 },
    { Japan: "すべてを考慮に入れれば、会議は延期するのがよいでしょう。", America: "All things considered, it would be better to postpone the meeting.", check: 0 },
    { Japan: "彗星は尻尾を輝かせながら空を横切る。", America: "A comet travels across the sky with its tail gleaming.", check: 0 },
    { Japan: "彼女は政治情勢が不安定である国の出身だ。", America: "She comes from a country whose political situation is unstable.", check: 0 },
    { Japan: "ときどき実に簡単に見えることが難しいとわかることがある。", America: "What looks quite simple sometimes turns out to be difficult.", check: 0 },
    { Japan: "タカシはたくさんの英語の言葉を知っている。彼はいわゆる生き字引だ。", America: "Takashi knows so many words in English. He's what we call a walking dictionary.", check: 0 },
    { Japan: "とても寒かった、さらに悪いことに雪が降り始めた。", America: "It was bitterly cold, and what was worse, it began to snow.", check: 0 },
    { Japan: "品格とは自分自身に誇りを感じさせるもののことである。", America: "Your dignity is what makes you feel proud of yourself.", check: 0 },
    { Japan: "私は研究成果について話し合える友がいてうれしい。", America: "I am glad to have a friend with whom I can discuss my results.", check: 0 },
    { Japan: "ブラウン博士はあなたがお話しになりたい方ですか。", America: "Is Dr.Brown the person to whom you wish to speak?", check: 0 },
    { Japan: "彼女は数人の政治家も出席する夕食会に参加するつもりだ。", America: "She's going to attend a dinner where some politicians will also be present.", check: 0 },
    { Japan: "私たちは皆ペンが剣よりも強いという多くの事例があることを知っておくべきだ。", America: "We should all know that there are many cases where the pen is mightier than the sword.", check: 0 },
    { Japan: "私は君がそれをした理由が知りたい。", America: "I want to know the reason why you did it.", check: 0 },
    { Japan: "そのしゃれたレストランはたくさんの客で満員だったが、そのほとんどが女性客だった。", America: "The fancy restaurant was full of diners, who were mostly women.", check: 0 },
    { Japan: "あなたに恩恵をもたらしてくれるような友人を選びなさい。", America: "Choose such friends as will benefit you.", check: 0 },
    { Japan: "今日の写真を共有する方法は、10年前にしていたやり方と同じではない。", America: "The way we share photos today is not the same as it was ten years ago.", check: 0 },
    { Japan: "どの方角をご覧いただいてもすばらしい景色が見られます。", America: "Whichever way you look, the view is wonderful.", check: 0 },
    { Japan: "音楽に興味のある者なら誰もが彼の名を知っているだろう。", America: "Whoever is interested in music would know his name.", check: 0 },
    { Japan: "人は年をとるにつれて賢くなるとはかぎらない。", America: "We do not necessarily grow wiser as we grow older.", check: 0 },
    { Japan: "彼の提案は満足のいくものではない。", America: "His proposal is far from satisfactory.", check: 0 },
    { Japan: "彼女は、海外に行くと必ずおみやげを買ってきてくれる。", America: "She never goes abroad without buying me a gift.", check: 0 },
    { Japan: "この歌を聞くと必ず中学生だったころのことを思い出す。", America: "I cannot listen to this song without recalling my junior high school days.", check: 0 },
    { Japan: "スズキさんは決して約束を破るような人ではない。", America: "Mr. Suzuki is the last person who would break a promise.", check: 0 },
    { Japan: "ギャンプルにお金を使うくらいなら捨てるほうがました。", America: "You may as well throw away your money as spend it on gambling.", check: 0 },
    { Japan: "おじは山に登るよりもどこかの浜辺で日光浴をするほうがいいと思っている。", America: "My uncle would rather lie in the sun on some beach than climb a mountain.", check: 0 },
    { Japan: "今日の子どもたちは以前ほど自主性がない。", America: "Children today are less independent than they used to be.", check: 0 },
    { Japan: "君はここに残って彼がどうなるのか見ているだけでいい。", America: "You have only to stay here to see what will happen to him.", check: 0 },
    { Japan: "私たちは緊急時に備えておくことが必要だ。", America: "It is necessary that we be prepared for an emergency.", check: 0 },
    { Japan: "メアリーは彼に貸したノートを返すように要求した 。", America: "Mary demanded that he return the notebook she lent him.", check: 0 },
    { Japan: "彼女が会議に出なかった？私が彼女に念を押すのを忘れたに違いない。", America: "She missed the meeting? I must have forgotten to remind her.", check: 0 },
    { Japan: "あなたは夕食に遅れると私たちに教えておくべきだった。", America: "You should have told us you were coming late to dinner.", check: 0 },
    { Japan: "私たちは家で子どもたちと一緒にピザを作ることができたかもしれなかったが、外食することにした。", America: "We could have made pizzas with the children at home, but we decided to eat out instead.", check: 0 },
    { Japan: "アダムが昨日の夕方図書館でパットと会ったはずがない。彼女はその時間私の妹と買い物をしていたから 。", America: "Adam cannot have met Pat at the library yesterday evening. She was shopping with my sister at that time.", check: 0 },
    { Japan: "すべてのお客様が座れるかぎりどんなテーブルでもかまいません。", America: "Any table will do as long as it will seat all the guests.", check: 0 },
    { Japan: "漁業許可証を所持していなければここで魚を釣ることは許されていません。", America: "You are not allowed to fish here unless you have a fishing license.", check: 0 },
    { Japan: "適度な量の水を与えなければ植物は枯れてしまいます。", America: "Plants will die unless you give them the right amount of water.", check: 0 },
    { Japan: "あなたの研究についてもっと詳しくわかればあなたを助けておけられるのに。", America: "I could help you if I knew more about your research.", check: 0 },
    { Japan: "私があなただったら念のために傘を持っていくけれど。", America: "If I were you, I'd take an umbrella just in case.", check: 0 },
    { Japan: "彼が一生懸命に勉強していなかったら、彼はずっと貧乏だっただろう。", America: "If he had not worked so hard, he would have been much poorer.", check: 0 },
    { Japan: "もしも会議の後で何か質問があったら、遠慮なく私にメールを出してください。", America: "If you should have any questions after the meeting, don't hesitate to e-mail me.", check: 0 },
    { Japan: "もしも南極大陸のすべての氷が解けたらどうなってしまうのだろう。", America: "What would happen if all the Antarctic ice were to melt?", check: 0 },
    { Japan: "空気がなければすべての動物は死ぬだろう。", America: "If it were not for air, all animals would die.", check: 0 },
    { Japan: "あなたの助言がなかったなら、この問題を解くことはできなかったでしょう。", America: "If it had not been for your advice, I couldn't have solved this problem.", check: 0 },
    { Japan: "君のような新しいスマートフォンがあればなあ。", America: "I wish I had a new smartphone like yours.", check: 0 },
    { Japan: "もっと勉強しておけばよかったなあ。", America: "I wish I had studied harder.", check: 0 },
    { Japan: "パーティーに行く前に宿題を終わらせていたらなあ。", America: "I wish I had finished my homework before going to the party.", check: 0 },
    { Japan: "君と一緒にイギリスにいる友人に会いに行くことができればなあ。", America: "I wish I could go with you to see our friend in the UK.", check: 0 },
    { Japan: "ジョンはまるで幽霊でも見たかのように話す。", America: "John talks as if he had seen a ghost.", check: 0 },
    { Japan: "私は彼が正直だということを知っている。そうでなければ私は彼を信用しないだろう。", America: "I know he is honest otherwise I wouldn't trust him.", check: 0 },
    { Japan: "彼女が話すのを聞けば、彼女が女優であると信じるだろう。", America: "To hear her talk, you would believe that she was an actress.", check: 0 },
    { Japan: "彼女は私が試験の準備をしている間、優しくしてくれただけでなく、寛大でもあった。", America: "She was not only kind but also generous while I was preparing for the examination.", check: 0 },
    { Japan: "英語を速く読みたいなら、何を読むかではなくどのように読むかが重要である。", America: "If you want to read English quickly, it matters not what you read, but how you read.", check: 0 },
    { Japan: "私はケンにもミキにも会いませんでしたよ。", America: "I have seen neither Ken nor Miki.", check: 0 },
    { Japan: "マサキは一生懸命に勉強したので、いい成績を収めた。", America: "Masaki studied so hard that he got a good grade.", check: 0 },
    { Japan: "食の安全性は私たちが無視することができないほどとても重要な問題です。", America: "The safety of food is such an important issue that we cannot ignore it.", check: 0 },
    { Japan: "Could you speak more clearly ( can / hear / we / you / so ) ?", America: "Could you speak more clearly so we can hear you?", check: 0 },
    { Japan: "ジョーンズ教授は後ろの席にいる人にも聞こえるように大きな声で話した。", America: "Professor Jones spoke loudly in order that the people in the back could hear.", check: 0 },
    { Japan: "実は、上司があなたが明日出社しなければならないだろうと言ったのです。", America: "The fact is that the boss said you will have to be here tomorrow.", check: 0 },
    { Japan: "ヒラノさんは東京に彼のレストランを開きたいと私たちに話してくれました。", America: "Mr. Hirano told us that he wanted to open his restaurant in Tokyo.", check: 0 },
    { Japan: "彼はお金を貯めなければならないという事実を忘れてしまっているようだ。", America: "He seems to have forgotten the fact that he needs to save money.", check: 0 },
    { Japan: "私にはいつか音楽家になるという夢がある。", America: "I have a dream that someday I will become a musician.", check: 0 },
    { Japan: "私の友人がレースに勝つという見込みは非常に薄い。", America: "The chances are very slim that my friend will win the race.", check: 0 },
    { Japan: "彼は彼女の気持ちが変わるといけないと思いすぐに指輪を買った。", America: "He bought the ring right away in case she changed her mind.", check: 0 }
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
    storage.kobun_store = JSON.stringify(wordList);
}
// addEventListener('load', function () {
if (storage.kobun_store === undefined) {
} else {
    wordList = JSON.parse(storage.kobun_store);
    shuffledArray = [...wordList];
    showList(shuffledArray);
    practiceNote()
}
// }
// );


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
finishButton.classList.add('button');
finishButton.textContent = '終了する';
finishButton.style.display = 'none';
let check_quiz = 0;

const endButton = document.createElement('button');
document.getElementById('end-btn').appendChild(endButton);
endButton.classList.add('button');
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
shuffleButton.classList.add('shuffle-button');
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
resetButton.classList.add('shuffle-button');
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
whiteButton.classList.add('white-button');
whiteButton.textContent = '全てのカードを有効にする';
whiteButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 0;
    }
    storage.kobun_store = JSON.stringify(wordList);
    changeCardleroad(wordList);
});

//全てのカードを無効にする
const blockButton = document.createElement('button');
document.getElementById('block-btn').appendChild(blockButton);
blockButton.classList.add('white-button');
blockButton.textContent = '全てのカードを無効にする';
blockButton.addEventListener('click', function () {
    for (let i = 0; i < wordList.length; i++) {
        wordList[i].check = 1;
    }
    storage.kobun_store = JSON.stringify(wordList);
    changeCardleroad(wordList);
});


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
    practiceNote()
    showList(shuffledArray);
}

const submitButton = document.createElement('button');
document.getElementById('submit-btn').appendChild(submitButton);
submitButton.classList.add('button');
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
nextButton.classList.add('button');
nextButton.style.display = 'none';
nextButton.addEventListener('click', function () {
    submitButton.style.display = 'block';
    nextButton.style.display = 'none';
    miss = 0;
    showNextQuestion();
});
document.getElementById('next').appendChild(nextButton);
nextButton.classList.add('button');

function showQuestion() {
    const currentQuestion = QuestionList[currentQuestionIndex];
    questionElement.textContent = (`問題：${currentQuestion.Japan}`);
    answerInput.value = '';
}


const startButton = document.createElement('button');
startButton.textContent = 'スタート';
startButton.classList.add('start-btn');
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
        questionElement.textContent = '単語帳入力から単語カードを作成してください。'
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
            storage.kobun_store = JSON.stringify(wordList);
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


function practiceNote() {
    const Text = document.getElementById('text');
    Text.textContent = '練習ノートには単語練習帳で間違えた問題が表示されます。'
    Text.style.display = 'none';
    const container = document.getElementById('container');
    const template = document.getElementById('flame-template').content;
    if (missList.length == 0) {
        container.style.display = 'none';
        Text.style.display = 'block';
    } else {

        container.style.display = 'block';

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
