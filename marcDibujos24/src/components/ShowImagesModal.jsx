import { Drawing } from "./Drawing"

export const ShowImagesModal = ({ data: { abc, anime, bn, dragonBall, fondos, fusiones, gods, inazuma, nft, oc } }) => {

    const getImagesFromArray = (arrayImages = []) => {
        let newArrayImages = []

        arrayImages.forEach((img, index) => {
            if (img !== null) {
                newArrayImages.push(<Drawing key={index} title={img.title} src={img.src}></Drawing>)
            }
        })

        return newArrayImages
    }

    return (
        <div className={'mt-3 mb-4'} >
            <h2>Dibujos</h2>
    
            <div className={'pb-5'} >

                {
                    !(abc === null) ?
                        <div>
                            <h3>Categoría ABC:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(abc)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(anime === null) ?
                        <div>
                            <h3>Categoría Anime:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(anime)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(bn === null) ?
                        <div>
                            <h3>Categoría Blanco & Negro:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(bn)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(dragonBall === null) ?
                        <div>
                            <h3>Categoría Dragon ball:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(dragonBall)
                                }
                            </div>
                        </div> : ''
                }
                
                {
                    !(fondos === null) ?
                        <div>
                            <h3>Categoría Fondos:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(fondos)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(fusiones === null) ?
                        <div>
                            <h3>Categoría Fusiones:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(fusiones)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(gods === null) ?
                        <div>
                            <h3>Categoría Gods & Goddesses:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(gods)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(inazuma === null) ?
                        <div>
                            <h3>Categoría Inazuma:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(inazuma)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(nft === null) ?
                        <div>
                            <h3>Categoría NFT:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(nft)
                                }
                            </div>
                        </div> : ''
                }

                {
                    !(oc === null) ?
                        <div>
                            <h3>Categoría Personajes Originales:</h3>
                            <div className='d-flex flex-wrap'>
                                {
                                    getImagesFromArray(oc)
                                }
                            </div>
                        </div> : ''
                }
            </div>
        </div>
    )
}
