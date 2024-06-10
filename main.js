window.onload = function() {
    var div = document.getElementById('score');
    
    if(localStorage.getItem('divValue')) {
      div.innerHTML = localStorage.getItem('divValue');
    }
  
    div.oninput = function() {
      localStorage.setItem('divValue', div.innerHTML);
    }
  }
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://doxizon.github.io/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});
async function connectToWallet() {
 const connectedWallet = await tonConnectUI.connectWallet();
    console.log(connectedWallet);
}
var isOriginal = true;
document.getElementById("coin").addEventListener("click", async function () {
    document.getElementById("score").innerText++;
})

document.getElementById("coin-img").addEventListener('touchstart', function() {
    this.src = 'imgs/coin_press.png'; // замените на путь к вашему новому изображению
});
document.getElementById("coin-img").addEventListener('touchend', function() {
    this.src = 'imgs/coin.png'; // замените на путь к вашему оригинальному изображению
});


function nanoton(tons) {
    return tons * Math.pow(10, 9);
}
async function sendtrans(to, value){
    console.log("tyta");
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, 
        messages: [
            {
                address: "UQBeXw_in5Sjn8iIkDLz_YFpPuvMc4SWRinEu9kDuK-uE_uS",
                amount: nanoton(0.01),
                // payload: "base64Hello"
            }
        ]
    }
    
    try {
        const result = await tonConnectUI.sendTransaction(transaction);
        const someTxData = await myAppExplorerService.getTransaction(result.boc);
        alert('Transaction was sent successfully', someTxData);
    } catch (e) {
        console.error(e);
    }
}
document.getElementById("home").addEventListener("click", async function() {
    await tonConnectUI.disconnect();
});
// 60
