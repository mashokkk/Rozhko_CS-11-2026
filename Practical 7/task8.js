function calculateTask8() {
    const input = parseInt(document.getElementById("t8-number").value);
    let first = 1;
    let last = 1;
    while (last < input) {
        const next = first + last;
        first = last;
        last = next;
    }
    if (last === input) {
        document.getElementById("t8-result").innerText = "Число " + input + " належить послідовності Фібоначчі";
    } else {
        document.getElementById("t8-result").innerText = "Число " + input + " не належить послідовності Фібоначчі";
    }
}