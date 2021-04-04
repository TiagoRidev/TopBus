if(window.SimpleSlide) {

    new SimpleSlide({ 

    slide: 'quote', // nome do atributo data-slide="principal"
    auto: true, // se o slide deve passar automaticamente
    time: 5000, // tempo de transição dos slides
    pauseOnHover: true, // pausa a transição automática

    })

    new SimpleSlide({ 

        slide: 'portfolio', // nome do atributo data-slide="principal"
        auto: true, // se o slide deve passar automaticamente
        time: 5000, // tempo de transição dos slides
        pauseOnHover: true, // pausa a transição automática
        nav: true, /*consegue mexer na navegação através de botões */
    });
}

//SLIDE INDEX

if(window.SimpleAnime) {
    new SimpleAnime();
}

if(window.SimpleForm) {
    new SimpleForm({
        form:".form-php", // seletor do formulário
        button: "#enviar",  // seletor do botão
        erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente enviar um email para tiagobr.desenvolvedor@gmail.com </p></div>", // mensagem de erro
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve entraremos em contato</p></div>", // mensagem de envio com sucesso
});
}