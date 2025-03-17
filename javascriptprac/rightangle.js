function printTriangle() {
    let num = document.getElementById("numInput").value;
    if (num === "") {
        console.log("Please enter a number.");
        return;
    }
    num = parseInt(num);
    for (let i = 1; i <= num; i++) {
        let stars = '';
        for (let j = 1; j <= i; j++) {
            stars += '*';
        }
        console.log(stars);
    }
}
