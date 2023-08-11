import { useEffect, useState } from "react"

export const ChooseDoubleSearch = ({ handleClick, isDoubleSearchOn }) => {

    const getWord = (doubleSearchOn) => {
        return doubleSearchOn ? 'No' : 'Si'
    }

    const [buttonText, setButtonText] = useState(getWord(isDoubleSearchOn))

    useEffect(() => {
        setButtonText(getWord(isDoubleSearchOn))
    }, [isDoubleSearchOn])

    return (
        <button className="btn btn-info" onClick={handleClick}> {buttonText} </button>
    )
}