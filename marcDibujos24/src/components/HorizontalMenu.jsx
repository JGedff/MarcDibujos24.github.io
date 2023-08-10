export const HorizontalMenu = () => {
    return (
        <div id="horzontalMenu">
            <ul className={'d-flex mt-5 align-items-center p-0'} >
                <li> <a href="#images" className={'rounded'} onClick={loadInfo()} > Sobre mi </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('ABC')}> ABC </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Anime')}> Anime </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Blanco_negro')}> Blanco & Negro </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Dragon ball')}> Dragon ball </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Fondos')}> Fondos </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Fusiones')}> Fusiones </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Gods & Goddesses')}> Gods & Goddesses </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('Inazuma')}> Inazuma </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('NFT')}> NFT </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={loadCategory('OC')}> Personages Originales </a> </li>
            </ul>
        </div>
    )
}