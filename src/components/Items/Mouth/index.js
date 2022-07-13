import React from 'react';
import { ITEMS } from '../../../config/items';
import Mouth from './Mouth';
import { useAvatarCreatorDataContext } from '../../../hooks';



export const MouthContainer = ({ style, ...rest }) => {

        const { MOUTH } = useAvatarCreatorDataContext()

    return(React.cloneElement(MOUTH, {...rest}))

}

export default MouthContainer;