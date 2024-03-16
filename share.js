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

//input text file and entering it in plaintext
const fileInput = document.querySelector("input[type=file]");
  
  fileInput.addEventListener("change", async () => {
    const [file] = fileInput.files;
  
    if (file) {
        document.getElementById('plaintext').innerText = await file.text();
    }
  });
