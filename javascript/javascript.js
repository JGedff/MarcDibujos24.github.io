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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.blanco_negro != null) {
        html = html + "<h3>Categoría Blanco & Negro:</h3><div class='d-flex flex-wrap'>";

        object.blanco_negro.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }
    
    html = html + "</div><div>";

    if (object.fusiones != null) {
        html = html + "<h3>Categoría Fusiones:</h3><div class='d-flex flex-wrap'>";

        object.fusiones.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.inazuma != null) {
        html = html + "<h3>Categoría Inazuma:</h3><div class='d-flex flex-wrap'>";

        object.inazuma.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });
    }

    html = html + "</div><div>";

    if (object.oc != null) {
        html = html + "<h3>Categoría Personajes Originales:</h3><div class='d-flex flex-wrap'>";

        object.oc.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
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

    if (cat == "Gods & Goddesses") {
        html = html + "<h3>Categoría Gods & Goddesses:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.gods.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Fusiones") {
        html = html + "<h3>Categoría Fusiones:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.fusiones.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "Blanco_negro") {
        html = html + "<h3>Categoría Blanco & Negro:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.blanco_negro.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
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
                                    <h4><strong> ${img.title} </strong></h4>
                                </div>
                                <img src="${img.src}" alt="${img.title}" class="img-thumbnail .img-fluid custom-border"/>
                            </div>`;
        });

        html = html + "</div>";
    }
    else if (cat == "OC") {
        html = html + "<h3>Categoría Personajes Originales:</h3><div class='d-flex flex-wrap'>";

        arrayImagenes.oc.forEach(img => {
            html = html + `<div>
                                <div class="d-flex justify-content-center">
                                    <h4><strong> ${img.title} </strong></h4>
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