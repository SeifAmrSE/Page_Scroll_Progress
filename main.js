let ele = document.querySelector(".scroller");

let h =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;

  ele.style.width = `${(scrollTop / h) * 100}%`;
});
