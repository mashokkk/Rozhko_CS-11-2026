function calculateTask2() {
    const a = parseFloat(document.getElementById("t2-a").value);
    const b = parseFloat(document.getElementById("t2-b").value);
    const angleDeg = parseFloat(document.getElementById("t2-angle").value);
    const angleRad = angleDeg * Math.PI / 180;
    const area = 0.5 * a * b * Math.sin(angleRad);
    document.getElementById("t2-result").innerText = "Площа трикутника: " + area.toFixed(2); 
}