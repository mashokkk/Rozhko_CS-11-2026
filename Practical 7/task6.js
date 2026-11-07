function calculateTask6() {
    const w1 = document.getElementById("t6-w1").value.trim().toLowerCase();
    const w2 = document.getElementById("t6-w2").value.trim().toLowerCase();
    const checked1 = w1.split("").sort().join("");
    const checked2 = w2.split("").sort().join("");
    if (checked1 === checked2) {
        document.getElementById("t6-result").innerText = "анаграма";
    } else {
        document.getElementById("t6-result").innerText = "не анаграма";
    }
}