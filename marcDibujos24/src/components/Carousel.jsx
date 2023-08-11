
export const Carousel = ({ initialImage }) => {
    
    return (
        <div className={'d-flex wrap-none img-thumbnail'} >
            <div className={'insideCarousel'} >
                <Drawing src={initialImage.src} title={initialImage.title}></Drawing>
            </div>
        </div>
    )
}