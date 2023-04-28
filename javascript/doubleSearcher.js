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

    let categoria = document.getElementById('inputDoubleSearch').value;

    if (field == "category") {
        loadTwoCategories(`${frase}`,`${categoria}`);
    }
    else {
        let objectCategory = false;
        let counter = 0;
        let images = {
            "abc": [],
            "anime": [],
            "blanco_negro": [],
            "dragonBall": [],
            "fondos": [],
            "fusiones": [],
            "gods": [],
            "inazuma": [],
            "nft": [],
            "oc": []
        };

        if (categoria == "ABC") {
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.abc.forEach(img => {
                let title = img.title.toLowerCase();
                
                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.abc[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.abc = null;
            }
        }
        else if (categoria == "Anime") {
            images.abc = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.anime.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.anime[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.anime = null;
            }
        }
        else if (categoria == "Blanco & Negro") {
            images.abc = null;
            images.anime = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.blanco_negro.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.blanco_negro[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.blanco_negro = null;
            }
        }
        else if (categoria == "Dragon ball") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.dragonBall.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.dragonBall[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.dragonBall = null;
            }
        }
        else if (categoria == "Fondos") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.fondos.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.fondos[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.fondos = null;
            }
        }
        else if (categoria == "Fusiones") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.fusiones.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.fusiones[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.fusiones = null;
            }
        }
        else if (categoria == "Gods & Goddesses") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.inazuma = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.gods.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.gods[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.gods = null;
            }
        }
        else if (categoria == "Inazuma") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.nft = null;
            images.oc = null;

            arrayImagenes.inazuma.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.inazuma[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.inazuma = null;
            }
        }
        else if (categoria == "NFT") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.oc = null;

            arrayImagenes.nft.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.nft[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.nft = null;
            }
        }
        else if (categoria == "OC") {
            images.abc = null;
            images.anime = null;
            images.blanco_negro = null;
            images.dragonBall = null;
            images.fondos = null;
            images.fusiones = null;
            images.gods = null;
            images.inazuma = null;
            images.nft = null;

            arrayImagenes.oc.forEach(img => {
                let title = img.title.toLowerCase();

                if (title.indexOf(valor) !== -1) {
                    objectCategory = true;
                    images.oc[counter] = img;
                    counter = counter + 1;
                }
            });

            if (!objectCategory) {
                images.oc = null;
            }
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