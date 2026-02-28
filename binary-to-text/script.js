document.getElementById("convert").addEventListener("click", function () {
    const input = document.getElementById("input").value;
    const inputArray = input.split(" ");
    const TextCodeArray = inputArray.map(function (binary) {
        return parseInt(binary, 2);
    });
    const TextCodeUint8Array = new Uint8Array(TextCodeArray);
    const decoder = new TextDecoder();
    const result = decoder.decode(TextCodeUint8Array);
    document.getElementById("result").value = result;
});
document.getElementById("inputValueCopyBtn").addEventListener("click", function () {
    document.getElementById("input").select();
    navigator.clipboard.writeText(document.getElementById("input").value);
});
document.getElementById("resultValueCopyBtn").addEventListener("click", function () {
    document.getElementById("result").select();
    navigator.clipboard.writeText(document.getElementById("result").value);
});