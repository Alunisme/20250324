let button1, button2, button3;
let spriteOne, spriteTwo, spriteStand, spriteThree;
let currentAnimation = "stand"; // 預設為 stand 動畫
let iframe; // 用於嵌入 iframe 的變量

let spriteOneFrames = 10; // 假設 one.png 包含 10 幀
let spriteTwoFrames = 17; // 假設 two.png 包含 17 幀
let spriteStandFrames = 8; // 假設 stand.png 包含 8 幀
let spriteThreeFrames = 11; // 假設 three.png 包含 11 幀

// 動畫播放速度（以毫秒為單位）
let spriteOneSpeed = 150; // one.png 每幀 150ms
let spriteTwoSpeed = 100; // two.png 每幀 200ms
let spriteStandSpeed = 100; // stand.png 每幀 100ms
let spriteThreeSpeed = 150; // three.png 每幀 250ms

function preload() {
  // 加載精靈表
  spriteOne = loadImage("one.png");
  spriteTwo = loadImage("two.png");
  spriteStand = loadImage("stand.png"); // 加載 stand 動畫的精靈表
  spriteThree = loadImage("three.png"); // 加載 three 動畫的精靈表
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // 創建第一個按鈕
  button1 = createButton("自我介紹");
  button1.position(150, 50);
  button1.size(100, 50);
  button1.style("font-size", "20px");
  button1.mouseOver(() => currentAnimation = "one");
  button1.mouseOut(() => currentAnimation = "stand");
  button1.mousePressed(() => showIframe("https://alunisme.github.io/20250317/"));

  // 創建第二個按鈕
  button2 = createButton("作品簡介");
  button2.position(280, 50);
  button2.size(100, 50);
  button2.style("font-size", "20px");
  button2.mouseOver(() => currentAnimation = "two");
  button2.mouseOut(() => currentAnimation = "stand");
  button2.mousePressed(() => showIframe("https://alunisme.github.io/test20250310/"));

  // 創建第三個按鈕
  button3 = createButton("更多資訊");
  button3.position(410, 50);
  button3.size(100, 50);
  button3.style("font-size", "20px");
  button3.mouseOver(() => currentAnimation = "three");
  button3.mouseOut(() => currentAnimation = "stand");
}

function draw() {
  background(220);

  // 顯示動畫
  if (currentAnimation === "one") {
    displayAnimation(spriteOne, 600, 40, 158, 143, spriteOneFrames, spriteOneSpeed);
  } else if (currentAnimation === "two") {
    displayAnimation(spriteTwo, 600, 40, 204, 158, spriteTwoFrames, spriteTwoSpeed);
  } else if (currentAnimation === "three") {
    displayAnimation(spriteThree, 600, 40, 123, 110, spriteThreeFrames, spriteThreeSpeed);
  } else if (currentAnimation === "stand") {
    displayAnimation(spriteStand, 600, 40, 120, 126, spriteStandFrames, spriteStandSpeed);
  }
}

function displayAnimation(spriteSheet, x, y, w, h, frameCount, speed) {
  let frame = floor((millis() / speed) % frameCount); // 使用 speed 控制動畫速度
  let frameWidth = spriteSheet.width / frameCount; // 每幀的寬度
  image(spriteSheet, x, y, w, h, frame * frameWidth, 0, frameWidth, spriteSheet.height);
}

function showIframe(url) {
  // 如果已經存在 iframe，先移除
  if (iframe) {
    iframe.remove();
  }

  // 創建新的 iframe
  iframe = createElement("iframe");
  iframe.attribute("src", url);
  iframe.position(windowWidth * 0.1, windowHeight * 0.2); // 顯示在視窗中間
  iframe.size(windowWidth * 0.8, windowHeight * 0.6); // 寬為視窗的 80%，高為視窗的 60%
}
