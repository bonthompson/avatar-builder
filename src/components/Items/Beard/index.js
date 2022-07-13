import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';



export const Beard = ({ style, ...rest }) => {

        const { BEARD } = useAvatarCreatorDataContext()

        
    let element ="";
    
    BEARD !== "no beard" ? element = React.cloneElement(BEARD, {...rest}) : element = "";

    return element;

}

export default Beard;