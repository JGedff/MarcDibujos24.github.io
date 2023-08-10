export const SearcherModal = ({ resetSearcher }) => {

    const handleClick = () => {
        searchField()
        checkDoubleSearch()
    }

    return (
        <>
            <button className={'btn btn-info'} id="search" onClick={handleClick} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={'bi bi-search" viewbox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'} ></svg>
                Buscar
            </button>

            <dialog className={'popup_dialogSearcher border-blue rounded w-50'} id="dialogSearcher">
                <div className={'rounded d-flex justify-content-center'} >
                    <div>
                        <h5>Buscar dibujo</h5>

                        <div className={'d-flex align-items-center'} >
                            <form className={'mb-4'}  onsubmit="searchField(); event.preventDefault();">

                                <div>
                                    <label> Quiere buscar por dos categorias o una categoría y el nombre? </label>
                                    <div>
                                        <input type="checkbox" name="doubleSearh" id="doubleSearchYes" onClick={checkDoubleSearch} />
                                        <label for="doubleSearchYes" className={'mr-3 mb-2'} > Si </label>
                                    </div>
                                </div>

                                <label for="searchInput" className={'mt-3'} > Elije una opción </label>
                                <select name="searchInput" className={'form-control'} id="searchInput" onClick={searchField}>
                                    <option value="title"> Titulo del dibujo </option>
                                    <option value="category"> Categoría </option>
                                </select>
            
                                <div id="resultSearchInput">
            
                                </div>

                                <div id="resultDoubleSearch">
                                    <label for="inputDoubleSearch" className={'mt-3'}> Elije una categoría </label>
                                    <select name="input" className={'form-control'} id="inputDoubleSearch">
                                        <option value="ABC"> ABC </option>
                                        <option value="Anime"> Anime </option>
                                        <option value="Blanco_negro"> Blanco & Negro </option>
                                        <option value="Dragon ball"> Dragon ball </option>
                                        <option value="Fondos"> Fondos </option>
                                        <option value="Fusiones"> Fusiones </option>
                                        <option value="Gods & Goddesses"> Gods & Goddesses </option>
                                        <option value="Inazuma"> Inazuma </option>
                                        <option value="NFT"> NFT</option>
                                        <option value="OC"> Personajes Originales </option>
                                    </select>
                                </div>

                                <button type="submit" onClick={searchDraw} className={'mt-3 btn btn-info'} action="data-dismiss='modal'"> Buscar </button>
                                <button type="submit" onClick={resetSearcher} className={'mt-3 btn btn-danger'} action="data-dismiss='modal'"> Parar buscador </button>
                            </form>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}