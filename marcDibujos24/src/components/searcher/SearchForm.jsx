import { useState } from "react"
import { ChooseDoubleSearch } from "./ChooseDoubleSearch"
import { SearchValues } from "./SearchValues"

export const SearchForm = ({ showHideForm, resetSearcher, changeImgCategory, searchTitle, searchTwoCategories, searchImgInCategoryByTitle, searchImgByTwoTitles }) => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('abc')
    const [doubleSearch, setDoubleSearch] = useState(false)
    const [searchModal, setSearchModal] = useState('category')
    const [doubleSearchTitle, setDoubleSearchTitle] = useState('')
    const [doubleSearchCategory, setDoubleSearchCategory] = useState('abc')
    const [doubleSearchModal, setDoubleSearchModal] = useState('category')

    const switchDoubleSearch = () => {
        setDoubleSearch(!doubleSearch)
    }

    const changeModal = () => {
        const value = document.getElementById('selectSearchModal').value

        setSearchModal(value)
    }
    
    const changeDoubleSearchModal = () => {
        const value = document.getElementById('selectDoubleSearchModal').value

        setDoubleSearchModal(value)
    }

    const changeValue = (newValue) => {
        setTitle(newValue)
    }

    const changeCategory = (newCategory) => {
        setCategory(newCategory)
    }
    
    const changeDoubleValue = (newValue) => {
        setDoubleSearchTitle(newValue)
    }

    const changeDoubleCategory = (newCategory) => {
        setDoubleSearchCategory(newCategory)
    }

    const search = () => {
        if (doubleSearch) {
            if (searchModal === 'category' && doubleSearchModal === 'category') {
                searchTwoCategories(category, doubleSearchCategory)
            } else if (searchModal === 'category' && doubleSearchModal === 'title') {
                searchImgInCategoryByTitle(category, doubleSearchTitle)
            } else if (searchModal === 'title' && doubleSearchModal === 'category') {
                searchImgInCategoryByTitle(doubleSearchCategory, title)
            } else {
                searchImgByTwoTitles(title, doubleSearchTitle)
            }
        } else {
            if (searchModal === 'category') {
                changeImgCategory(category)
            } else {
                searchTitle(title)
            }
        }
    }

    const preventDefault = (e) => {
        e.preventDefault()
    }

    const handleStopSearch = () => {
        showHideForm()
        resetSearcher()
    }

    const handleSearch = () => {
        showHideForm()
        search()
    }

    return (
        <div>
            <h5>Buscar dibujo</h5>

            <div className={'d-flex align-items-center'} >
                <form className={'mb-4'} onSubmit={preventDefault}>
                    <div>
                        <label> Quiere buscar por dos categorias o una categoría y el nombre? </label>
                        <div>
                            <ChooseDoubleSearch handleClick={switchDoubleSearch} isDoubleSearchOn={doubleSearch} ></ChooseDoubleSearch>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="searchInput" className={'mt-3'} > Elije una opción </label>
                        <select name="searchInput" className={'form-control'} onClick={changeModal} id="selectSearchModal">
                            <option value={'category'}> Categoría </option>
                            <option value={'title'}> Titulo del dibujo </option>
                        </select>

                        <div>
                            <SearchValues idSelect={'a'} initialType={searchModal} changeValue={changeValue} changeCategory={changeCategory}></SearchValues>
                        </div>
                    </div>

                    <div style={{display: doubleSearch ? 'block' : 'none'}}>
                        <label htmlFor="searchInput" className={'mt-3'} > Elije una opción </label>
                        <select name="searchInput" className={'form-control'} onClick={changeDoubleSearchModal} id="selectDoubleSearchModal">
                            <option value={'category'}> Categoría </option>
                            <option value={'title'}> Titulo del dibujo </option>
                        </select>

                        <div>
                            <SearchValues idSelect={'b'} initialType={doubleSearchModal} changeValue={changeDoubleValue} changeCategory={changeDoubleCategory}></SearchValues>                
                        </div>
                    </div>

                    <button type="submit" className={'mt-3 btn btn-info'} formAction="data-dismiss='modal'" onClick={handleSearch}> Buscar </button>
                    <button type="submit" onClick={handleStopSearch} className={'mt-3 btn btn-danger'} formAction="data-dismiss='modal'"> Parar buscador </button>
                </form>
            </div>
        </div>
    )
}