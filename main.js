const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
    manifestUrl: 'https://doxizon.github.io/tonconnect-manifest.json',
    buttonRootId: 'ton-connect'
});
async function connectToWallet() {
 const connectedWallet = await tonConnectUI.connectWallet();
    console.log(connectedWallet);
}
document.getElementById("coin").addEventListener("click", async function () {
    document.getElementById("score").innerText++;
})
function nanoton(tons) {
    return tons * Math.pow(10, 9);
}
async function sendtrans(to, value){
    console.log("tyta");
    const transaction = {
        validUntil: Math.floor(Date.now() / 1000) + 60, 
        messages: [
            {
                address: "UQATnIXNmdRCU86YB9CllVd47_GfY5iaYBL7Zoobu4MuGBKM",
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
