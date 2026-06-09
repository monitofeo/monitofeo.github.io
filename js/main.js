function goToChapters() {
    window.location.href = "chapters.html";
}

function toggleCodigos() {
    document.getElementById("codigosPanel").classList.toggle("hidden");
}

function toggleCreditos() {
    document.getElementById("creditosPanel").classList.toggle("hidden");
}

function toggleNotas() {
    document.getElementById("notasPanel").classList.toggle("hidden");
}

function checkCode() {
    let code = document.getElementById("codeInput").value;
    let res = document.getElementById("resultado");

    if (code === "TR4P") {
        window.open("https://drive.google.com/file/d/1dawXByTMScKn7Pl_YgMBcuxCWzIMm9w2/view");
    } else if (code === "3Y3") {
        res.innerHTML = "<img src='assets/secrets/eye_secrets.png'>";
    } else if (code === "HEROX") {
        res.innerHTML = "<img src='assets/secrets/herox_secrets.png'>";
    } else if (code === "MONITO") {
        res.innerHTML = "<img src='assets/secrets/monito_secrets.png'>";
    } else if (code === "AXE") {
        res.innerHTML = "<img src='assets/secrets/axe_secrets.png'>";
    } else if (code === "V0ID") {
        res.innerHTML = "<img src='assets/secrets/tvStatic.gif'>";
    } else {
        res.innerHTML = "Codigo invalido";
    }
}
// actualice todo menos esto XD