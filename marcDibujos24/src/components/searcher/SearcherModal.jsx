import { useState } from "react"
import { SearchForm } from "./SearchForm"

export const SearcherModal = ({
    resetSearcher,
    changeCategory,
    searchImgTitle,
    searchTwoCategories,
    searchImgInCategoryByTitle,
    searchImgByTwoTitles
}) => {

    const [showForm, setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(!showForm)
    }

    const getDisplay = (boolean) => {
        return boolean ? 'block' : 'none'
    }

    return (
        <>
            <button className={'btn btn-info'} onClick={handleClick} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={'bi bi-search" viewbox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z'} ></svg>
                Buscar
            </button>

            <dialog className={'popup_dialogSearcher border-blue rounded w-50'} style={{ display: getDisplay(showForm) }}>
                <div className={'rounded d-flex justify-content-center'} >
                    <div>
                        <h5>Buscar dibujo</h5>
    
                        <div className={'d-flex align-items-center'} >
                            <SearchForm
                                resetSearcher={resetSearcher}
                                changeImgCategory={changeCategory}
                                searchTitle={searchImgTitle} 
                                searchTwoCategories={searchTwoCategories}
                                searchImgInCategoryByTitle={searchImgInCategoryByTitle}
                                searchImgByTwoTitles={searchImgByTwoTitles} >
                            </SearchForm>
                        </div>
                    </div>
                </div>
            </dialog>
        </>
    )
}