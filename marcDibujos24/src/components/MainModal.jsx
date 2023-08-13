import { useEffect, useState } from "react"
import { Carousel } from "./Carousel"
import { GoUp } from "./GoUp"
import { ShowImagesModal } from "./ShowImagesModal"

export const MainModal = ({ data: { abc, anime, bn, dragonBall, fondos, fusiones, gods, inazuma, nft, oc } }) => {
    
    const getImages = () => {
        let allImages = {
            abc: [],
            anime: [],
            bn: [],
            dragonBall: [],
            fondos: [],
            fusiones: [],
            gods: [],
            inazuma: [],
            nft: [],
            oc: []
        }

        abc ? abc.forEach(img => {
            allImages.abc.push(img)
        }) : allImages.abc = null
        
        anime ? anime.forEach(img => {
            allImages.anime.push(img)
        }) : allImages.anime = null

        bn ? bn.forEach(img => {
            allImages.bn.push(img)
        }) : allImages.bn = null

        dragonBall ? dragonBall.forEach(img => {
            allImages.dragonBall.push(img)
        }) : allImages.dragonBall = null

        fondos ? fondos.forEach(img => {
            allImages.fondos.push(img)
        }) : allImages.fondos = null

        fusiones ? fusiones.forEach(img => {
            allImages.fusiones.push(img)
        }) : allImages.fusiones = null

        gods ? gods.forEach(img => {
            allImages.gods.push(img)
        }) : allImages.gods = null

        inazuma ? inazuma.forEach(img => {
            allImages.inazuma.push(img)
        }) : allImages.inazuma = null

        nft ? nft.forEach(img => {
            allImages.nft.push(img)
        }) : allImages.nft = null

        oc ? oc.forEach(img => {
            allImages.oc.push(img)
        }) : allImages.oc = null

        return allImages
    }

    const [arrayImages, setArrayImages] = useState(getImages())

    useEffect(() => {
        setArrayImages(getImages())
    }, [ abc, anime, bn, dragonBall, fondos, fusiones, gods, inazuma, nft, oc ])

    return (
        <main>
            <Carousel></Carousel>

            <ShowImagesModal data={arrayImages} ></ShowImagesModal>

            <GoUp></GoUp>
        </main>
    )
}