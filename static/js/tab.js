function openTab(event, tabId) {
    // Remove a classe 'active' de todos os botões e conteúdos
    const tabs = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".tab-pane");
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Adiciona a classe 'active' no botão e no conteúdo da aba clicada
    event.currentTarget.classList.add("active");
    document.getElementById(tabId).classList.add("active");
}
