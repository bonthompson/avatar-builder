import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';



export const Glasses = ({ style, ...rest }) => {

        const { GLASSES } = useAvatarCreatorDataContext()

        
    let element ="";
    
    GLASSES !== "no glasses" ? element = React.cloneElement(GLASSES, {...rest}) : element = "";

    return element;

}

export default Glasses;