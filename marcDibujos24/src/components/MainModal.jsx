import { Carousel } from "./Carousel"
import { GoUp } from "./GoUp"
import { SearcherModal } from "./SearcherModal"
import { ShowImagesModal } from "./ShowImagesModal"

export const MainModal = ({ arrayImages, resetSearcher }) => {
    
    return (
        <main>
            <Carousel initialImage={arrayImages.initialImage}></Carousel>

            <ShowImagesModal arrayImages={arrayImages}></ShowImagesModal>

            <SearcherModal resetSearcher={resetSearcher}></SearcherModal>

            <GoUp></GoUp>
        </main>
    )
}