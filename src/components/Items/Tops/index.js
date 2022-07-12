import React from 'react';
import ITEMS from '../../../config/items';
import { useAvatarCreatorDataContext } from '../../../hooks';
import TShirt from './TShirt';


export const Top = ({style, ...rest}) =>  {

    const { TOP} = useAvatarCreatorDataContext()

    return(React.cloneElement(TOP, {...rest}))
}