// 全てのworks-item要素を取得
const worksItems = document.querySelectorAll('.works-item');

// Intersection Observerを設定
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    // 表示範囲に入った場合
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // activeクラスを追加
    } else {
      entry.target.classList.remove('active'); // 表示範囲を外れるとクラスを削除
    }
  });
}, {
  threshold: 0.5 // 50%が表示されたらアクションを実行
});

// 各works-item要素を監視
worksItems.forEach(item => {
  observer.observe(item);
});
