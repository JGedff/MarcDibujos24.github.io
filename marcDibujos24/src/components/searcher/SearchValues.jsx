import { useEffect, useState } from "react"

export const SearchValues = ({ idSelect, initialType, changeValue, changeCategory }) => {

    const [type, setType] = useState(initialType)

    useEffect(() => {
        setType(initialType)
    }, [initialType])

    const handleTextInput = () => {
        const value = document.getElementById(`${idSelect}selectTitle`).value

        changeValue(value.toLowerCase())
    }

    const handleSelectInput = () => {
        const value = document.getElementById(`${idSelect}selectCategory`).value

        changeCategory(value)
    }

    const getInputValues = (typeOfValues) => {
        if (typeOfValues === 'title') return (
            <div>
                <label htmlFor='input' className={'mt-3'}> Introduce el nombre del dibujo </label>
                <input type='text' className={'form-control'} name='input' onChange={handleTextInput} id={`${idSelect}selectTitle`} />
            </div>
        )
        else return (
            <div>
                <label htmlFor='input' className={'mt-3'}> Elije la categoría del dibujo </label>
                <select name="input" className={'form-control'} onClick={handleSelectInput} id={`${idSelect}selectCategory`}>
                    <option value={'abc'}> ABC </option>
                    <option value={'anime'}> Anime </option>
                    <option value={'bn'}> Blanco & Negro </option>
                    <option value={'dragonBall'}> Dragon ball </option>
                    <option value={'fondos'}> Fondos </option>
                    <option value={'fusiones'}> Fusiones </option>
                    <option value={'gods'}> Gods & Goddesses </option>
                    <option value={'inazuma'}> Inazuma </option>
                    <option value={'nft'}> NFT</option>
                    <option value={'oc'}> Personajes Originales </option>
                </select>
            </div>
        )
    }

    return (
        getInputValues(type)
    )
}