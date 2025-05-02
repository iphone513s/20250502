let capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#e7c6ff');
  
  // 初始化攝影機
  capture = createCapture(VIDEO);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
  capture.hide(); // 隱藏原始攝影機畫面
}

function draw() {
  background('#e7c6ff'); // 確保背景顏色一致
  
  // 計算影像顯示位置
  let x = (width - capture.width) / 2;
  let y = (height - capture.height) / 2;
  
  // 翻轉畫布以左右顛倒影像
  push();
  translate(width, 0);
  scale(-1, 1);
  
  // 繪製攝影機影像
  image(capture, x, y, capture.width, capture.height);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}
