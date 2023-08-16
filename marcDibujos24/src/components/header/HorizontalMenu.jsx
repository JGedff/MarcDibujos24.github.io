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
            <ul className={'d-flex mt-5 justify-content-around p-0'} >
                <li> <button data-testid='home' className={'rounded'} onClick={handleClick} > Inicio </button> </li>
                <li> <button data-testid='categoryAbc' className={'rounded'} onClick={showAbc}> ABC </button> </li>
                <li> <button data-testid='categoryAnime' className={'rounded'} onClick={showAnime}> Anime </button> </li>
                <li> <button data-testid='categoryBn' className={'rounded'} onClick={showBn}> Blanco & Negro </button> </li>
                <li> <button data-testid='categoryDragonBall' className={'rounded'} onClick={showDragonBall}> Dragon ball </button> </li>
                <li> <button data-testid='categoryFondos' className={'rounded'} onClick={showFondos}> Fondos </button> </li>
                <li> <button data-testid='categoryFusiones' className={'rounded'} onClick={showFusiones}> Fusiones </button> </li>
                <li> <button data-testid='categoryGods' className={'rounded'} onClick={showGods}> Gods & Goddesses </button> </li>
                <li> <button data-testid='categoryInazuma' className={'rounded'} onClick={showInazuma}> Inazuma </button> </li>
                <li> <button data-testid='categoryNft' className={'rounded'} onClick={showNft}> NFT </button> </li>
                <li> <button data-testid='categoryOc' className={'rounded'} onClick={showOc}> Personages Originales </button> </li>
            </ul>
        </div>
    )
}