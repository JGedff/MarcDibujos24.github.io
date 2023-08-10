import { abc } from "../database/abc";
import { anime } from "../database/anime";
import { blanco_negro } from "../database/blanco&negro";
import { dragonBall } from "../database/dragonBall";
import { fondos } from "../database/fondos";
import { fusiones } from "../database/fusiones";
import { gods } from "../database/gods";
import { inazuma } from "../database/inazuma";
import { nft } from "../database/nft";
import { oc } from "../database/oc";

export const getCollection = (name) => {
    switch (name) {
        case 'abc':
            return getAbcImg()
        case 'anime':
            return getAnimeImg()
        case 'bn':
            return getBNImg()
        case 'dragonBall':
            return getDragonBallImg()
        case 'fondos':
            return getFondosImg()
        case 'fusiones':
            return getFusionesImg()
        case 'gods':
            return getGodsImg()
        case 'inazuma':
            return getInazumaImg()
        case 'nft':
            return getNFTImg()
        case 'oc':
            return getOCImg()
        default:
            return []
    }
}

export const getAbcImg = () => {
    let newArray = []

    abc.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getAnimeImg = () => {
    let newArray = []

    anime.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getBNImg = () => {
    let newArray = []

    blanco_negro.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getDragonBallImg = () => {
    let newArray = []

    dragonBall.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getFondosImg = () => {
    let newArray = []

    fondos.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getFusionesImg = () => {
    let newArray = []

    fusiones.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getGodsImg = () => {
    let newArray = []

    gods.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getInazumaImg = () => {
    let newArray = []

    inazuma.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getNFTImg = () => {
    let newArray = []

    nft.forEach(img => {
        newArray.push(img)
    })

    return newArray
}

export const getOCImg = () => {
    let newArray = []

    oc.forEach(img => {
        newArray.push(img)
    })
    
    return img
}

export const getInitialImage = () => {
    let newArray = []

    fondos.forEach(img => {
        if (img.title === 'Portada') {
            newArray.push(img)
        }
    })
    
    return img
}