function openFullscreen(elem) {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
        elem.msRequestFullscreen();
    }
}
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
// if (!isMobile) {
//     window.location.href = "crypto/errorpl.html";
// }

document.getElementById("tasks").addEventListener('click', function() {
    window.location.href = 'https://doxizon.github.io/tasks.html';
});
const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://doxizon.github.io/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});
async function connectToWallet() {
 const connectedWallet = await tonConnectUI.connectWallet();
    console.log(connectedWallet);
}
// var isOriginal = true;
// document.getElementById("coin").addEventListener("click", async function () {
//     document.getElementById("score").innerText++;
// })

document.getElementById("coin-img").addEventListener('touchstart', function() {
    this.src = 'imgs/coin_press.png'; 
    document.getElementById("score").innerText++;
    // this.style.transform="rotate"
});
document.getElementById("coin-img").addEventListener('touchend', function() {
    this.src = 'imgs/coin.png'; 
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
document.querySelector(".go2628359365").addEventListener("click", async function() {
    console.log("discon");
    await tonConnectUI.disconnect();
});
