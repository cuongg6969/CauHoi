document.addEventListener("DOMContentLoaded", () => {
  const btnKhong = document.getElementById("btnkhong");
  const btnCo = document.getElementById("btnco");
  const label = document.getElementById("lb");
  const frame = document.getElementById("frame");
  if (btnKhong) {
    btnKhong.addEventListener("click", () => {
      const currentFontSize = parseInt(
        window.getComputedStyle(btnKhong).fontSize,
        10
      );
      if (currentFontSize < 5) {
        document.querySelectorAll("body > *").forEach((element) => {
          if (element.tagName.toLowerCase() !== "video") {
            element.style.display = "none";
          }
        });
        const vid = document.getElementById("vid");
        vid.style.display = "block";
        vid.play();
        vid.requestFullscreen();
      }
      const newFontSize = currentFontSize - 5;
      btnKhong.style.fontSize = `${newFontSize}px`;
    });
  } else {
    console.error('Element with id "btnKhong" not found.');
  }
  if (btnCo) {
    btnCo.addEventListener("click", () => {
      btnCo.style.display = "none";
      btnKhong.style.display = "none";
      frame.style.backgroundColor = "green";
      frame.style.color = "white";
      frame.style.fontSize = "50px";
      label.innerHTML = "ỏooooooooooooo, tao bíc mà:3";
    });
  }
});
