window.addEventListener("load", function () {
    let localStorageData = undefined;
    if (localStorage.getItem("Project:textbinaryconverter")) {
        localStorageData = JSON.parse(localStorage.getItem("Project:textbinaryconverter"));
        if (localStorageData.inputOriginalBinarys) {
            document.getElementById("input").value = localStorageData.inputOriginalBinarys || "";
        }
    } else {
        localStorageData = {};
        localStorageData.inputOriginalText = "";
        localStorageData.inputOriginalBinarys = "";
        localStorage.setItem("Project:textbinaryconverter", JSON.stringify(localStorageData));
    }
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
    document.getElementById("input").addEventListener("input", function (e) {
        if ((e.data) && (e.data != "0") && (e.data != "1") && (e.data != " ")) {
            this.value = this.value.replace(e.data, "");
        }
        localStorageData.inputOriginalBinarys = this.value;
        localStorage.setItem("Project:textbinaryconverter", JSON.stringify(localStorageData));
    });
    document.getElementById("input").addEventListener("paste", function (e) {
        e.preventDefault();
        const clipboardValue = e.clipboardData.getData("text");
        if (clipboardValue && (typeof clipboardValue == "string")) {
            const clipboardValueArray = clipboardValue.split("");
            document.getElementById("input").value = clipboardValueArray.map(function (text) {
                if ((text == " ") || (text == "0") || (text == "1")) {
                    return text;
                } else {
                    return "";
                }
            }).join("");
        }
    });
});

