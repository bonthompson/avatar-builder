import React, { createContext, useCallback, useContext, useReducer } from 'react'
import Shoes1 from '../components/Items/Shoes/Shoes1'
import RoundEyes from '../components/Items/Eyes/RoundEyes'
import LongHair from '../components/Items/Hair/LongHair'
import { Mouth3 } from '../components/Items/Mouth/Mouth3'
import TShirt from '../components/Items/Tops/TShirt'
import Pantalon from '../components/Items/Bottom/Pantalon'
import Brows1 from '../components/Items/EyeBrows/Brows1'
import Mailjet from '../components/Brands/Mailjet'
import Dress from '../components/Items/Tops/Dress'
import { Glasses1 } from '../components/Items/Glasses/Glasses1'
import Beard1 from '../components/Items/Beard/Beard1'
import Bowtie1 from '../components/Items/Bowtie/Bowtie1'

const ACTIONS = {
    DISPLAYED_ITEMS: 'setDisplayedItems',
    CATEGORY: 'setCategory',
    COLOUR: 'setColour',
}

const useAvatarCreatorContext = AvatarCreatorContext => {
    const context = useContext(AvatarCreatorContext)
    if (!context) {
        throw new Error("Cannot retrieve manage apikey's context")
    }
    return context
}

const AvatarCreatorDataContext = createContext()
const RequestsContext = createContext()

const useAvatarCreatorDataContext = () => useAvatarCreatorContext(AvatarCreatorDataContext)
const useRequestsContext = () => useAvatarCreatorContext(RequestsContext)


const AvatarCreatorProvider = ({ children }) => {

    const initialState = {
        isDisplayedItem: ["test"],
        category: 'BODY',
        colours: { // merge this with below?
            BODY: '#FDCDA7',
            BEARD: '#FDCDA7',
            JEWELLERY: '#FDCDA7',
            EYES: '#000',
            GLASSES: '#000',
            EYEBROWS: '#000',
            HAIR: '#FEF7D3',
            TOPS: '#3B76CB',
            BOTTOMS: '#F2F6F8',
            FEET: '#000',
            NOSE: '#F2F6F8',
        },
        BODY: <Dress />,
        BOTTOM: <Pantalon />,
        BEARD: 'no beard',
        JEWELLERY: 'no jewellery',
        MOUTH: <Mouth3 />,
        GLASSES: 'no glasses',
        EYES: <RoundEyes />,
        EYEBROWS: <Brows1 />,
        HAIR: <LongHair />,
        TOPS: <TShirt />,
        SHOES: <Shoes1 />,
        BACKGROUND: <Mailjet />,

    }

    const reducer = (state, action = {}) => {
        const { name } = action
        console.log(state, 'state')
        switch (name) {
            case ACTIONS.SET_STATE:
                return { ...state, ...action.payload }
            default:
                return null
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const setIsDisplayedItem = newState =>
        dispatch({ name: ACTIONS.SET_STATE, payload: newState })

    return (
        <AvatarCreatorDataContext.Provider value={state}>
            <RequestsContext.Provider
                value={{
                    setIsDisplayedItem,
                }}
            >
                {children}
            </RequestsContext.Provider>
        </AvatarCreatorDataContext.Provider>
    )
}

export { AvatarCreatorProvider, useRequestsContext, useAvatarCreatorDataContext }
