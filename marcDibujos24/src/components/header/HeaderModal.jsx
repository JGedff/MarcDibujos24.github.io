import { HeaderLogo } from "./HeaderLogo"
import { HorizontalMenu } from "./HorizontalMenu"
import { SidebarMenu } from "./SidebarMenu"

export const HeaderModal = ({
    setDefaultImages,
    showAbc,
    showAnime,
    showBn,
    showDragonBall,
    showFondos,
    showFusiones,
    showGods,
    showInazuma,
    showNft,
    showOc
}) => {
    
    return (
        <header>
            <HeaderLogo></HeaderLogo>

            <SidebarMenu handleClick={setDefaultImages}
                showAbc={showAbc}
                showAnime={showAnime}
                showBn={showBn}
                showDragonBall={showDragonBall}
                showFondos={showFondos}
                showFusiones={showFusiones}
                showGods={showGods}
                showInazuma={showInazuma}
                showNft={showNft}
                showOc={showOc} >
            </SidebarMenu>

            <HorizontalMenu handleClick={setDefaultImages}
                showAbc={showAbc}
                showAnime={showAnime}
                showBn={showBn}
                showDragonBall={showDragonBall}
                showFondos={showFondos}
                showFusiones={showFusiones}
                showGods={showGods}
                showInazuma={showInazuma}
                showNft={showNft}
                showOc={showOc} >
            </HorizontalMenu>
        </header>
    )
}