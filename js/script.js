const btnGerarQrCode = document.getElementById('btn-gerarQrCode');
const imgQrCode = document.getElementById('imgQrCode');
const textarea = document.getElementById('textarea');
const btnBaixa = document.getElementById('btn-baixa');
let gerouImg = false;

// GERAR QR CODE
btnGerarQrCode.addEventListener('click', gerarQrCode);

function gerarQrCode() {
  if (textarea.value.trim() !== '') {
    gerouImg = true;
    imgQrCode.src = 'img/killuaLoad.gif';
    fetch(`https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(textarea.value)}`)
      .then(response => response.blob())
      .then(async blob => {
        const url = URL.createObjectURL(blob);
        imgQrCode.src = url;
        notificacao('QR Code Gerado com Sucesso');
      })
      .catch(error => {
        imgQrCode.src = 'img/hunterErro.gif';
        console.log('Erro ao gerar QR Code: ', error);
        notificacao('Erro ao gerar QR Code');
      });
  } else {
    notificacao('ERRO: Digite algo no campo.');
    console.log('ERRO: Digite algo no campo.');
  }
}

// BAIXA QR CODE
btnBaixa.addEventListener('click', baixa);

function baixa() {
  if (gerouImg) {
    const link = document.createElement('a');
    link.href = imgQrCode?.src;
    link.download = 'qr-code.png';
    link.click();
  } else {
    notificacao('ERRO: Você ainda não gerou a imagem');
  }
}

function notificacao(msg) {
  document.getElementById('msg').innerText = msg;
  document.getElementById('progresso').style.transform = 'translateX(0)';
  document.getElementById('alert').style.transform = 'translateX(0)';
  setTimeout(function () {
    document.getElementById('progresso').style.transform = 'translateX(-101%)';
    setTimeout(function () {
      document.getElementById('alert').style.transform = 'translateX(151%)';
    }, 3000);
  }, 2000);
}
