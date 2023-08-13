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

    console.log(newArrayImages)

    return newArrayImages
  }

  const getImgByTitle = (value) => {
    const allImages = getCategory()

    let counter = 0
    let newArrayImages = {
      initialImage: getInitialImage(),
    }

    allImages.abc.forEach(img => {
      newArrayImages.abc[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0
    
    allImages.anime.forEach(img => {
      newArrayImages.anime[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0
    
    allImages.bn.forEach(img => {
      newArrayImages.bn[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0
    
    allImages.dragonBall.forEach(img => {
      newArrayImages.dragonBall[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0

    allImages.fondos.forEach(img => {
      newArrayImages.fondos[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0

    allImages.fusiones.forEach(img => {
      newArrayImages.fusiones[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0

    allImages.gods.forEach(img => {
      newArrayImages.gods[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0

    allImages.inazuma.forEach(img => {
      newArrayImages.inazuma[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0

    allImages.nft.forEach(img => {
      newArrayImages.nft[counter] = getArrayImagesByName(img, value)
      counter++
    });

    counter = 0

    allImages.oc.forEach(img => {
      newArrayImages.oc[counter] = getArrayImagesByName(img, value)
      counter++
    });

    return newArrayImages
  }

  const getArrayImagesByName = (img, value) => {
    const title = img.title.toLowerCase();

    if (title.indexOf(value) !== -1) {
      return img
    }
  }

  const getImgByTwoCategories = (category1, category2) => {
    let arrayImagesCategory1 = getCategory(category1)
    let arrayImagesCategory2 = getCategory(category2)
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
        newArrayImages[counter] = getArrayImagesByName(img, imgToFind.title)
        counter++
      });
    })

    return newArrayImages
  }

  const [arrayImages, setArrayImages] = useState(getCategory())

  const selectCategory = (categoryName = 'all') => {
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
  
      newArrayImages.abc = arrayImagesTitle1.abc.concat(arrayImagesTitle2.abc)
      newArrayImages.anime = arrayImagesTitle1.anime.concat(arrayImagesTitle2.anime)
      newArrayImages.bn = arrayImagesTitle1.bn.concat(arrayImagesTitle2.bn)
      newArrayImages.dragonBall = arrayImagesTitle1.dragonBall.concat(arrayImagesTitle2.dragonBall)
      newArrayImages.fondos = arrayImagesTitle1.fondos.concat(arrayImagesTitle2.fondos)
      newArrayImages.fusiones = arrayImagesTitle1.fusiones.concat(arrayImagesTitle2.fusiones)
      newArrayImages.gods = arrayImagesTitle1.godsgods.concat(arrayImagesTitle2.gods)
      newArrayImages.inazuma = arrayImagesTitle1.inazuma.concat(arrayImagesTitle2.inazuma)
      newArrayImages.nft = arrayImagesTitle1.nft.concat(arrayImagesTitle2.nft)
      newArrayImages.oc = arrayImagesTitle1.oc.concat(arrayImagesTitle2.oc)
  
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
    const allImages = getCategory()

    let counter = 0
    let newArrayImages = {
      initialImage: getInitialImage(),
    }

    switch (category) {
      case 'abc':
        allImages.abc.forEach(img => {
          newArrayImages.abc[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'anime':
        allImages.anime.forEach(img => {
          newArrayImages.anime[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'bn':
        allImages.bn.forEach(img => {
          newArrayImages.bn[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'dragonBall':
        allImages.dragonBall.forEach(img => {
          newArrayImages.dragonBall[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'fondos':
        allImages.fondos.forEach(img => {
          newArrayImages.fondos[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'fusiones':
        allImages.fusiones.forEach(img => {
          newArrayImages.fusiones[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'gods':
        allImages.gods.forEach(img => {
          newArrayImages.gods[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'inazuma':
        allImages.inazuma.forEach(img => {
          newArrayImages.inazuma[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'nft':
        allImages.nft.forEach(img => {
          newArrayImages.nft[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
      case 'oc':
        allImages.oc.forEach(img => {
          newArrayImages.oc[counter] = getArrayImagesByName(img, title)
          counter++
        });
        break;
    }

    return newArrayImages
  }

  return (
    <div>
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

      <MainModal data={arrayImages} ></MainModal>

      <SearcherModal
        resetSearcher={selectCategory}
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
