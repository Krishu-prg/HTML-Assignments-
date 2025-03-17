function generateTable() {
    let num = document.getElementById("numInput").value;
    if (num === "") {
        console.log("Please enter a number.");
        return;
    }
    num = parseInt(num);
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
