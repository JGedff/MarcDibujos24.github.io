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
        <div>
            <button data-testid='search' className={'btn btn-info position-fixed b-15 r-15'} onClick={handleClick} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>
                Buscar
            </button>

            <dialog className={'position-fixed t-25 zIndex-max border-blue rounded w-50'} style={{ display: getDisplay(showForm) }}>
                <div className={'rounded d-flex justify-content-center'} >
                    <SearchForm
                        showHideForm={handleClick}
                        resetSearcher={resetSearcher}
                        changeImgCategory={changeCategory}
                        searchTitle={searchImgTitle} 
                        searchTwoCategories={searchTwoCategories}
                        searchImgInCategoryByTitle={searchImgInCategoryByTitle}
                        searchImgByTwoTitles={searchImgByTwoTitles} >
                    </SearchForm>
                </div>
            </dialog>
        </div>
    )
}