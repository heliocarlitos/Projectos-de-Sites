const logoMenu = document.getElementById('logoMenu');
logoMenu.innerHTML = `<span><i class='bx bx-menu'></i></span>`;

const menuMobile = document.getElementById('menuMobile');
function mostrarMenu(){
    menuMobile.style.display = 'flex'
}
function fecharMenu(){
    menuMobile.style.display = 'none'
}
// JA PARA ADICIONAR FUNDO NO MENU
window.addEventListener('scroll', function(){
    document.getElementById('logoLinksBtn').classList.toggle('bgHeader', window.scrollY > 120);
})

// JS PARA LIMITAR A QUANIDADE DE PALAVRAS NA DESCRICAO DOS fILMES
function limitarPalavras(paragrafos, limite) {
    paragrafos.forEach(function(paragrafo) {
        var textoOriginal = paragrafo.textContent;
        var palavras = textoOriginal.split(' ');

        if (palavras.length > limite) {
            var novoTexto = palavras.slice(0, limite).join(' ');
            paragrafo.textContent = novoTexto + '...';
        }
    });
}

// Selecionando todos os elementos com a classe "txdescricao" na página
var todosOsParagrafos = document.querySelectorAll('.txdescricao');

// Chamando a função para limitar a quantidade de palavras em todos os parágrafos com a classe "txdescricao" para 50 palavras cada
limitarPalavras(todosOsParagrafos, 50);

// JS PARA MUDAR O ANO DOS FILMES

function ano2023(){
let ano2023 = document.getElementById('ano2023');
let ano2024 = document.getElementById('ano2024');
let ano2025 = document.getElementById('ano2025');
let ano2026 = document.getElementById('ano2026');

    if(ano2023.style.display = 'none'){
        ano2023.style.display = 'block';
        ano2024.style.display = 'none';
        ano2025.style.display = 'none';
        ano2026.style.display = 'none';
    }
}

function ano2024(){
let ano2023 = document.getElementById('ano2023');
let ano2024 = document.getElementById('ano2024');
let ano2025 = document.getElementById('ano2025');
let ano2026 = document.getElementById('ano2026');

    if(ano2024.style.display = 'none'){
        ano2024.style.display = 'block';
        ano2023.style.display = 'none';
        ano2025.style.display = 'none';
        ano2026.style.display = 'none';
    }
}

function ano2025(){
    let ano2023 = document.getElementById('ano2023');
    let ano2024 = document.getElementById('ano2024');
    let ano2025 = document.getElementById('ano2025');
    let ano2026 = document.getElementById('ano2026');
    
        if(ano2025.style.display = 'none'){
            ano2025.style.display = 'block';
            ano2023.style.display = 'none';
            ano2024.style.display = 'none';
            ano2026.style.display = 'none';
        }
}

function ano2026(){
    let ano2023 = document.getElementById('ano2023');
    let ano2024 = document.getElementById('ano2024');
    let ano2025 = document.getElementById('ano2025');
    let ano2026 = document.getElementById('ano2026');
    
        if(ano2026.style.display = 'none'){
            ano2026.style.display = 'block';
            ano2023.style.display = 'none';
            ano2024.style.display = 'none';
            ano2025.style.display = 'none';
        }
}

// JA PARA MOSTRAR E FECHAR NOTIFICAO DE FILMES INDISPONIVEIS

function mostrarnotificaodefilmes () {
    document.getElementById('notificacao-defilme-ausente').style.display = 'flex'
}

function fecharnotificaodefilmes () {
    document.getElementById('notificacao-defilme-ausente').style.display = 'none'
}