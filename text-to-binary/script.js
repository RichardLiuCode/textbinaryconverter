document.getElementById("convert").addEventListener("click", function () {
    const inputText = document.getElementById("input").value;
    const encoder = new TextEncoder();
    const encodedInputUint8Array = encoder.encode(inputText);
    const encoedeInputArray = Array.from(encodedInputUint8Array);
    const result = encoedeInputArray.map(function (i) {
        return i.toString(2);
    }).join(" ");
    document.getElementById("result").innerText = result;
});