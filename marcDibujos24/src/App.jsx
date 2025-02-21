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
} from "./database/getCollections"

import { useState } from 'react';
import { HeaderModal } from './components/header/HeaderModal';
import { MainModal } from './components/MainModal';
import { SearcherModal } from './components/searcher/SearcherModal';

function App() {

  const getCategory = (categoryName) => {
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
      case 'all':
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
    const allImages = getCategory('all')

    let counter = 0
    let newArrayImages = {
      initialImage: getInitialImage(),
      abc: [],
      anime: [],
      bn: [],
      dragonBall: [],
      fondos: [],
      fusiones: [],
      gods: [],
      inazuma: [],
      nft: [],
      oc: []
    }

    allImages.abc.forEach(img => {
      newArrayImages.abc[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.abc[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.abc[counter] = null
      }
    });

    if (newArrayImages.abc[0] === null) {
      newArrayImages.abc = null
    }

    counter = 0
    
    allImages.anime.forEach(img => {
      newArrayImages.anime[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.anime[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.anime[counter] = null
      }
    });

    if (newArrayImages.anime[0] === null) {
      newArrayImages.anime = null
    }

    counter = 0
    
    allImages.bn.forEach(img => {
      newArrayImages.bn[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.bn[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.bn[counter] = null
      }
    });

    if (newArrayImages.bn[0] === null) {
      newArrayImages.bn = null
    }

    counter = 0
    
    allImages.dragonBall.forEach(img => {
      newArrayImages.dragonBall[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.dragonBall[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.dragonBall[counter] = null
      }
    });

    if (newArrayImages.dragonBall[0] === null) {
      newArrayImages.dragonBall = null
    }

    counter = 0

    allImages.fondos.forEach(img => {
      newArrayImages.fondos[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.fondos[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.fondos[counter] = null
      }
    });

    if (newArrayImages.fondos[0] === null) {
      newArrayImages.fondos = null
    }

    counter = 0

    allImages.fusiones.forEach(img => {
      newArrayImages.fusiones[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.fusiones[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.fusiones[counter] = null
      }
    });

    if (newArrayImages.fusiones[0] === null) {
      newArrayImages.fusiones = null
    }

    counter = 0

    allImages.gods.forEach(img => {
      newArrayImages.gods[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.gods[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.gods[counter] = null
      }
    });

    if (newArrayImages.gods[0] === null) {
      newArrayImages.gods = null
    }

    counter = 0

    allImages.inazuma.forEach(img => {
      newArrayImages.inazuma[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.inazuma[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.inazuma[counter] = null
      }
    });

    if (newArrayImages.inazuma[0] === null) {
      newArrayImages.inazuma = null
    }

    counter = 0

    allImages.nft.forEach(img => {
      newArrayImages.nft[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.nft[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.nft[counter] = null
      }
    });

    if (newArrayImages.nft[0] === null) {
      newArrayImages.nft = null
    }

    counter = 0

    allImages.oc.forEach(img => {
      newArrayImages.oc[counter] = getArrayImagesByName(img, value)

      if (newArrayImages.oc[counter] !== undefined) {
        counter++
      } else {
        newArrayImages.oc[counter] = null
      }
    });

    if (newArrayImages.oc[0] === null) {
      newArrayImages.oc = null
    }

    return newArrayImages
  }

  const getArrayImagesByName = (img, value) => {
    const title = img.title.toLowerCase();
    
    if (title.indexOf(value.toLowerCase()) !== -1) {
      return img
    }
  }

  const getImgByTwoCategories = (category1, category2) => {
    const arrayImagesCategory1 = getCategory(category1)
    const arrayImagesCategory2 = getCategory(category2)
    let newArrayImages = {
      initialImage: getInitialImage(),
    }

    if (category1 === 'abc') {
      if (category2 === 'abc') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'anime') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.abc
      } else if (category2 === 'bn') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.abc
      } else if (category2 === 'dragonBall') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.abc
      } else if (category2 === 'fondos') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.abc
      } else if (category2 === 'fusiones') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.abc
      } else if (category2 === 'gods') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.abc
      } else if (category2 === 'inazuma') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.abc
      } else if (category2 === 'nft') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.abc
      } else if (category2 === 'oc') {
        newArrayImages.abc = getImgInBothArrays(arrayImagesCategory1.abc, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.abc
      }
    } else if (category1 === 'anime') {
      if (category2 === 'abc') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.anime
      } else if (category2 === 'anime') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'bn') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.anime
      } else if (category2 === 'dragonBall') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.anime
      } else if (category2 === 'fondos') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.anime
      } else if (category2 === 'fusiones') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.anime
      } else if (category2 === 'gods') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.anime
      } else if (category2 === 'inazuma') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.anime
      } else if (category2 === 'nft') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.anime
      } else if (category2 === 'oc') {
        newArrayImages.anime = getImgInBothArrays(arrayImagesCategory1.anime, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.anime
      }
    } else if (category1 === 'bn') {
      if (category2 === 'abc') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.bn
      } else if (category2 === 'anime') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.bn
      } else if (category2 === 'bn') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'dragonBall') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.bn
      } else if (category2 === 'fondos') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.bn
      } else if (category2 === 'fusiones') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.bn
      } else if (category2 === 'gods') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.bn
      } else if (category2 === 'inazuma') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.bn
      } else if (category2 === 'nft') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.bn
      } else if (category2 === 'oc') {
        newArrayImages.bn = getImgInBothArrays(arrayImagesCategory1.bn, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.bn
      }
    } else if (category1 === 'dragonBall') {
      if (category2 === 'abc') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.dragonBall
      } else if (category2 === 'anime') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.dragonBall
      } else if (category2 === 'bn') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.dragonBall
      } else if (category2 === 'dragonBall') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'fondos') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.dragonBall
      } else if (category2 === 'fusiones') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.dragonBall
      } else if (category2 === 'gods') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.dragonBall
      } else if (category2 === 'inazuma') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.dragonBall
      } else if (category2 === 'nft') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.dragonBall
      } else if (category2 === 'oc') {
        newArrayImages.dragonBall = getImgInBothArrays(arrayImagesCategory1.dragonBall, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.dragonBall
      }
    } else if (category1 === 'fondos') {
      if (category2 === 'abc') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.fondos
      } else if (category2 === 'anime') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.fondos
      } else if (category2 === 'bn') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.fondos
      } else if (category2 === 'dragonBall') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.fondos
      } else if (category2 === 'fondos') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'fusiones') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.fondos
      } else if (category2 === 'gods') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.fondos
      } else if (category2 === 'inazuma') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.fondos
      } else if (category2 === 'nft') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.fondos
      } else if (category2 === 'oc') {
        newArrayImages.fondos = getImgInBothArrays(arrayImagesCategory1.fondos, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.fondos
      }
    } else if (category1 === 'fusiones') {
      if (category2 === 'abc') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.fusiones
      } else if (category2 === 'anime') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.fusiones
      } else if (category2 === 'bn') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.fusiones
      } else if (category2 === 'dragonBall') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.fusiones
      } else if (category2 === 'fondos') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.fusiones
      } else if (category2 === 'fusiones') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'gods') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.fusiones
      } else if (category2 === 'inazuma') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.fusiones
      } else if (category2 === 'nft') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.fusiones
      } else if (category2 === 'oc') {
        newArrayImages.fusiones = getImgInBothArrays(arrayImagesCategory1.fusiones, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.fusiones
      }
    } else if (category1 === 'gods') {
      if (category2 === 'abc') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.gods
      } else if (category2 === 'anime') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.gods
      } else if (category2 === 'bn') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.gods
      } else if (category2 === 'dragonBall') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.gods
      } else if (category2 === 'fondos') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.gods
      } else if (category2 === 'fusiones') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.gods
      } else if (category2 === 'gods') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'inazuma') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.gods
      } else if (category2 === 'nft') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.gods
      } else if (category2 === 'oc') {
        newArrayImages.gods = getImgInBothArrays(arrayImagesCategory1.gods, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.gods
      }
    } else if (category1 === 'inazuma') {
      if (category2 === 'abc') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.inazuma
      } else if (category2 === 'anime') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.inazuma
      } else if (category2 === 'bn') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.inazuma
      } else if (category2 === 'dragonBall') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.inazuma
      } else if (category2 === 'fondos') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.inazuma
      } else if (category2 === 'fusiones') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.inazuma
      } else if (category2 === 'gods') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.inazuma
      } else if (category2 === 'inazuma') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'nft') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.inazuma
      } else if (category2 === 'oc') {
        newArrayImages.inazuma = getImgInBothArrays(arrayImagesCategory1.inazuma, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.inazuma
      }
    } else if (category1 === 'nft') {
      if (category2 === 'abc') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.nft
      } else if (category2 === 'anime') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.nft
      } else if (category2 === 'bn') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.nft
      } else if (category2 === 'dragonBall') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.nft
      } else if (category2 === 'fondos') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.nft
      } else if (category2 === 'fusiones') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.nft
      } else if (category2 === 'gods') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.nft
      } else if (category2 === 'inazuma') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.nft
      } else if (category2 === 'nft') {
        newArrayImages = getCategory(category1)
      } else if (category2 === 'oc') {
        newArrayImages.nft = getImgInBothArrays(arrayImagesCategory1.nft, arrayImagesCategory2.oc)
        newArrayImages.oc = newArrayImages.nft
      }
    } else if (category1 === 'oc') {
      if (category2 === 'abc') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.abc)
        newArrayImages.abc = newArrayImages.oc
      } else if (category2 === 'anime') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.anime)
        newArrayImages.anime = newArrayImages.oc
      } else if (category2 === 'bn') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.bn)
        newArrayImages.bn = newArrayImages.oc
      } else if (category2 === 'dragonBall') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.dragonBall)
        newArrayImages.dragonBall = newArrayImages.oc
      } else if (category2 === 'fondos') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.fondos)
        newArrayImages.fondos = newArrayImages.oc
      } else if (category2 === 'fusiones') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.fusiones)
        newArrayImages.fusiones = newArrayImages.oc
      } else if (category2 === 'gods') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.gods)
        newArrayImages.gods = newArrayImages.oc
      } else if (category2 === 'inazuma') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.inazuma)
        newArrayImages.inazuma = newArrayImages.oc
      } else if (category2 === 'nft') {
        newArrayImages.oc = getImgInBothArrays(arrayImagesCategory1.oc, arrayImagesCategory2.nft)
        newArrayImages.nft = newArrayImages.oc
      } else if (category2 === 'oc') {
        newArrayImages = getCategory(category1)
      }
    }

    return newArrayImages
  }

  const getImgInBothArrays = (arrayImagesCategory1, arrayImagesCategory2) => {
    let counter = 0
    let newArrayImages = []
    
    arrayImagesCategory1.forEach((imgToFind) => {
      arrayImagesCategory2.forEach((img) => {

        const image = getImageByNameAndSrc(img, imgToFind)
        
        if (image !== null) {
          newArrayImages[counter] = image
          counter++
        }
      });
    })

    if (newArrayImages[0] === null) {
      newArrayImages = null
    }

    return newArrayImages
  }

  const getImageByNameAndSrc = (image, imageToFind) => {
    let isSameImage = false

    if (image.src === imageToFind.src) {
      if (image.title === imageToFind.title) {
        isSameImage = true
      }
    }

    return isSameImage ? image : null
  } 

  const [arrayImages, setArrayImages] = useState(getCategory('all'))

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
    const newArrayImages = getImgByTitle(title)

    setArrayImages(newArrayImages)
  }

  const searchTwoCategories = (category1, category2) => {
    const newArrayImages = getImgByTwoCategories(category1, category2)

    setArrayImages(newArrayImages)
  }

  const searchImgByTwoTitles = (title1, title2) => {
    const newArrayImages = getImgUsingTwoTitles(title1, title2)

    setArrayImages(newArrayImages)
  }

  const getImgUsingTwoTitles = (title1, title2) => {
    if (title1 !== title2) {
      let newArrayImages = {
        initialImage: getInitialImage(),
      }

      const arrayImagesTitle1 = getImgByTitle(title1.toLowerCase())
      const arrayImagesTitle2 = getImgByTitle(title2.toLowerCase())
  
      if (arrayImagesTitle1.abc !== null) {
        newArrayImages.abc = arrayImagesTitle1.abc
        
        if (arrayImagesTitle2.abc !== null) {
          newArrayImages.abc = newArrayImages.abc.concat(arrayImagesTitle2.abc)
        }
      } else if (arrayImagesTitle2.abc !== null) {
        newArrayImages.abc = arrayImagesTitle2.abc
      }
      
      if (arrayImagesTitle1.anime !== null) {
        newArrayImages.anime = arrayImagesTitle1.anime
        
        if (arrayImagesTitle2.anime !== null) {
          newArrayImages.anime = newArrayImages.anime.concat(arrayImagesTitle2.anime)
        }
      } else if (arrayImagesTitle2.anime !== null) {
        newArrayImages.anime = arrayImagesTitle2.anime
      }

      if (arrayImagesTitle1.bn !== null) {
        newArrayImages.bn = arrayImagesTitle1.bn
        
        if (arrayImagesTitle2.bn !== null) {
          newArrayImages.bn = newArrayImages.bn.concat(arrayImagesTitle2.bn)
        }
      } else if (arrayImagesTitle2.bn !== null) {
        newArrayImages.bn = arrayImagesTitle2.bn
      }

      if (arrayImagesTitle1.dragonBall !== null) {
        newArrayImages.dragonBall = arrayImagesTitle1.dragonBall
        
        if (arrayImagesTitle2.dragonBall !== null) {
          newArrayImages.dragonBall = newArrayImages.dragonBall.concat(arrayImagesTitle2.dragonBall)
        }
      } else if (arrayImagesTitle2.dragonBall !== null) {
        newArrayImages.dragonBall = arrayImagesTitle2.dragonBall
      }

      if (arrayImagesTitle1.fondos !== null) {
        newArrayImages.fondos = arrayImagesTitle1.fondos
        
        if (arrayImagesTitle2.fondos !== null) {
          newArrayImages.fondos = newArrayImages.fondos.concat(arrayImagesTitle2.fondos)
        }
      } else if (arrayImagesTitle2.fondos !== null) {
        newArrayImages.fondos = arrayImagesTitle2.fondos
      }

      if (arrayImagesTitle1.fusiones !== null) {
        newArrayImages.fusiones = arrayImagesTitle1.fusiones
        
        if (arrayImagesTitle2.fusiones !== null) {
          newArrayImages.fusiones = newArrayImages.fusiones.concat(arrayImagesTitle2.fusiones)
        }
      } else if (arrayImagesTitle2.fusiones !== null) {
        newArrayImages.fusiones = arrayImagesTitle2.fusiones
      }

      if (arrayImagesTitle1.gods !== null) {
        newArrayImages.gods = arrayImagesTitle1.gods
        
        if (arrayImagesTitle2.gods !== null) {
          newArrayImages.gods = newArrayImages.gods.concat(arrayImagesTitle2.gods)
        }
      } else if (arrayImagesTitle2.gods !== null) {
        newArrayImages.gods = arrayImagesTitle2.gods
      }

      if (arrayImagesTitle1.inazuma !== null) {
        newArrayImages.inazuma = arrayImagesTitle1.inazuma
        
        if (arrayImagesTitle2.inazuma !== null) {
          newArrayImages.inazuma = newArrayImages.inazuma.concat(arrayImagesTitle2.inazuma)
        }
      } else if (arrayImagesTitle2.inazuma !== null) {
        newArrayImages.inazuma = arrayImagesTitle2.inazuma
      }

      if (arrayImagesTitle1.nft !== null) {
        newArrayImages.nft = arrayImagesTitle1.nft
        
        if (arrayImagesTitle2.nft !== null) {
          newArrayImages.nft = newArrayImages.nft.concat(arrayImagesTitle2.nft)
        }
      } else if (arrayImagesTitle2.nft !== null) {
        newArrayImages.nft = arrayImagesTitle2.nft
      }

      if (arrayImagesTitle1.oc !== null) {
        newArrayImages.oc = arrayImagesTitle1.oc
        
        if (arrayImagesTitle2.oc !== null) {
          newArrayImages.oc = newArrayImages.oc.concat(arrayImagesTitle2.oc)
          console.log(newArrayImages.oc)
        }
      } else if (arrayImagesTitle2.oc !== null) {
        newArrayImages.oc = arrayImagesTitle2.oc
      }

      return newArrayImages
    } else {
      const newArrayImages = getImgByTitle(title1.toLowerCase())

      return newArrayImages
    }
  }

  const searchImgInCategoryByTitle = (category, title) => {
    const newArrayImages = getImgByCategoryAndTitle(category, title.toLowerCase())

    setArrayImages(newArrayImages)
  }

  const getImgByCategoryAndTitle = (category, title) => {
    const allImages = getCategory('all')

    let newArrayImages = {
      initialImage: getInitialImage(),
    }

    switch (category) {
      case 'abc':
        newArrayImages.abc = []
        
        allImages.abc.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.abc.push(newImage)
          }
        });
        break;
      case 'anime':
        newArrayImages.anime = []
        
        allImages.anime.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.anime.push(newImage)
          }
        });
        break;
      case 'bn':
        newArrayImages.bn = []
        
        allImages.bn.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.bn.push(newImage)
          }
        });
        break;
      case 'dragonBall':
        newArrayImages.dragonBall = []
        
        allImages.dragonBall.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.dragonBall.push(newImage)
          }
        });
        break;
      case 'fondos':
        newArrayImages.fondos = []
        
        allImages.fondos.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.fondos.push(newImage)
          }
        });
        break;
      case 'fusiones':
        newArrayImages.fusiones = []
        
        allImages.fusiones.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.fusiones.push(newImage)
          }
        });
        break;
      case 'gods':
        newArrayImages.gods = []
        
        allImages.gods.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.gods.push(newImage)
          }
        });
        break;
      case 'inazuma':
        newArrayImages.inazuma = []
        
        allImages.inazuma.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.inazuma.push(newImage)
          }
        });
        break;
      case 'nft':
        newArrayImages.nft = []

        allImages.nft.forEach(img => {
          const newImage = getArrayImagesByName(img, title)
          
          if (newImage !== undefined) {
            newArrayImages.nft.push(newImage)
          }
        });
        break;
      case 'oc':
        newArrayImages.oc = []
        
        allImages.oc.forEach(img => {
          const newImage = getArrayImagesByName(img, title)

          if (newImage !== undefined) {
            newArrayImages.oc.push(newImage)
          }
        });
        break;
    }

    return newArrayImages
  }

  const getDefaultImages = () => {
    const newArrayImages = getCategory('all')

    setArrayImages(newArrayImages)
  }

  const resetSearcher = () => {
    getDefaultImages()
  }

  return (
    <div>
      <HeaderModal setDefaultImages={getDefaultImages}
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

      <MainModal data={arrayImages} ></MainModal>

      <SearcherModal
        resetSearcher={resetSearcher}
        changeCategory={selectCategory}
        searchImgTitle={searchTitle}
        searchTwoCategories={searchTwoCategories}
        searchImgInCategoryByTitle={searchImgInCategoryByTitle}
        searchImgByTwoTitles={searchImgByTwoTitles} >
      </SearcherModal>
    </div>
  )
}

export default App
