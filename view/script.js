const url = "http://localhost:8080/product/fa246564-a4bc-43af-918e-3151a84753a1";


function hideLoader(){
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
        document.getElementById("nomeProdutoLabel").textContent = data.name;

        
    } catch (error) {
        console.error("Erro ao obter dados da API:", error.message);
    }
}


getAPI(url);


