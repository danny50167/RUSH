const btn_sign = document.getElementsByClassName("btn_sign");

Array.from(btn_sign).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const route = e.target.id;
    document.location.href = `/${route}`;
  });
});
