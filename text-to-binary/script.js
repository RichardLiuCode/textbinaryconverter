window.addEventListener("load", function () {
    let localStorageData = undefined;
    if (localStorage.getItem("Project:textbinaryconverter")) {
        localStorageData = JSON.parse(localStorage.getItem("Project:textbinaryconverter"));
        if (localStorageData.inputOriginalText) {
            document.getElementById("input").value = localStorageData.inputOriginalText || "";
        }
    } else {
        localStorageData = {};
        localStorageData.inputOriginalText = "";
        localStorageData.inputOriginalBinarys = "";
        localStorage.setItem("Project:textbinaryconverter", JSON.stringify(localStorageData));
    }
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
    document.getElementById("inputValueCopyBtn").addEventListener("click", function () {
        document.getElementById("input").select();
        navigator.clipboard.writeText(document.getElementById("input").value);
    });
    document.getElementById("resultValueCopyBtn").addEventListener("click", function () {
        document.getElementById("result").select();
        navigator.clipboard.writeText(document.getElementById("result").value);
    });
    document.getElementById("input").addEventListener("input", function () {
        localStorageData.inputOriginalText = this.value;
        localStorage.setItem("Project:textbinaryconverter", JSON.stringify(localStorageData));
    });
});
