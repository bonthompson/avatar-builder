import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';


export const Hair = ({ style, ...rest }) => {

    const { HAIR } = useAvatarCreatorDataContext()

    let hair ="";
    
    HAIR !== "no hair (loïck)" ? hair = React.cloneElement(HAIR, {...rest}) : hair = "";

    return hair;
}
export default Hair;