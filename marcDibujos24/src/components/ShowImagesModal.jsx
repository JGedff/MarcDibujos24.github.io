import { Drawing } from "./Drawing"

export const ShowImagesModal = ({ arrayImages }) => {

    return (
        <div className={'mt-3 mb-4'} >
            <h2>Dibujos</h2>
    
            <div className={'pb-5'} >

                {
                    arrayImages.abc ?
                        <>
                            <h3>Categoría ABC:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.abc.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.anime ?
                        <>
                            <h3>Categoría Anime:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.anime.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.bn ?
                        <>
                            <h3>Categoría Blanco & Negro:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.bn.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.dragonBall ?
                        <>
                            <h3>Categoría Dragon ball:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.dragonBall.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }
                
                {
                    arrayImages.fondos ?
                        <>
                            <h3>Categoría Fondos:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.fondos.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.fusiones ?
                        <>
                            <h3>Categoría Fusiones:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.fusiones.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.gods ?
                        <>
                            <h3>Categoría Gods & Goddesses:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.gods.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.inazuma ?
                        <>
                            <h3>Categoría Inazuma:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.inazuma.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.nft ?
                        <>
                            <h3>Categoría NFT:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.nft.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }

                {
                    arrayImages.oc ?
                        <>
                            <h3>Categoría Personajes Originales:</h3>
                            <div class='d-flex flex-wrap'>
                                {
                                    arrayImages.oc.forEach(img => (
                                        <Drawing title={img.title} src={img.src}></Drawing>
                                    ))
                                }
                            </div>
                        </> : ''
                }
            </div>
        </div>
    )
}
