document.getElementsByName("topBarHomeButton")[0].addEventListener("click", function () {
    document.head.remove();
    document.body.remove();
    window.location.href = "index.html";
});
document.getElementsByName("topBarTextToBinaryButton")[0].addEventListener("click", function () {
    document.head.remove();
    document.body.remove();
    window.location.href = "text-to-binary.html";
});
