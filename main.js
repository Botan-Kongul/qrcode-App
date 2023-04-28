import qrCode from 'qrcode-generator';

const qrcode_button = document.querySelector('.qrcode-button');
const qrcode_input = document.querySelector('.qrcode-input');
const qrcode_result = document.querySelector('.qrcode-Image');

qrcode_button.addEventListener('click', (e) => {
  const inputValue = qrcode_input.value;
  if (inputValue === '') {
    alert("Lütfen Bir Değer Girin !");
  } else {
    e.preventDefault();
    const typeNumber = 4;
    const errorCorrectionLevel = 'L';
    const qr = qrCode(typeNumber, errorCorrectionLevel);
    qr.addData(inputValue);
    qr.make();
    const qrImage = document.createElement('img');
    qrImage.src = qr.createDataURL();
    qrImage.style.width = '150px';
    qrImage.style.height = '150px';
    qrcode_result.appendChild(qrImage);
  }
});