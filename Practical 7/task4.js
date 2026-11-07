function calculateTask4(){
    const a = parseFloat(document.getElementById("t4-a").value);
    const b = parseFloat(document.getElementById("t4-b").value);
    const c = parseFloat(document.getElementById("t4-c").value);
    const r = parseFloat(document.getElementById("t4-r").value);
    const area = (a * b * c) / (4 * r);
    document.getElementById("t4-result").innerText = "Площа трикутника: " + area.toFixed(2); 
}