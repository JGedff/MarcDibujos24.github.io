import { useEffect, useState } from "react"
import { Carousel } from "./Carousel"
import { GoUp } from "./GoUp"
import { ShowImagesModal } from "./ShowImagesModal"

export const MainModal = ({ data: {...images} }) => {

    const [arrayImages, setArrayImages] = useState(images)

    useEffect(() => {
        setArrayImages(images)
    }, [images])
    
    return (
        <main>
            <Carousel></Carousel>

            <ShowImagesModal data={arrayImages}></ShowImagesModal>

            <GoUp></GoUp>
        </main>
    )
}