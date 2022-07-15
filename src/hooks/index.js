import React, { createContext, useCallback, useContext, useReducer } from 'react'

import { ITEMS } from '../config/items';

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
    console.log(ITEMS)
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
        BOTTOM: ITEMS.BOTTOMS[0],
        BEARD: ITEMS.BEARD[0],
        JEWELLERY: ITEMS.JEWELLERY[0],
        MOUTH: ITEMS.MOUTH[0],
        GLASSES: ITEMS.GLASSES[0],
        EYES:  ITEMS.EYES[0],
        EYEBROWS: ITEMS.EYEBROWS[0],
        HAIR: ITEMS.HAIR[0],
        TOPS: ITEMS.TOPS[0],
        SHOES: ITEMS.SHOES[0],
        MISC: ITEMS.MISC[0],
        BACKGROUND: ITEMS.BACKGROUND[0],

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
