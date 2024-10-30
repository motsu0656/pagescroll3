window.addEventListener('scroll', () => {
  const worksItems = document.querySelectorAll('.works-item');
  const triggerBottom = window.innerHeight * 0.8; // 画面下から80%の位置でアニメーションを発動

  worksItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const itemBottom = item.getBoundingClientRect().bottom;

    if (itemTop < triggerBottom && itemBottom > 0) {
      // 要素がスクロールで見えたらactiveクラスを追加
      item.classList.add('active');
    } else {
      // 要素が表示領域から外れたらactiveクラスを削除
      item.classList.remove('active');
    }
  });
});
