import { useState } from "react";
import { showSidebarButtonIcon } from "../../js/sidebar";

export const SidebarMenu = ({
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
    
    const [sidebar, setSidebar] = useState(false)

    const negateSidebar = () => {
        setSidebar(!sidebar)
    }

    return (
        <div>
            <div>
                <button className={'btn btn-info ml-3 mt-2 mb-3'} id="sidebarButton" onClick={negateSidebar}>
                    {showSidebarButtonIcon(sidebar)}
                </button>
            </div>

            <div id="sidebar" style={{ display: sidebar ? 'block' : 'none' }}>
                <ul className={'p-3 m-0'}>
                    <li> <button data-testid='home' className={'rounded w-100 d-flex justify-content-center'} onClick={handleClick}> Inicio </button> </li>
                    <li> <button data-testid='categoryAbc' className={'rounded w-100 d-flex justify-content-center'} onClick={showAbc}> ABC </button> </li>
                    <li> <button data-testid='categoryAnime' className={'rounded w-100 d-flex justify-content-center'} onClick={showAnime}> Anime </button> </li>
                    <li> <button data-testid='categoryBn' className={'rounded w-100 d-flex justify-content-center'} onClick={showBn}> Blanco & Negro </button> </li>
                    <li> <button data-testid='categoryDragonBall' className={'rounded w-100 d-flex justify-content-center'} onClick={showDragonBall}> Dragon ball </button> </li>
                    <li> <button data-testid='categoryFondos' className={'rounded w-100 d-flex justify-content-center'} onClick={showFondos}> Fondos </button> </li>
                    <li> <button data-testid='categoryFusiones' className={'rounded w-100 d-flex justify-content-center'} onClick={showFusiones}> Fusiones </button> </li>
                    <li> <button data-testid='categoryGods' className={'rounded w-100 d-flex justify-content-center'} onClick={showGods}> Gods & Goddesses </button> </li>
                    <li> <button data-testid='categoryInazuma' className={'rounded w-100 d-flex justify-content-center'} onClick={showInazuma}> Inazuma </button> </li>
                    <li> <button data-testid='categoryNft' className={'rounded w-100 d-flex justify-content-center'} onClick={showNft}> NFT </button> </li>
                    <li> <button data-testid='categoryOc' className={'rounded w-100 d-flex justify-content-center'} onClick={showOc}> Personages Originales </button> </li>
                </ul>
            </div>
        </div>
    )
}