import React from 'react';
import ITEMS from '../../../config/items';
import { useAvatarCreatorDataContext } from '../../../hooks';
import Pantalon from './Pantalon';


export const Bottom = ({style, ...rest}) =>  {

    const { BOTTOM} = useAvatarCreatorDataContext()

    return(React.cloneElement(BOTTOM, {...rest}))
}