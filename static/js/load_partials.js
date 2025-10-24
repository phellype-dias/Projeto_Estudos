// Função para carregar partes do HTML
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao carregar ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error(error));
}

// Carregando as partes do HTML da pasta 'partials'
loadHTML("header", "./template/partials/_header.html");
loadHTML("footer", "./template/partials/_footer.html");