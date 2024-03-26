function searchCrypto() {
    var input, filter, table, rows, nameColumn, priceColumn, i;
    input = document.getElementById("cryptoInput");
    filter = input.value.toUpperCase();
    table = document.getElementsByClassName("crypto-table")[0];
    rows = table.getElementsByClassName("crypto-row");
    for (i = 0; i < rows.length; i++) {
        nameColumn = rows[i].getElementsByClassName("crypto-name")[0];
        priceColumn = rows[i].getElementsByClassName("crypto-price")[0];
        if (nameColumn.innerText.toUpperCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}