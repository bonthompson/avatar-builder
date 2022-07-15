import { DefaultAvatarsContainer, DefaultAvatarButton } from './styles/index'
import { useRequestsContext, useAvatarCreatorDataContext } from '../../hooks/index'
import { Beard1 } from 'components/Parts/Beards';
import { BowTie } from '../Parts/JEWELLRY';
import { Glasses1 } from 'components/Parts/Glasses'
import { Hair1, Hair2 } from 'components/Parts/Hair';
import { Shirt1, Shirt5 } from 'components/Parts/Shirts';

const DefaultAvatars = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    const { colours } = useAvatarCreatorDataContext()

    const displayJeff = () => {
        setIsDisplayedItem({ HAIR: <Hair2 /> })
        setIsDisplayedItem({ BEARD: 'no beard' })
        setIsDisplayedItem({ JEWELLERY: 'no jewellery' })
        setIsDisplayedItem({ TOPS: <Shirt5 /> })
        setIsDisplayedItem({ GLASSES: <Glasses1 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000', TOPS: "#6F67D9" } })
    }

    const displayCeleste = () => {
        setIsDisplayedItem({ HAIR: <Hair1 /> })
        setIsDisplayedItem({ TOPS: <Shirt5 /> })
        setIsDisplayedItem({ BEARD: 'no beard' })
        setIsDisplayedItem({ GLASSES: 'no glasses' })
        setIsDisplayedItem({ JEWELLERY: 'no jewellery' })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#E0AC69', TOPS: "#D13D42" } })
    }

    const displayHugo = () => {
        setIsDisplayedItem({ HAIR: <Hair2 /> })
        setIsDisplayedItem({ BEARD: <Beard1 /> })
        setIsDisplayedItem({ TOPS: <Shirt1 /> })
        setIsDisplayedItem({ GLASSES: 'no glasses' })
        setIsDisplayedItem({ JEWELLERY: 'no jewellery' })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#724837', TOPS: "#6F67D9", BEARD: '#724837' } })
    }

    const displaySeb = () => {
        setIsDisplayedItem({ HAIR: <Hair2 /> })
        setIsDisplayedItem({ BEARD: 'no beard' })
        setIsDisplayedItem({ TOPS: <Shirt1 /> })
        setIsDisplayedItem({ GLASSES: 'no glasses' })
        setIsDisplayedItem({ JEWELLERY: 'no jewellery' })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000', TOPS: "#6F67D9" } })
    }

    const displayLoick = () => {
        setIsDisplayedItem({ HAIR: 'no hair (loïck)' })
        setIsDisplayedItem({ TOPS: <Shirt1 /> })
        setIsDisplayedItem({ JEWELLERY: <BowTie /> })
        setIsDisplayedItem({ BEARD: <Beard1 /> })
        setIsDisplayedItem({ GLASSES: <Glasses1 /> })
        setIsDisplayedItem({ colours: { ...colours, TOPS: "#6F67D9", BEARD: '#000' } })

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