function calculateTask7() {
    const n = parseInt(document.getElementById("t7-n").value);
    let first = 1;
    let last = 1;
    for (let i = 3; i <= n; i++) {
        const next = first + last;
        first = last;
        last = next;
    }
    document.getElementById("t7-result").innerText = n + "-те число Фібоначчі: " + last;
}