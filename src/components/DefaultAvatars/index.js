import { DefaultAvatarsContainer, DefaultAvatarButton } from './styles/index'
import { useRequestsContext, useAvatarCreatorDataContext } from '../../hooks/index'
import { Hair3 } from 'components/Items/Hair/Hair3'


const DefaultAvatars = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    const { colours } = useAvatarCreatorDataContext()

    const displayJeff = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000' } })
    }

    const displayCeleste = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000' } })
    }

    const displayHugo = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000' } })
    }

    const displaySeb = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000' } })
    }

    const displayLoick = () => {
        setIsDisplayedItem({ HAIR: <Hair3 /> })
        setIsDisplayedItem({ colours: { ...colours, HAIR: '#000' } })
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