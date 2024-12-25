const slides = [
    { 
        name: "達達", 
        image: "img/newBeginning/turtle.jpg", 
        subtitle: "當達達這隻流浪龜被發現時，牠正在縮成一團，躲在自己的龜殼裡，顯得十分害怕和無助。" ,
        say: "達達剛到新家的時候充滿戒心，每當有人靠近，牠總會迅速把頭和四肢縮進龜殼裡，不肯再露面。但現在，達達已經逐漸適應了新環境，也不再那麼怕人，開始主動探索周圍的世界，顯得更加放鬆和自信。牠的進步讓我感到非常欣慰，也更加珍惜與達達共度的每一天。"
    },
    { 
        name: "小雪", 
        image: "img/newBeginning/dog.jpg", 
        subtitle: "小雪是一隻被遺棄的薩摩耶，牠剛到時因為之前的遭遇，對人類充滿了不信任，經常躲在角落裡。", 
        say: "小雪剛來到家的時候，每次有人靠近牠就會顯得非常緊張，甚至發出低吼聲。但經過耐心的相處和鼓勵，牠現在已經成為了家裡的開心果，時常在院子裡開心地跑來跑去，還會主動用大尾巴搖來搖去迎接我回家，完全放下了過去的陰影。"
    },
    { 
        name: "虎虎", 
        image: "img/newBeginning/cat.jpg", 
        subtitle: "虎虎是一隻流浪的虎斑貓，牠當時被發現時正在街頭四處徘徊，身體虛弱，眼神中充滿了恐懼。", 
        say: "剛領養虎虎的時候，牠對新環境完全陌生，每次聽到動靜就會躲進角落，甚至連我靠近牠都會縮成一團。但經過幾個月的耐心照顧，虎虎開始對我放下戒心，現在牠會蹭著我的腿撒嬌，有時還會跳到我身邊要求摸頭，變得越來越親人了！"
    },
    { 
        name: "紅寶", 
        image: "img/newBeginning/parrot.jpg", 
        subtitle: "紅寶是一隻流浪的紅黃色鸚鵡，牠在公園裡被發現時受了輕傷，似乎是迷路了，對陌生環境感到極度不安。", 
        say: "紅紅寶剛來家裡的時候，對人類的接近非常警惕，牠不但不敢開口叫，還常常躲在籠子的角落裡。現在，牠已經逐漸放開了心防，會在我靠近時發出歡快的叫聲，甚至會跟我對話，讓我感覺牠真的是家的一份子了！"
    },
    { 
        name: "胖妹", 
        image: "img/newBeginning/rabbit.jpg", 
        subtitle: "是被前主人丟掉的兔子，還小的牠看起來不安全感很重。", 
        say: "剛來我們家時很憂鬱，都當孤僻小孩不出籠子，和家裡兔子變成了朋友後，變得比較開朗，很會吃和拉，之前和他的朋友兔子吵架，不過現在和好了。"
    },
];

let currentSlide = 0;
const nameElement = document.getElementById("name");
const subtitleElement = document.getElementById("subtitle");
const sayElement = document.getElementById("say");
const imageElement = document.getElementById("animal-image");
const indicators = document.querySelectorAll(".circle");

function updateContent(index) {
    const slide = slides[index];
    nameElement.textContent = slide.name;
    subtitleElement.textContent = slide.subtitle;
    sayElement.textContent = slide.say;
    imageElement.src = slide.image;

    indicators.forEach((circle, idx) => {
        circle.classList.toggle("filled", idx === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateContent(currentSlide);
}

document.getElementById("prev-arrow").addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateContent(currentSlide);
});

document.getElementById("next-arrow").addEventListener("click", () => {
    nextSlide();
});

setInterval(nextSlide, 5000); // 每 5 秒自動切換
updateContent(currentSlide);
