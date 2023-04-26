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
                            <option value="Cabezones"> Cabezones </option>
                            <option value="Criaturas"> Criaturas </option>
                            <option value="Digital"> Digital </option>
                            <option value="Dragon ball"> Dragon ball </option>
                            <option value="Fondos">Fondos </option>
                            <option value="Gods & Goddesses"> Gods & Goddesses </option>
                            <option value="NFT"> NFT</option>
                            <option value="Sketch"> Sketch </option>
                            <option value="CN"> ©️N </option>
                        </select>`;
    }

    html = html + `<button type="submit" onclick="searchDraw()" class="mt-3 btn btn-info" action="data-dismiss='modal'"> Buscar </button>
    <button type="submit" onclick="resetSearcher()" class="mt-3 btn btn-danger" action="data-dismiss='modal'"> Parar buscador </button>`;

    document.getElementById('resultSearchInput').innerHTML = html;
}

function searchDraw() {
    document.getElementById('info').style.display = 'none';
    document.getElementById('dibujos').style.display = 'block';

    let field = document.getElementById('searchInput').value;
    let frase = document.getElementById('input').value;
    let valor = frase.toLowerCase();

    dialogSearcher.close();

    if (field == "category") {
        loadCategory(`${frase}`);
    }
    else {
        let counter = 0;
        let has_images = false;
        let images = {
            "abc": [],
            "anime": [],
            "cabezones": [],
            "criaturas": [],
            "digital": [],
            "dragonBall": [],
            "fondos": [],
            "gods": [],
            "inazuma": [],
            "nft": [],
            "sketch": [],
            "cn": []
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

        arrayImagenes.cabezones.forEach(img => {
            
            if (img.title.indexOf(valor) !== -1) {
                has_images = true;
                images.cabezones[counter] = img;
                counter = counter + 1;
            }
        });

        if (!has_images) {
            images.cabezones = null;
        }

        counter = 0;
        has_images = false;

        arrayImagenes.criaturas.forEach(img => {
            
            if (img.title.indexOf(valor) !== -1) {
                has_images = true;
                images.criaturas[counter] = img;
                counter = counter + 1;
            }
        });

        if (!has_images) {
            images.criaturas = null;
        }

        counter = 0;
        has_images = false;

        arrayImagenes.digital.forEach(img => {
            
            if (img.title.indexOf(valor) !== -1) {
                has_images = true;
                images.digital[counter] = img;
                counter = counter + 1;
            }
        });

        if (!has_images) {
            images.digital = null;
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

        arrayImagenes.sketch.forEach(img => {
            
            if (img.title.indexOf(valor) !== -1) {
                has_images = true;
                images.sketch[counter] = img;
                counter = counter + 1;
            }
        });

        if (!has_images) {
            images.sketch = null;
        }

        counter = 0;
        has_images = false;

        arrayImagenes.cn.forEach(img => {
            
            if (img.title.indexOf(valor) !== -1) {
                has_images = true;
                images.cn[counter] = img;
                counter = counter + 1;
            }
        });

        if (!has_images) {
            images.cn = null;
        }

        loadImages(images);
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