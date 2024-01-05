// JS PARA ALTERAR TEMA DAS PAGINAS ENTRE DARK E LIGHT
const btnTheme = document.getElementById('theme-mod');
const btnTheme2 = document.getElementById('theme-mod2');
const logoimg = document.getElementById('logo-do-site');
const logoimg2 = document.getElementById('logo-do-site2');
const menulogo = document.getElementById('menu-logo');
const themeSystem = localStorage.getItem('themeSystem') || 'light'

btnTheme.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light';
    let newTheme = oldTheme == 'light' ? 'dark' : 'light'

    localStorage.setItem('themeSystem', newTheme)
    changeMod(newTheme)
})
btnTheme2.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light';
    let newTheme = oldTheme == 'light' ? 'dark' : 'light'

    localStorage.setItem('themeSystem', newTheme)
    changeMod(newTheme)
})
function changeMod(theme) {
    const darkSvg = '<span class="material-symbols-outlined">dark_mode</span>'
    const darkSvg2 = '<span class="material-symbols-outlined">dark_mode</span>'
    const lightSvg = '<span class="material-symbols-outlined">light_mode</span>'
    const lightSvg2 = '<span class="material-symbols-outlined">light_mode</span>'

    const imgdark = '<img src="imagens/logo_branco.png" alt="Logo do HCA">'
    const imgdark2 = '<img src="imagens/logo_branco.png" alt="Logo do HCA">'
    const imglight = '<img src="imagens/logo_azul.png" alt="Logo do HCA">'
    const imglight2 = '<img src="imagens/logo_azul.png" alt="Logo do HCA">'

    document.documentElement.setAttribute('data-theme', theme)
    if (theme == 'dark') {
        btnTheme.innerHTML = darkSvg;
        btnTheme2.innerHTML = darkSvg2;

        logoimg.innerHTML = imgdark;
        logoimg2.innerHTML = imgdark2;
    }
    else {
        btnTheme.innerHTML = lightSvg;
        btnTheme2.innerHTML = lightSvg2;

        logoimg.innerHTML = imglight;
        logoimg2.innerHTML = imglight2;

    }
}
changeMod(themeSystem)

// 

const cabecalho = document.getElementById('header')

function mostrarmenu(){
    cabecalho.style.display = 'block'
    document.getElementById('fundo-desfocado').style.display = 'block';
}

function ocultarmenu(){
    cabecalho.style.display = 'none';
    document.getElementById('fundo-desfocado').style.display = 'none';
}



// JS PARA REDICIONAR PARA O ERRO 404
document.addEventListener('click', function (event) {
    // Verifica se o clique foi em um link
    if (event.target.tagName === 'A') {
        // Obtém o destino do link
        var targetUrl = event.target.href;

        // Faz uma requisição HEAD para verificar se o link existe
        var xhr = new XMLHttpRequest();
        xhr.open('HEAD', targetUrl, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 404) {
                    // Se a página não existir, redireciona para a página de erro 404
                    window.location.href = 'paginas/erro404.html';
                } else {
                    // Se a página existir, segue normalmente
                    window.location.href = targetUrl;
                }
            }
        };
        xhr.send();

        // Impede o comportamento padrão do link (navegação)
        event.preventDefault();
    }
});

// JS PARA VOLTARA ATRAS
function goBack() {
    window.history.back();
}

// JS PARA COOKIES
const sscaoCookies = document.getElementById('sseccao-de-cookies');

function aceiteicookies(){
    localStorage.SalvarCookies = 'Cookies-Salvo'
    sscaoCookies.classList.remove('mostrar')
}
if(localStorage.SalvarCookies == 'Cookies-Salvo'){
    sscaoCookies.classList.remove('mostrar')
}
else{
    sscaoCookies.classList.add('mostrar')
}

// JS PARA ATUALIZAR O ANO DO RODAPÉ
function updateYearOnFooter() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    
    // Obtém o elemento com o ID 'footer-current-year'
    const yearElement = document.getElementById('footer-current-year');
    
    // Verifica se o ano já foi adicionado anteriormente
    if (!yearElement.textContent.includes(currentYear)) {
        // Adiciona o ano atual antes do "H" apenas se ainda não estiver presente
        yearElement.innerHTML = `${currentYear} ${yearElement.innerHTML}`;
    }
}
updateYearOnFooter();
