import React from 'react';
import ITEMS from '../../../config/items';
import { useAvatarCreatorDataContext } from '../../../hooks';


export const Hair = ({style, ...rest}) =>  {

    const { HAIR } = useAvatarCreatorDataContext()

    return(React.cloneElement(HAIR, {...rest}))

}
export default Hair;