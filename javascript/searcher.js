function searchField() {
    let field = document.getElementById('searchInput').value;

    let html;
    
    if (field == "title") {
        html = "<label for='input' class='mt-3'> Introduce el nombre del dibujo </label>";
        html = html + "<input type='text' class='form-control' name='input' id='input' />";
    }
    else {
        html = "<label for='input' class='mt-3'> Elije la categoría del dibujo </label>";
        html = html + `<select name="input" class="form-control" id="input">
                            <option value="ABC"> ABC </option>
                            <option value="Anime"> Anime </option>
                            <option value="Blanco_negro"> Blanco & Negro </option>
                            <option value="Dragon ball"> Dragon ball </option>
                            <option value="Fondos"> Fondos </option>
                            <option value="Fusiones"> Fusiones </option>
                            <option value="Gods & Goddesses"> Gods & Goddesses </option>
                            <option value="Inazuma"> Inazuma </option>
                            <option value="NFT"> NFT</option>
                            <option value="OC"> Personajes Originales </option>
                        </select>`;
    }

    document.getElementById('resultSearchInput').innerHTML = html;
}

function searchDraw() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('dibujos').style.display = 'block';
    
    let checker = document.getElementById('doubleSearchYes').checked;
    let field = document.getElementById('searchInput').value;
    let frase = document.getElementById('input').value;
    let valor = frase.toLowerCase();

    dialogSearcher.close();

    if (!checker) {
        if (field == "category") {
            loadCategory(`${frase}`);
        }
        else {
            let counter = 0;
            let has_images = false;
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
    
            arrayImagenes.abc.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.abc[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.abc = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.anime.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.anime[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.anime = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.blanco_negro.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.blanco_negro[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.blanco_negro = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.dragonBall.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.dragonBall[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.dragonBall = null;
            }
    
            counter = 0;
            has_images = false;
            
            arrayImagenes.fondos.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.fondos[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.fondos = null;
            }
            
            counter = 0;
            has_images = false;
            
            arrayImagenes.fusiones.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.fusiones[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.fusiones = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.gods.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.gods[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.gods = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.inazuma.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.inazuma[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.inazuma = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.nft.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.nft[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.nft = null;
            }
    
            counter = 0;
            has_images = false;
    
            arrayImagenes.oc.forEach(img => {
                
                if (img.title.indexOf(valor) !== -1) {
                    has_images = true;
                    images.oc[counter] = img;
                    counter = counter + 1;
                }
            });
    
            if (!has_images) {
                images.oc = null;
            }
    
            loadImages(images);
        }
    }
    else {
        doubleSearch();
    }
}

function resetSearcher() {
    showImages();
    document.getElementById('info').style.display = 'block';
    dialogSearcher.close();
}

document.getElementById('search').addEventListener("click", function() {
    dialogSearcher.showModal();
})