import { useEffect, useState } from "react"

export const SearchValues = ({ initialType, changeValue, changeCategory }) => {

    const [type, setType] = useState(initialType)

    useEffect(() => {
        setType(initialType)
    }, [initialType])

    const handleTextInput = (value) => {
        changeValue(value)
    }

    const selectAbcCategory = () => {
        changeCategory('abc')
    }
    
    const selectAnimeCategory = () => {
        changeCategory('anime')
    }

    const selectBnCategory = () => {
        changeCategory('bn')
    }

    const selectDragonBallCategory = () => {
        changeCategory('dragonBall')
    }

    const selectFondosCategory = () => {
        changeCategory('fondos')
    }

    const selectFusionesCategory = () => {
        changeCategory('fusiones')
    }

    const selectGodsCategory = () => {
        changeCategory('gods')
    }

    const selectInazumaCategory = () => {
        changeCategory('inazuma')
    }

    const selectNftCategory = () => {
        changeCategory('nft')
    }

    const selectOcCategory = () => {
        changeCategory('oc')
    }

    const getInputValues = (typeOfValues) => {
        if (typeOfValues === 'title') return (
            <div>
                <label htmlFor='input' className={'mt-3'}> Introduce el nombre del dibujo </label>
                <input type='text' className={'form-control'} name='input' onChange={handleTextInput} />
            </div>
        )
        else return (
            <div>
                <label htmlFor='input' className={'mt-3'}> Elije la categoría del dibujo </label>
                <select name="input" className={'form-control'}>
                    <option onClick={selectAbcCategory}> ABC </option>
                    <option onClick={selectAnimeCategory}> Anime </option>
                    <option onClick={selectBnCategory}> Blanco & Negro </option>
                    <option onClick={selectDragonBallCategory}> Dragon ball </option>
                    <option onClick={selectFondosCategory}> Fondos </option>
                    <option onClick={selectFusionesCategory}> Fusiones </option>
                    <option onClick={selectGodsCategory}> Gods & Goddesses </option>
                    <option onClick={selectInazumaCategory}> Inazuma </option>
                    <option onClick={selectNftCategory}> NFT</option>
                    <option onClick={selectOcCategory}> Personajes Originales </option>
                </select>
            </div>
        )
    }

    return (
        getInputValues(type)
    )
}