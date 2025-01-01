const feedback = [
    { name:"孫小帥", contryC:"臺灣 花蓮縣", contryE: "Hualien, Taiwan", image:"img/index/male_1.png", article: "經過領養，我收養了一隻貓咪，牠的眼神和細膩的性格讓我愛不釋手。每天和牠一起度過，讓我體會到無條件的陪伴與支持。"},
    { name:"李雅婷", contryC:"臺灣 基隆市", contryE: "Hualien, Taiwan", image:"img/index/female_1.png", article: "領養的金魚不僅是觀賞的樂趣，牠的悠游讓我學會了耐心與細心照顧。這份與自然和諧相處的美好讓我的生活更有意義。"},
    { name:"高子軒", contryC:"臺灣 高雄市", contryE: "Kaohsiung, Taiwan", image:"img/index/male_2.png", article: "家裡的狗狗是領養回來的，牠的忠誠與活力讓我們每天都充滿驚喜和歡笑。領養改變了牠的一生，也豐富了我們的生活。"},
    { name:"趙明哲", contryC:"臺灣 南投市", contryE: "Nantou, Taiwan", image:"img/index/male_3.png", article: "領養了一隻需要特殊照顧的龜，牠的堅毅和耐心教會了我生活中如何更有責任感，並且從中收穫了無限的愛與陪伴。"},
    { name:"黃夢瑤", contryC:"中國 安徽省", contryE: "Anhui, China", image:"img/index/female_2.png", article: "領養了這隻小貓後，牠成為了我們家庭的靈魂。牠的每一個小動作都讓我們笑出聲，從此家中充滿了更多的愛與歡笑。"},
    { name:"林雨薇", contryC:"臺灣 桃園市", contryE: "Taoyuan, Taiwan", image:"img/index/female_3.png", article: "領養了一隻兔子，牠的溫順和乖巧讓我們的家充滿了溫暖。兔兔的陪伴，讓我們的生活更加充實，真的不後悔這個選擇。"},
    { name:"蘇文博", contryC:"中國 四川省", contryE: "Sichuan, China", image:"img/index/male_4.png", article: "領養了一隻小倉鼠，它總是活潑好動，看著它小小的身影，我的心情也變得更輕鬆。這份陪伴讓我的生活更加有趣！"},
    { name:"許家豪", contryC:"中國 浙江省", contryE: "Zhejiang, China", image:"img/index/male_5.png", article: "領養了這隻小鳥，每天看著牠自在地飛翔，心情總是格外輕鬆。牠的歌聲讓我的日子充滿了歡樂，真心感謝這份禮物。"},
    { name:"何紫璇", contryC:"臺灣 屏東縣", contryE: "Pingtung, Taiwan", image:"img/index/female_4.png", article: "領養這隻老狗給了我新的生活意義。牠的溫柔與深情讓我明白，年齡並不是愛與陪伴的障礙，牠給了我不斷的驚喜和溫暖。"},
]

// const staffData = [
//     { name: "王小明", position: "獸醫師或醫療技術員", image: "staff1.png" },
//     { name: "李佳玲", position: "募資與宣傳專員", image: "staff2.png" },
//     { name: "陳大華", position: "收養與媒合專員", image: "staff3.png" },
//     { name: "張美英", position: "動物照護專員", image: "staff4.png" }
// ];

// 初始化索引
let currentIndex = 0;

// 獲取 DOM 元素
const feedbackName = document.getElementById("name");
const feedbackContryC = document.getElementById("contryC");
const feedbackContryE = document.getElementById("contryE");
const feedbackImg = document.getElementById("image");
const feedbackArticle = document.getElementById("article");

// 取得所有的圓形指示器元素
const indicators = document.querySelectorAll(".circle");


function updateContent(index) {
    const data = feedback[index]; // 根據索引取得對應的幻燈片物件
    feedbackName.textContent = data.name; // 更新領養者名稱
    feedbackContryC.textContent = data.contryC; // 更新地區
    feedbackContryE.textContent = data.contryE; // 更新地區
    feedbackImg.src = data.image; // 更新照片
    feedbackArticle.textContent = data.article; // 更新文章


    // 更新指示器的顯示狀態
    indicators.forEach((circle, idx) => {
        // 如果指示器的索引等於當前幻燈片索引，則添加 "filled" 類，表示該指示器已選中
        circle.classList.toggle("filled", idx === index);
    });
}



// 跳到下一張幻燈片
function nextAdopter() {
    // 更新當前幻燈片索引，當到達最後一張時，會循環回第一張
    currentIndex = (currentIndex + 1) % feedback.length;
    updateContent(currentIndex); // 更新頁面顯示內容
}

