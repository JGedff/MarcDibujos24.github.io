export const Drawing = ({ title, src }) => {
    
    return (
        <div>
            <div className={'d-flex justify-content-center'}>
                <h4><strong> {title} </strong></h4>
            </div>
            
            <img src={src} alt={title} className={'img-thumbnail img-fluid custom-border'}/>
        </div>
    )
}