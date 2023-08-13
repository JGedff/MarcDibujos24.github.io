import { useState } from "react"
import { ChooseDoubleSearch } from "./ChooseDoubleSearch"
import { SearchValues } from "./SearchValues"

export const SearchForm = ({ resetSearcher, changeImgCategory, searchTitle, searchTwoCategories, searchImgInCategoryByTitle, searchImgByTwoTitles }) => {

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [searchModal, setSearchModal] = useState('')
    const [doubleSearch, setDoubleSearch] = useState(false)
    const [doubleSearchModal, setDoubleSearchModal] = useState('')
    const [doubleSearchTitle, setDoubleSearchTitle] = useState('')
    const [doubleSearchCategory, setDoubleSearchCategory] = useState('')

    const switchDoubleSearch = () => {
        setDoubleSearch(!doubleSearch)
    }

    const searchByTitle = () => {
        setSearchModal('title')
    }

    const searchByCategory = () => {
        setSearchModal('category')
    }
    
    const searchDoubleByTitle = () => {
        setDoubleSearchModal('title')
    }

    const searchDoubleByCategory = () => {
        setDoubleSearchModal('category')
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

    return (
        <form className={'mb-4'} >

            <div>
                <label> Quiere buscar por dos categorias o una categoría y el nombre? </label>
                <div>
                    <ChooseDoubleSearch handleClick={switchDoubleSearch} isDoubleSearchOn={doubleSearch} ></ChooseDoubleSearch>
                </div>
            </div>

            <div>
                <label htmlFor="searchInput" className={'mt-3'} > Elije una opción </label>
                <select name="searchInput" className={'form-control'}>
                    <option onClick={searchByTitle}> Titulo del dibujo </option>
                    <option onClick={searchByCategory}> Categoría </option>
                </select>

                <div>
                    <SearchValues initialType={searchModal} changeValue={changeValue} changeCategory={changeCategory}></SearchValues>
                </div>
            </div>

            <div style={{display: doubleSearch ? 'block' : 'none'}}>
                <label htmlFor="searchInput" className={'mt-3'} > Elije una opción </label>
                <select name="searchInput" className={'form-control'}>
                    <option onClick={searchDoubleByTitle}> Titulo del dibujo </option>
                    <option onClick={searchDoubleByCategory}> Categoría </option>
                </select>

                <div>
                    <SearchValues initialType={doubleSearchModal} changeValue={changeDoubleValue} changeCategory={changeDoubleCategory}></SearchValues>                
                </div>
            </div>

            <button type="submit" className={'mt-3 btn btn-info'} formAction="data-dismiss='modal'" onClick={search}> Buscar </button>
            <button type="submit" onClick={resetSearcher} className={'mt-3 btn btn-danger'} formAction="data-dismiss='modal'"> Parar buscador </button>
        </form>
    )
}