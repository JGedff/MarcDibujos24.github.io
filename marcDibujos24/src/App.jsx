import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import {
  getAbcImg,
  getAnimeImg,
  getBNImg,
  getDragonBallImg,
  getFondosImg,
  getFusionesImg,
  getGodsImg,
  getInazumaImg,
  getNFTImg,
  getOCImg,
  getInitialImage
} from "../../database/getCollections"

import { useState } from 'react';
import { MainModal } from './components/MainModal';
import { HeaderModal } from './components/HeaderModal';
import { SearcherModal } from './components/SearcherModal';

function App() {
  const [arrayImages, setArrayImages] = useState([])

  const getCategory = (categoryName = 'all') => {
    let newArrayImages = {
      initialImage: getInitialImage(),
    }

    switch (categoryName) {
      case 'abc':
        newArrayImages.abc = getAbcImg()
        break;
      case 'anime':
        newArrayImages.anime = getAnimeImg()
        break;
      case 'bn':
        newArrayImages.bn = getBNImg()
        break;
      case 'dragonBall':
        newArrayImages.dragonBall = getDragonBallImg()
        break;
      case 'fondos':
        newArrayImages.fondos = getFondosImg()
        break;
      case 'fusiones':
        newArrayImages.fusiones = getFusionesImg()
        break;
      case 'gods':
        newArrayImages.gods = getGodsImg()
        break;
      case 'inazuma':
        newArrayImages.inazuma = getInazumaImg()
        break;
      case 'nft':
        newArrayImages.nft = getNFTImg()
        break;
      case 'oc':
        newArrayImages.oc = getOCImg()
        break;
      default:
        newArrayImages.abc = getAbcImg()
        newArrayImages.anime = getAnimeImg()
        newArrayImages.bn = getBNImg()
        newArrayImages.dragonBall = getDragonBallImg()
        newArrayImages.fondos = getFondosImg()
        newArrayImages.fusiones = getFusionesImg()
        newArrayImages.gods = getGodsImg()
        newArrayImages.inazuma = getInazumaImg()
        newArrayImages.nft = getNFTImg()
        newArrayImages.oc = getOCImg()
        break;
    }

    return newArrayImages
  }

  const getImgByTitle = (value) => {
    let counter = 0
    let imgInCategory = false
    const allImages = getCategory()
    let newArrayImages = {
      initialImage: getInitialImage(),
    }

    allImages.abc.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.abc[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0
    
    allImages.anime.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.anime[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0
    
    allImages.bn.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.bn[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0
    
    allImages.dragonBall.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.dragonBall[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0

    allImages.fondos.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.fondos[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0

    allImages.fusiones.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.fusiones[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0

    allImages.gods.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.gods[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0

    allImages.inazuma.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.inazuma[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0

    allImages.nft.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.nft[counter] = img;
          counter = counter + 1;
      }
    });

    counter = 0

    allImages.oc.forEach(img => {
      const title = img.title.toLowerCase();
      
      if (title.indexOf(value) !== -1) {
          imgInCategory = true;
          newArrayImages.oc[counter] = img;
          counter = counter + 1;
      }
    });
  }

  const selectCategory = (categoryName) => {
    const newArrayImages = getCategory(categoryName)

    setArrayImages(newArrayImages)
  }
  
  const selectAbcCategory = () => {
    selectCategory('abc')
  }

  const selectAnimeCategory = () => {
    selectCategory('anime')
  }

  const selectBnCategory = () => {
    selectCategory('bn')
  }

  const selectDragonBallCategory = () => {
    selectCategory('dragonBall')
  }

  const selectFondosCategory = () => {
    selectCategory('fondos')
  }

  const selectFusionesCategory = () => {
    selectCategory('fusiones')
  }

  const selectGodsCategory = () => {
    selectCategory('gods')
  }

  const selectInazumaCategory = () => {
    selectCategory('inazuma')
  }

  const selectNftCategory = () => {
    selectCategory('nft')
  }

  const selectOcCategory = () => {
    selectCategory('oc')
  }

  const searchTitle = (title) => {
    const newArrayImages = getImgByTitle(title.toLowerCase())

    setArrayImages(newArrayImages)
  }

  return (
    <>
      <HeaderModal setDefaultImages={selectCategory}
        showAbc={selectAbcCategory}
        showAnime={selectAnimeCategory}
        showBn={selectBnCategory}
        showDragonBall={selectDragonBallCategory}
        showFondos={selectFondosCategory}
        showFusiones={selectFusionesCategory}
        showGods={selectGodsCategory}
        showInazuma={selectInazumaCategory}
        showNft={selectNftCategory}
        showOc={selectOcCategory} >
      </HeaderModal>

      <MainModal arrayImages={arrayImages} ></MainModal>

      <SearcherModal resetSearcher={selectCategory} changeCategory={selectCategory} searchImgTitle={searchTitle}></SearcherModal>
    </>
  )
}

export default App
