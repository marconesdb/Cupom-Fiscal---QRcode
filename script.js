// Exemplo de como preencher uma data dinamicamente (se não fosse estática)
let dataAutorizacaoElement = document.querySelector('.nfce-details p:nth-child(5)');
 if (dataAutorizacaoElement) {
     const now = new Date();
     const dia = String(now.getDate()).padStart(2, '0');
     const mes = String(now.getMonth() + 1).padStart(2, '0');
     const ano = now.getFullYear();
     const horas = String(now.getHours()).padStart(2, '0');
     const minutos = String(now.getMinutes()).padStart(2, '0');
     dataAutorizacaoElement.textContent = `Data de autorizacao ${dia}/${mes}/${ano} ${horas}:${minutos}:00`; }

// Para gerar um QR Code (exige uma biblioteca, por exemplo, qrcode.js)
// <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
// No HTML, mude a div do QR Code para algo como: <div id="qrcode"></div>

document.addEventListener('DOMContentLoaded', () => {
    const qrCodeDiv = document.getElementById('qrcode');
    if (qrCodeDiv) {
        new QRCode(qrCodeDiv, {
            text: "https://portalsped.fazenda.mg.gov.br/portalnfce", // Ou a URL completa da chave de acesso
            width: 100,
            height: 100,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        });
    }
});
