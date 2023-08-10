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

function App() {
  const [arrayImages, setArrayImages] = useState([])

  const selectCategory = (categoryName = 'all') => {
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

      <MainModal arrayImages={arrayImages} resetSearcher={selectCategory}></MainModal>
    </>
  )
}

export default App
