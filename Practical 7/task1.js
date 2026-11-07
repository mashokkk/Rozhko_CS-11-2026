function calculateTask1(){
    const a = parseFloat(document.getElementById("t1-a").value);
    const b = parseFloat(document.getElementById("t1-b").value);
    const c = parseFloat(document.getElementById("t1-c").value);
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
    document.getElementById("t1-result").innerText = "Площа трикутника: " + area.toFixed(2); 
}