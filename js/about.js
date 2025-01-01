// 定義工作人員資料
const staffData = [
    { name: "王小明", position: "獸醫師或醫療技術員", image: "img/about/staff1.png" },
    { name: "李佳玲", position: "募資與宣傳專員", image: "img/about/staff2.png" },
    { name: "陳大華", position: "收養與媒合專員", image: "img/about/staff3.png" },
    { name: "張美英", position: "動物照護專員", image: "img/about/staff4.png" }
];

// 初始化索引
let currentIndex = 0;

// 獲取 DOM 元素
const staffImage = document.getElementById("staff-image");
const staffPosition = document.getElementById("staff-position");
const staffName = document.getElementById("staff-name");

// 切換工作人員
function switchStaff() {
    currentIndex = (currentIndex + 1) % staffData.length; // 循環更新索引
    staffImage.src = staffData[currentIndex].image; // 更新圖片
    staffName.textContent = staffData[currentIndex].name; // 更新名字
    staffPosition.textContent = staffData[currentIndex].position; // 更新職位
}

// 每隔 5秒切換一次
setInterval(switchStaff, 5000);
