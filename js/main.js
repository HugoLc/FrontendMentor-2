import InfoCard from '../js/info-card.js'


const infoCardParagrafo = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nullam vehicula ultricies convallis. Orci varius natoque 
    penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
    Quisque viverra dictum vestibulum. Fusce vitae erat ut metus 
    mollis luctus id eget ante. Class aptent taciti sociosqu ad litora 
    torquent per conubia nostra, per inceptos himenaeos.
`
const infoCard = new InfoCard(infoCardParagrafo);

document.addEventListener('click', () => {
    infoCard.excluirInfoCard();
});