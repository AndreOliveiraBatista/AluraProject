function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa);

    //se campoPesquisa for uma string vazia
    if(campoPesquisa == ""){
        section.innerHTML = "Nenhum resultado foi encontado";
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

// para cada lado dentro da lista de dados
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase();
    descricao = dado.descricao.toLowerCase();
    tags = dado.tags.toLowerCase();
    // Se título includes campoPesquisa
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
        console.log(dado.titulo.includes(campoPesquisa))
    resultados += `
        <div class="item-resultado">
            <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href= ${dado.link} target="_blank">Aproveite um joguinho</a>
        </div> 
`;
    }
}

if (!resultados){
    resultados = "<p>nenhum resultado foi encontrado</p>"
}

section.innerHTML = resultados
}





               
