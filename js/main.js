import InfoCard from '../js/info-card.js'


const infoCardParagrafo = `
    Página criada atendendo as especificações do desafio proposto 
    no site Frontend Mentor. Praticado posicionamento de elementos,
    CSS grid e flex, inserção de SVG e link para utilização de ícones 
    em página externa.
`
var infoCard = new InfoCard(infoCardParagrafo);

document.addEventListener('click', () => {
    if(infoCard) {infoCard.excluirInfoCard();}
    infoCard = null;    
});