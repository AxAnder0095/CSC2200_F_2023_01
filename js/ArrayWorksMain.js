let shopList = [];
function addItem() {
    // alert( "AddItem");
    let item = document.getElementById("item").value;
    shopList.push( item );
    let size = shopList.length;
    document.getElementById("results").innerHTML = `Added Item${item} size:${size}`;

}

function removeFromList(){
    let item = document.getElementById("item").value;
    let oStr = "";
    let idx = shopList.indexOf(item);
    if (idx != -1){
        shopList.splice(idx, 1);
        oStr = `Removed item at ${idx}`;
    }
    else {
        oStr = `Item ${item} Not Found`;
    }
}

function showList(){
    let size = shopList.length;
    let oStr = "<ol>";
    for (let i = 0; i < shopList.length; i++){
        let item = shopList[i];
        oStr += `<li>${item}</li>`
    }
    oStr += "</ol>"
    document.getElementById("results").innerHTML = oStr;
}