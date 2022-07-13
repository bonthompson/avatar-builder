import { DefaultAvatarsContainer, DefaultAvatarButton } from './styles/index'
import { useRequestsContext, useAvatarCreatorDataContext } from '../../hooks/index'
import { Hair3 } from 'components/Items/Hair/Hair3'
import Beard1 from 'components/Items/Beard/Beard1'
import Glasses1 from 'components/Items/Glasses/Glasses1'
import LongHair from 'components/Items/Hair/LongHair'
import MGGnommeTshirt from '../Items/Tops/MGGnomeTshirt'
import TShirt from '../Items/Tops/TShirt'
import Bowtie1 from '../Items/Bowtie/Bowtie1'


const DefaultAvatars = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    const { colours } = useAvatarCreatorDataContext()

    const displayJeff = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ BEARD: 'no beard' })
        setIsDisplayedItem({ TOPS: <MGGnommeTshirt/> })
        setIsDisplayedItem({ GLASSES: <Glasses1 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000', TOPS: "#6F67D9"} })
    }

    const displayCeleste = () => {
        setIsDisplayedItem({ HAIR: <LongHair /> })
        setIsDisplayedItem({ TOPS: <MGGnommeTshirt/> })
        setIsDisplayedItem({ BEARD: 'no beard' })
        setIsDisplayedItem({ GLASSES: 'no glasses' })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#E0AC69', TOPS: "#D13D42" } })
    }

    const displayHugo = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ BEARD: <Beard1 /> })
        setIsDisplayedItem({ TOPS: <TShirt/> })
        setIsDisplayedItem({ GLASSES: 'no glasses' })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#724837', TOPS: "#6F67D9" } })
    }

    const displaySeb = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ BEARD: 'no beard' })
        setIsDisplayedItem({ TOPS: <TShirt/> })
        setIsDisplayedItem({ GLASSES: 'no glasses' })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000', TOPS: "#6F67D9" } })
    }

    const displayLoick = () => {
        setIsDisplayedItem({ HAIR: 'no hair (loïck)' })
        setIsDisplayedItem({ TOPS: <TShirt/> })
        setIsDisplayedItem({ JEWELLERY: <Bowtie1/> })
        setIsDisplayedItem({ BEARD: <Beard1 /> })
        setIsDisplayedItem({ GLASSES: <Glasses1 /> })
        setIsDisplayedItem({ colours: { ...colours, TOPS: "#6F67D9" } })

    }

    return (

        <DefaultAvatarsContainer>
            <DefaultAvatarButton onClick={displayJeff} >
                <p>Jeff</p>
            </DefaultAvatarButton>
            <DefaultAvatarButton onClick={displayCeleste}>
                <p>Celeste</p>
            </DefaultAvatarButton>
            <DefaultAvatarButton onClick={displayHugo}>
                <p>Hugo</p>
            </DefaultAvatarButton>
            <DefaultAvatarButton onClick={displaySeb}>
                <p>Seb</p>
            </DefaultAvatarButton>
            <DefaultAvatarButton onClick={displayLoick}>
                <p>Loick</p>
            </DefaultAvatarButton>
        </DefaultAvatarsContainer >
    );
}

export default DefaultAvatars;