// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML


const botoes_expandir_retrair= document.querySelectorAll(".botao-expandir-retrair");


for (let botao of botoes_expandir_retrair) {

    botao.addEventListener("click", (e) => {
        
        // Refeencia do elemento | pai
        let clicked_el = e.currentTarget;
        let parent_el = clicked_el.parentNode;

        // Confere o status do botão
        let status = clicked_el.innerHTML;
        if(status === "+") { // Retraído
            parent_el.classList.add('expandido');
            clicked_el.innerHTML = "-"
        } 
        else { // Expandido
            parent_el.classList.remove('expandido');
            clicked_el.innerHTML = "+"
        }
        
    })
}