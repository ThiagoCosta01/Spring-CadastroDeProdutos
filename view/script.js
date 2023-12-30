document.addEventListener('DOMContentLoaded', function () {
    
    const url = "http://localhost:8080/product";
    const btn = document.querySelector("#botaoDeCadastro");
    const iproduto = document.getElementById('nomeProduto');
    const ivalor = document.querySelector('#valorProduto');


function hideLoader() {
    document.getElementById("loading").style.display = "none";
}

async function getAPI(url) {
    try {
        const response = await fetch(url, {
            method: "GET"
        });

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        setTimeout(hideLoader, 1000);

    } catch (error) {
        console.error("Erro ao obter dados da API:", error.message);
    }
}

function limpar() {
    document.getElementById('nomeProduto').value = "";
    document.getElementById('valorProduto').value = "";
    document.getElementById('descricaoProduto').value = "";

}

function cadastrar() {
    const url = "http://localhost:8080/product";

    fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: document.getElementById('nomeProduto').value,
            value: document.getElementById('valorProduto').value,
            description: document.getElementById('descricaoProduto').value
        })
    })
    .then(response => {
        if (!response.ok) {
            alert(`Erro na requisição: ${response.status}`);
            throw new Error(`Erro na requisição: ${response.status}`);
        }
        // Faça algo com a resposta se necessário
        
        
        console.log(response.ok);  // Isso retorna uma Promise também
    })
    .then(data => {
        // Faça algo com os dados, se necessário

        alert("data.name");
        limpar();
        console.log(data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

getAPI(url);

btn.addEventListener("click", cadastrar);
});