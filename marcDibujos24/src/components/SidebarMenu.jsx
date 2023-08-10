export const SidebarMenu = () => {
    return (
        <>
            <div id="sidebarButton">
                <button className="btn btn-info ml-3 mt-2 mb-3" onClick={showSidebar()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={'bi bi-chevron-double-right" viewbox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z'} ></svg>
                </button>
            </div>

            <div id="sidebar">
                <ul className={'p-3 m-0'}>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadInfo()}> Sobre mi </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('ABC')}> ABC </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Anime')}> Anime </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Blanco_negro')}> Blanco & Negro </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Dragon ball')}> Dragon ball </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Fondos')}> Fondos </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Fusiones')}> Fusiones </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Gods & Goddesses')}> Gods & Goddesses </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('Inazuma')}> Inazuma </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('NFT')}> NFT </a> </li>
                    <li> <a href="#images" className={'rounded w-100 d-flex justify-content-center'} onClick={loadCategory('OC')}> Personages Originales </a> </li>
                </ul>
            </div>
        </>
    )
}