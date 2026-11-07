function calculateTask5() {
    const input = document.getElementById("t5-number").value.trim();
    const reversed = input.split("").reverse().join("");
    if (input === reversed) {
        document.getElementById("t5-result").innerText = "Число " + input + " - паліндром";
    } else {
        document.getElementById("t5-result").innerText = "Число " + input + " - не паліндром";
    }
}