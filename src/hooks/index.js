import React, { createContext, useCallback, useContext, useReducer } from 'react'
import Shoes1 from '../components/Items/Shoes/Shoes1'
import RoundEyes from '../components/Items/Eyes/RoundEyes'
import LongHair from '../components/Items/Hair/LongHair'
import Mouth from '../components/Items/Mouth/Mouth'
import TShirt from '../components/Items/Tops/TShirt'
import Pantalon from '../components/Items/Bottom/Pantalon'
import Brows1 from '../components/Items/EyeBrows/Brows1'
import Mailjet from '../components/Brands/Mailjet'




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
        colour: '#fff',
        BODY: <TShirt/>,
        BOTTOM: <Pantalon/>,
        MOUTH: <Mouth/>,
        EYES: <RoundEyes/>,
        EYEBROWS: <Brows1/>,
        HAIR: <LongHair/>,
        TOP: <TShirt/>,
        SHOES: <Shoes1/>,
        BACKGROUND: <Mailjet/>,

    }

    const reducer = (state, action = {}) => {
        const { name } = action
        switch (name) {
            case ACTIONS.SET_STATE:
                return { ...state,  ...action.payload }
            // case ACTIONS.CATEGORY:
            //         return { ...state, category: action.payload.category}
            // case ACTIONS.COLOUR:
            //     return { ...state, colour: action.payload.colour }
            default:
                return null
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const setIsDisplayedItem = newState =>
        dispatch({ name: ACTIONS.SET_STATE, payload : newState })

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
