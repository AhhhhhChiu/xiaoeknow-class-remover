const insert = () => {
  setInterval(() => {
    const list = Array.from(document.getElementsByClassName('break-line'))
    if (list.length) {
      list.forEach((item) => {
        item.classList.remove('break-line');
      });

      const details = document.getElementsByClassName('goods-detail')[0].firstElementChild;
      // 遍历details，移除非goods-intro的元素
      Array.from(details.children).forEach(child => {
        if (!child.classList.contains('goods-intro')) {
          child.remove();
        }
      });

      

      clearInterval();
    }
  }, 200);
}

insert();
