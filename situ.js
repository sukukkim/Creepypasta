function redirectToPage() {
    var language = document.getElementById("language").value;
    if (language === "여성") {
        window.location.href = "situ1-1.html"; // 다음 페이지 이동
    } else {
        alert("지원되지 않는 언어입니다.");
    }
}