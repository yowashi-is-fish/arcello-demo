let isMenuOpened = true; // メニュー開閉状態のフラグ
// スクロール操作のイベント定義、preventDefault() メソッドはイベントの既定の動作をキャンセルするために使用される
const handle = (event) => {
  event.preventDefault();
};

// スクロール操作の記述
if (isMenuOpened) { // フラグの状態を見て実行動作を判断
    document.addEventListener('touchmove', handle, { passive: false }); // タッチ操作でのスクロール無効化
    document.addEventListener('mousewheel', handle, { passive: false }); // マウスホイール操作でのスクロール無効化
  } else {
    document.removeEventListener('touchmove', handle); // タッチ操作でのスクロール有効化
    document.removeEventListener('mousewheel', handle); // マウスホイール操作でのスクロール有効化
}
isMenuOpened = !isMenuOpened; // isMenuOpenedの値を反転させる
