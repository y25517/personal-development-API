const button = document.querySelector("button");

// 表示用コンテナ
const container = document.createElement("div");
container.style.textAlign = "center";

// ラッパーと要素作成
const wrapper = document.createElement("div");
wrapper.className = "image-wrapper";

const img = document.createElement("img");
const text = document.createElement("div");
text.className = "overlay-text";

wrapper.appendChild(img);
wrapper.appendChild(text);

// ボタンの「下」に追加
container.appendChild(wrapper);
document.body.appendChild(container);

button.addEventListener("click", () => {
  img.src = "";

  fetch("https://yesno.wtf/api")
    .then(res => res.json())
    .then(data => {
      text.textContent = data.answer === "yes" ? "YES" : "NO";
      img.src = data.image;
    })
    .catch(() => {
      text.textContent = "ERROR";
    });
});
