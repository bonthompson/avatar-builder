import React from 'react';
import { ITEMS } from '../../../config/items';
import Mouth from './Mouth';
import { useAvatarCreatorDataContext } from '../../../hooks';



export const MouthContainer = ({ style, ...rest }) => {

    const { MOUTH } = useAvatarCreatorDataContext()

        
    let element ="";
    
    MOUTH !== "no mouth" ? element = React.cloneElement(MOUTH, {...rest}) : element = "";

    return element;

}

export default MouthContainer;