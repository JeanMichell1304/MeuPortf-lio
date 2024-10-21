document.addEventListener('DOMContentLoaded', function () {
    const conteudo = document.querySelector('.apresentacao_conteudo');
    console.log('DOM fully loaded and parsed');
    if (conteudo) {
        conteudo.classList.add('visible');
        console.log('Classe "visible" adicionada');
    }
});
