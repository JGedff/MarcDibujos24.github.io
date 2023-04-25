function loadInfo() {
    document.getElementById('info').style.display = 'block';
    document.getElementById('dibujos').style.display = 'none';

    loadImages(arrayImagenes);
}

function showImages() {
    loadImages(arrayImagenes);
}

function loadImages(object) {
    let html = "<div>";

    if (object.abc != null) {
        html = html + "<h3>Categoría ABC:</h3><div class='d-flex flex-wrap'>";
        
        object.abc.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.anime != null) {
        html = html + "<h3>Categoría Anime:</h3><div class='d-flex flex-wrap'>";
        
        object.anime.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.cabezones != null) {
        html = html + "<h3>Categoría Cabezones:</h3><div class='d-flex flex-wrap'>";

        object.cabezones.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.criaturas != null) {
        html = html + "<h3>Categoría Criaturas:</h3><div class='d-flex flex-wrap'>";

        object.criaturas.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }
    
    html = html + "</div><div>";

    if (object.digital != null) {
        html = html + "<h3>Categoría Digital:</h3><div class='d-flex flex-wrap'>";

        object.digital.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.dragonBall != null) {
        html = html + "<h3>Categoría Dragon ball:</h3><div class='d-flex flex-wrap'>";

        object.dragonBall.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.fondos != null) {
        html = html + "<h3>Categoría Fondos:</h3><div class='d-flex flex-wrap'>";

        object.fondos.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.gods != null) {
        html = html + "<h3>Categoría Gods & Goddesses:</h3><div class='d-flex flex-wrap'>";

        object.gods.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.inazuma != null) {
        html = html + "<h3>Categoría Inazuma eleven:</h3><div class='d-flex flex-wrap'>";

        object.inazuma.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.nft != null) {
        html = html + "<h3>Categoría NFT:</h3><div class='d-flex flex-wrap'>";

        object.nft.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.sketch != null) {
        html = html + "<h3>Categoría Sketch:</h3><div class='d-flex flex-wrap'>";

        object.sketch.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.wwe != null) {
        html = html + "<h3>Categoría WWE:</h3><div class='d-flex flex-wrap'>";

        object.wwe.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.cn != null) {
        html = html + "<h3>Categoría ©️N:</h3><div class='d-flex flex-wrap'>";

        object.cn.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div>";

    document.getElementById('images').innerHTML = html;
}

function loadCategory(cat) {
    let html = "";

    if (cat == "Digital") {
        html = html + "<h3>Categoría Digital:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.digital.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Gods & Goddesses") {
        html = html + "<h3>Categoría Gods & Goddesses:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.gods.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Criaturas") {
        html = html + "<h3>Categoría Criaturas:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.criaturas.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Inazuma") {
        html = html + "<h3>Categoría Inazuma:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.inazuma.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Anime") {
        html = html + "<h3>Categoría Anime:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.anime.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Cabezones") {
        html = html + "<h3>Categoría Cabezones:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.cabezones.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Sketch") {
        html = html + "<h3>Categoría Sketch:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.sketch.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Dragon ball") {
        html = html + "<h3>Categoría Dragon ball:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.dragonBall.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "WWE") {
        html = html + "<h3>Categoría WWE:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.wwe.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "ABC") {
        html = html + "<h3>Categoría ABC:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.abc.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Fondos") {
        html = html + "<h3>Categoría Fondos:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.fondos.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "NFT") {
        html = html + "<h3>Categoría NFT:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.nft.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "CN") {
        html = html + "<h3>Categoría ©️N:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.cn.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <strong> ${img.title} </strong>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else {
        html = "<strong>La categoría no existe</strong>";
    }
    
    document.getElementById('info').style.display = 'none';
    document.getElementById('dibujos').style.display = 'block';

    document.getElementById('images').innerHTML = html;
}

function showSidebar() {
    document.getElementById('sidebar').style.display = 'block';
    document.getElementById('sidebarButton').innerHTML = `<button class="btn btn-info ml-3 mt-2 mb-3" onclick="hideSidebar()">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/></svg>
                                                        </button>`;
}

function hideSidebar() {
    document.getElementById('sidebar').style.display = 'none';
    document.getElementById('sidebarButton').innerHTML = `<button class="btn btn-info ml-3 mt-2 mb-3" onclick="showSidebar()">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewbox="0 0 16 16"><path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/><path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/></svg>
                                                        </button>`;
}

document.addEventListener("keydown", (click) => {
    if (click.key == "F12") {
        console.log("YEPA! ESO NO!");
    }
});

document.getElementById('body').addEventListener("contextmenu", (event) => {
    event.preventDefault();
});
