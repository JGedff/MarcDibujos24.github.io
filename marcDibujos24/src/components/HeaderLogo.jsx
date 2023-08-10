export const HeaderLogo = () => {
    return (
        <a href="#" onClick={showImages()}>
            <div className={'d-flex justify-content-center align-items-center mt-3'}>
                <img src="./img/icon.png" alt="Logo" id="logo" />
                <h1>Marc dibujos</h1>
            </div>
        </a>
    )
}