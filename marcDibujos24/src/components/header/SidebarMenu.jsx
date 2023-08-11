import { useState } from "react";

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
        <>
            <div>
                <button className={'btn btn-info ml-3 mt-2 mb-3'} onClick={negateSidebar}>
                    {showSidebarButtonIcon(sidebar)}
                </button>
            </div>

            <div> { /* S'ha de fer un menú aqui */}
                <ul className={'p-3 m-0'}>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={handleClick}> Inicio </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showAbc}> ABC </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showAnime}> Anime </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showBn}> Blanco & Negro </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showDragonBall}> Dragon ball </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showFondos}> Fondos </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showFusiones}> Fusiones </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showGods}> Gods & Goddesses </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showInazuma}> Inazuma </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showNft}> NFT </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={showOc}> Personages Originales </a> </li>
                </ul>
            </div>
        </>
    )
}