import React, { createContext, useCallback, useContext, useReducer } from 'react'

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

const useAvatarCreatorDataContext = () =>
    useAvatarCreatorContext(AvatarCreatorDataContext)
const useRequestsContext = () => useAvatarCreatorContext(RequestsContext)


const AvatarCreatorProvider = ({ children }) => {

    const initialState = {
        isDisplayedItem: [],
        category: 'BODY',
        colour: '#fff'
    }

    const reducer = (state, action = {}) => {
        const { name, newState } = action
        switch (name) {
            case ACTIONS.DISPLAYED_ITEMS:
                return { ...state, isDisplayedItem: newState }
            case ACTIONS.CATEGORY:
                return { ...state, category: newState }
            case ACTIONS.COLOUR:
                return { ...state, colour: newState }
            default:
                return null
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const setIsDisplayedItem = isDisplayedItem =>
        dispatch({ name: ACTIONS.DISPLAYED_ITEMS, newState: isDisplayedItem })
    const setCategory = category =>
        dispatch({ name: ACTIONS.CATEGORY, newState: category })
    const setColour = colour =>
        dispatch({ name: ACTIONS.COLOUR, newState: colour })


    return (
        <AvatarCreatorDataContext.Provider value={state}>
            <RequestsContext.Provider
                value={{
                    setIsDisplayedItem,
                    setCategory,
                    setColour
                }}
            >
                {children}
            </RequestsContext.Provider>
        </AvatarCreatorDataContext.Provider>
    )
}

export { AvatarCreatorProvider, useRequestsContext, useAvatarCreatorDataContext }
