import React, { createContext, useCallback, useContext, useReducer } from 'react'
import Eyes from '../components/Items/Eyes'
import RoundEyes from '../components/Items/Eyes/RoundEyes'
import LongHair from '../components/Items/Hair/LongHair'
import Mouth from '../components/Items/Mouth/Mouth'
import TShirt from '../components/Items/Tops/TShirt'
import Pantalon from '../components/Items/Bottom/Pantalon'


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
            EYES: '#000',
            EYEBROWS: '#000',
            HAIR: '#FEF7D3',
            TOPS: '#3B76CB',
            BOTTOMS: '#F2F6F8',
            FEET: '#000'
        },
        BODY: <TShirt />,
        BOTTOM: <Pantalon />,
        MOUTH: <Mouth />,
        EYES: <RoundEyes />,
        HAIR: <LongHair />,
        TOP: <TShirt />,
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
