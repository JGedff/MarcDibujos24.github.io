export const HorizontalMenu = ({
    handleClick,
    showAbc,
    showAnime,
    showBn,
    showDragonBall,
    showFondos,
    showFusiones,
    showGods,
    showInazuma,
    showNft,
    showOc
}) => {
    
    return (
        <div id="horzontalMenu">
            <ul className={'d-flex mt-5 align-items-center p-0'} >
                <li> <a href="#images" className={'rounded'} onClick={handleClick} > Sobre mi </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showAbc}> ABC </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showAnime}> Anime </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showBn}> Blanco & Negro </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showDragonBall}> Dragon ball </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showFondos}> Fondos </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showFusiones}> Fusiones </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showGods}> Gods & Goddesses </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showInazuma}> Inazuma </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showNft}> NFT </a> </li>
                <li> <a href="#images" className={'rounded'} onClick={showOc}> Personages Originales </a> </li>
            </ul>
        </div>
    )
}