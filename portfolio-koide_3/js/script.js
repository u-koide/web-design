//====================
//ハンバーガ―メニュー出現条件
// ====================
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
		var scroll = $(window).scrollTop();
		if (scroll >= 200){//上から200pxスクロールしたら
			$('.hamburger').removeClass('RightMove');//.hamburgerについているRightMoveというクラス名を除く
			$('.hamburger').addClass('LeftMove');//.hamburgerについているLeftMoveというクラス名を付与
		}else{
			if(
				$('.hamburger').hasClass('LeftMove')){//すでに.hamburgerにLeftMoveというクラス名がついていたら
				$('.hamburger').removeClass('LeftMove');//LeftMoveというクラス名を除き
				$('.hamburger').addClass('RightMove');//RightMoveというクラス名を.hamburgerに付与
			}
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});



//====================
//ハンバーガ―メニュー,クリック後ナビ出現
// ====================
$(".hamburger").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $(".hamburger-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    $(".hamburger-nav-back").toggleClass('circleactive');//丸背景にcircleactiveクラスを付与
});

$(".hamburger-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".hamburger").removeClass('active');//ボタンの activeクラスを除去し
    $(".hamburger-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスを除去
    $(".hamburger-nav-back").removeClass('circleactive');//丸背景のcircleactiveクラスを除去
});


// ====================
//カテゴリー分け
// ====================
document.addEventListener("DOMContentLoaded", () => {
  const categoryButtons = document.querySelectorAll(".category-btn");
  const items = document.querySelectorAll(".item");

  const showAllItems = () => {
    items.forEach((item) => {
      item.style.display = "block";
      setTimeout(() => {
        item.classList.add("show");
      }, 10);
    });
  };

  showAllItems();

  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.getAttribute("data-category");
      items.forEach((item) => {
        item.classList.remove("show");
        item.style.display = "none";
      });
      setTimeout(() => {
        items.forEach((item) => {
          if (
            category === "all" ||
            item.getAttribute("data-category") === category
          ) {
            item.style.display = "block";
            setTimeout(() => {
              item.classList.add("show");
            }, 10);
          }
        });
      }, 10);
    });
  });
});

// ====================
//WORKS　PC・SP切り替えボタン
// ====================
// Aボタン
const buttonA = document.getElementById('PC_btn');

// Bボタン
const buttonB = document.getElementById('SP_btn');

buttonA.addEventListener('click',function(){   // Aボタンをクリックした時
    buttonA.classList.remove('active');        // 'buttonA' から 'active' が外される
    buttonB.classList.remove('active');        // 'buttonB' から 'active' が外される 
});

buttonB.addEventListener('click',function(){   // Bボタンをクリックした時
    buttonA.classList.add('active');           // 'buttonA' に 'active' が追加される
    buttonB.classList.add('active');           // 'buttonB' に 'active' が追加される
});

// ====================
//WORKS　PC・SP　画面切り替え
// ====================
// A画面
const screenA = document.querySelector('.PC_screen');

// B画面
const screenB = document.querySelector('.SP_screen');

buttonA.addEventListener('click',function(){   // Aボタンをクリックした時
    buttonA.classList.remove('active');        // 'buttonA' から 'active' が外される
    buttonB.classList.remove('active');        // 'buttonB' から 'active' が外される
    screenA.classList.remove('active');        // 'screenA' から 'active' が外される
    screenB.classList.remove('active');        // 'screenB' から 'active' が外される
});

buttonB.addEventListener('click',function(){   // Bボタンをクリックした時
    buttonA.classList.add('active');           // 'buttonA' に 'active' が追加される
    buttonB.classList.add('active');           // 'buttonB' に 'active' が追加される
    screenA.classList.add('active');           // 'screenA' に 'active' が追加される
    screenB.classList.add('active');           // 'screenB' に 'active' が追加される
});