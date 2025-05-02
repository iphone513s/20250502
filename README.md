
20250502
---
```
產生一個全螢幕的畫面，背景顏色為e7c6ff。擷取攝影機的影像，
正常的顯示在視窗的中間。影像畫面寬高為視窗大小的80%。請把程式碼寫在sketch.js內。
```
說明:
1. createCanvas(windowWidth, windowHeight):建立全螢幕畫布。
2. background('#e7c6ff'):設定背景顏色為指定的紫色。
3. createCapture(VIDEO):啟用攝影機擷取影像。
4. capture.size(windowWidth*0.8,windowHeight*0.8):將影像大小設定為視窗的80%
5. image(capture,x,y)將影像繪製在畫布中央。
6. windowResized:確保視窗大小改變時，畫布和影像能動態調整
```
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
  
  // 繪製攝影機影像
  image(capture, x, y, capture.width, capture.height);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  capture.size(windowWidth * 0.8, windowHeight * 0.8);
}

```