// 當按下上一張箭頭按鈕時，切換到上一張幻燈片
document.getElementById("previousArrow").addEventListener("click", () => {
    // 更新當前幻燈片索引，當到達第一張時，會循環回最後一張
    currentIndex = (currentIndex - 1 + feedback.length) % feedback.length;
    updateContent(currentIndex); // 更新頁面顯示內容
});

// 當按下下一張箭頭按鈕時，切換到下一張幻燈片
document.getElementById("nextArrow").addEventListener("click", () => {
    nextAdopter(); // 調用 nextSlide 函數來切換到下一張幻燈片
});

// 每隔 5秒切換一次
setInterval(nextAdopter, 7000);

// 初始化頁面內容，顯示當前的第一組
updateContent(currentIndex);
















// const feedback = [
//     { name:"孫小帥", contryC:"臺灣 花蓮縣", contryE: "Hualien, Taiwan", image:"img/male_1.png", article: "經過領養，我收養了一隻貓咪，牠的眼神和細膩的性格讓我愛不釋手。每天和牠一起度過，讓我體會到無條件的陪伴與支持。"},
//     { name:"李雅婷", contryC:"臺灣 基隆市", contryE: "Hualien, Taiwan", image:"img/female_1.png", article: "領養的金魚不僅是觀賞的樂趣，牠的悠游讓我學會了耐心與細心照顧。這份與自然和諧相處的美好讓我的生活更有意義。"},
//     { name:"高子軒", contryC:"臺灣 高雄市", contryE: "Kaohsiung, Taiwan", image:"img/male_2.png", article: "家裡的狗狗是領養回來的，牠的忠誠與活力讓我們每天都充滿驚喜和歡笑。領養改變了牠的一生，也豐富了我們的生活。"},
//     { name:"趙明哲", contryC:"臺灣 南投市", contryE: "Nantou, Taiwan", image:"img/male_3.png", article: "領養了一隻需要特殊照顧的龜，牠的堅毅和耐心教會了我生活中如何更有責任感，並且從中收穫了無限的愛與陪伴。"},
//     { name:"黃夢瑤", contryC:"中國 安徽省", contryE: "Anhui, China", image:"img/female_2.png", article: "領養了這隻小貓後，牠成為了我們家庭的靈魂。牠的每一個小動作都讓我們笑出聲，從此家中充滿了更多的愛與歡笑。"},
//     { name:"林雨薇", contryC:"臺灣 桃園市", contryE: "Taoyuan, Taiwan", image:"img/female_3.png", article: "領養了一隻兔子，牠的溫順和乖巧讓我們的家充滿了溫暖。兔兔的陪伴，讓我們的生活更加充實，真的不後悔這個選擇。"},
//     { name:"蘇文博", contryC:"中國 四川省", contryE: "Sichuan, China", image:"img/male_4.png", article: "領養了一隻小倉鼠，它總是活潑好動，看著它小小的身影，我的心情也變得更輕鬆。這份陪伴讓我的生活更加有趣！"},
//     { name:"許家豪", contryC:"中國 浙江省", contryE: "Zhejiang, China", image:"img/male_5.png", article: "領養了這隻小鳥，每天看著牠自在地飛翔，心情總是格外輕鬆。牠的歌聲讓我的日子充滿了歡樂，真心感謝這份禮物。"},
//     { name:"何紫璇", contryC:"臺灣 屏東縣", contryE: "Pingtung, Taiwan", image:"img/female_4.png", article: "領養這隻老狗給了我新的生活意義。牠的溫柔與深情讓我明白，年齡並不是愛與陪伴的障礙，牠給了我不斷的驚喜和溫暖。"},
// ]


// let currentIndex = 0;

// const feedbackName = document.getElementById("name");
// const feedbackContryC = document.getElementById("contryC");
// const feedbackContryE = document.getElementById("contryE");
// const feedbackImg = document.getElementById("image");
// const feedbackArticle = document.getElementById("article");


// function switchAdopter() {
//     currentIndex = (currentIndex + 1) % feedback.length; 
//     feedbackImg.src = feedback[currentIndex].image; 
//     feedbackName.textContent = feedback[currentIndex].name
//     feedbackContryC.textContent = feedback[currentIndex].contryC;
//     feedbackContryE.textContent = feedback[currentIndex].contryE;
//     feedbackArticle.textContent = feedback[currentIndex].article;
// }


// setInterval(switchAdopter, 2000);

// 改路徑(在更細) 英文檔名 小駝峰 不要換頁面