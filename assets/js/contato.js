window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.classList.add("hidden");

    document.getElementById('formContato').addEventListener('submit', function (event) {
        event.preventDefault(); 

        const mensagemDeAgradecimento = document.getElementById('mensagemDeAgradecimento');

        mensagemDeAgradecimento.style.display = 'block';
        mensagemDeAgradecimento.textContent = 'Obrigado por sua avaliação :)';

        this.reset();

        setTimeout(function () {
            mensagemDeAgradecimento.style.display = 'none';
        }, 3000);
    });
});
