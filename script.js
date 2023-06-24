function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light-mode");

    const img = document.querySelector("#avatar img");

    if (html.classList.contains('light-mode')) {
        img.setAttribute("src", "./assets/avatar-light-mode.jpg");
        img.setAttribute("alt", "Foto de João Antônio sorrindo com óculos escuros");
    }
    else {
        img.setAttribute("src", "./assets/avatar-joao.jpg");
        img.setAttribute("alt", "Foto de João Antônio sorrindo");
    }
}
