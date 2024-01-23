let countdown = 100; // タイマーの初期値（秒）
let karecount = 150;
let life;
let butu1;
let kare;
let showImage = true;
let kareImage = false;
let kare_so

function preload() {
  life = loadImage('./assets/life.png');
  butu1 = loadImage('./assets/Goldball.png');
  kare = loadImage('./assets/yasai_kare.png');
  kare_so = new Audio('./sounds/get.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(220);
  //background('brown')
  // タイマーが0より大きい場合はカウントダウン
  if (countdown >= 0) {
    if (showImage) {
      image(life, 100, 100, 100, 100);
    }
    countdown -= 1;
} else {
    // タイマー0になったら画像を表示
    clearText();
  }
    // countdown が 0 になったら karecount を起動
    if (countdown <=0 &&karecount <= 0) {
		image(kare,100,100,100,100)
    
		kare_so.play();//音を鳴らす
        console.log("karecountが0になりました！");
		
		noLoop(); 
    }else{
		karecount--;
	}
 

  // テスト用にタイマーの値を表示
  textSize(32);
  text(countdown, 120, 250);
  text(karecount,120,300);
}

function clearText() {
  showImage = false;
  image(butu1, 100, 100, 100, 100);
  //kareImage = false;
  //image(kare, 100, 100, 100, 100);
}

function mousePressed() {
  console.log("x:", mouseX);
  console.log("y:", mouseY);

  if (countdown <= 0  && mouseX >= 100 && mouseX <= 200 && mouseY >= 100 && mouseY <= 200) {
    showImage = true;
    countdown = 100;
	karecount = 150
	loop()
  }
}
