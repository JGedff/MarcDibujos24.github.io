function checkDoubleSearch() {
    let checker = document.getElementById('doubleSearchYes').checked;

    if (checker) {
        document.getElementById('resultDoubleSearch').style.display = 'block';
    }
    else {
        document.getElementById('resultDoubleSearch').style.display = 'none';
    }
}

function doubleSearch() {
    let field = document.getElementById('searchInput').value;
    let frase = document.getElementById('input').value;
    let valor = frase.toLowerCase();

    let categoria = document.getElementById('resultDoubleSearch').value;

    if (field == "category") {
        loadTwoCategories(`${frase}`,`${categoria}`);
    }
    else {
        let counter = 0;
        let images = { };

        if (categoria == "ABC") {
            arrayImagenes.abc.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.abc[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Anime") {
            arrayImagenes.anime.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.anime[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Blanco & Negro") {
            arrayImagenes.blanco_negro.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.blanco_negro[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Dragon ball") {
            arrayImagenes.dragonBall.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.dragonBall[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Fondos") {
            arrayImagenes.fondos.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.fondos[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Fusiones") {
            arrayImagenes.fusiones.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.fusiones[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Gods & Goddesses") {
            arrayImagenes.gods.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.gods[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "Inazuma") {
            arrayImagenes.inazuma.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.inazuma[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "NFT") {
            arrayImagenes.nft.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.nft[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else if (categoria == "OC") {
            arrayImagenes.oc.forEach(img => {
                if (img.title.indexOf(valor) !== -1) {
                    images.oc[counter] = img;
                    counter = counter + 1;
                }
            });
        }
        else {
            console.log("ERROR EN LA BÚSQUEDA DOBLE");
        }

        loadImages(images);
    }
}

function loadTwoCategories(cat1, cat2) {
    let html = "";

    if (cat1 == "Gods & Goddesses" || cat2 == "Gods & Goddesses") {
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
    if (cat1 == "Fusiones" || cat2 == "Fusiones") {
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
    if (cat1 == "Blanco_negro" || cat2 == "Blanco_negro") {
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
    if (cat1 == "Inazuma" || cat2 == "Inazuma") {
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
    if (cat1 == "Anime" || cat2 == "Anime") {
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
    if (cat1 == "Dragon ball" || cat2 == "Dragon ball") {
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
    if (cat1 == "ABC" || cat2 == "ABC") {
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
    if (cat1 == "Fondos" || cat2 == "Fondos") {
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
    if (cat1 == "NFT" || cat2 == "NFT") {
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
    if (cat1 == "OC" || cat2 == "OC") {
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
    
    document.getElementById('info').style.display = 'none';
    document.getElementById('dibujos').style.display = 'block';

    document.getElementById('images').innerHTML = html;
}