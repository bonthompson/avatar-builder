import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';



export const Jewellery = ({ style, ...rest }) => {

        const { JEWELLERY } = useAvatarCreatorDataContext()

        
    let element ="";
    
    JEWELLERY !== "no jewellery" ? element = React.cloneElement(JEWELLERY, {...rest}) : element = "";

    return element;

}

export default Jewellery;