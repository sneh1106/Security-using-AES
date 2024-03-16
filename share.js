const btn = document.getElementById('shareB');
const resultPara = document.getElementById('shareResult');

// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  let text= document.getElementById('ciphertext').value;
// const shareData = Object(document.getElementById('ciphertext').value); 
const shareData = {
  title: "Encription using AES",
  text: text,
  url: "",
};
  try {
    await navigator.share(shareData);
    resultPara.textContent = "Encrypted data shared successfully";
  } catch (err) {
    resultPara.textContent = `Error: ${err}`;
  }
});
