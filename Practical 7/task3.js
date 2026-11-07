function calculateTask3(){
    const a = parseFloat(document.getElementById("t3-a").value);
    const h = parseFloat(document.getElementById("t3-h").value);
    const area = 0.5 * a * h;
    document.getElementById("t3-result").innerText = "Площа трикутника: " + area.toFixed(2); 
}