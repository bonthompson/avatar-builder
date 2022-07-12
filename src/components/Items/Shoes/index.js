import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';


export const Shoes = ({style, ...rest}) =>  {

    const { SHOES} = useAvatarCreatorDataContext()

    return(React.cloneElement(SHOES, {...rest}))
}