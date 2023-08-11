import { Carousel } from "./Carousel"
import { GoUp } from "./GoUp"
import { ShowImagesModal } from "./ShowImagesModal"

export const MainModal = ({ arrayImages }) => {
    
    return (
        <main>
            <Carousel initialImage={arrayImages.initialImage}></Carousel>

            <ShowImagesModal arrayImages={arrayImages}></ShowImagesModal>

            <GoUp></GoUp>
        </main>
    )
}