

export default class InfoCard {
    #titulo = 'Sobre o projeto';
    #textoParagrafo;
    #fundoId = '#id-fundo';
    #classesCSS = {
        fundo : '.info',
        card : '.info-card',
        titulo : '.titulo-info-card',
        paragrafo : '.paragrafo-info-card',
        sair : '.exit-info-card' 
    }

    constructor(paragrafo){
        this.#textoParagrafo = paragrafo;
        this.#gerarInfoCard(this.#textoParagrafo, this.#classesCss);
    }

    #gerarInfoCard(paragrafo, classes){
        let cardHtml = `
            <div class="${this.#classesCSS.fundo}">
                <div class="${this.#classesCSS.card}">
                    <h3 class="${this.#classesCSS.titulo}">
                        <span>${this.#titulo}</span> 
                        <i class="fas fa-times ${this.#classesCSS.sair}"></i>
                    </h3>
                    <p class="${this.#classesCSS.paragrafo}">
                        ${this.#textoParagrafo}
                    </p>
                </div>
            </div>
        `
        let bodyElement = this.#pegarBody();
        let bodyHtml = bodyElement.innerHTML;
        bodyElement.innerHTML = bodyHtml + bodyElement.innerHTML;
    }

    #pegarBody(){
        let bodyLista = document.getElementsByTagName('body');
        return (bodyLista[0]);
    }

    excluirInfoCard(){
        let elementoInfo = document.getElementById(this.#fundoId);
        elementoInfo.parentNode.removeChild(elementoInfo);
    }
}