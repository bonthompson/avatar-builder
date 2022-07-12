import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';


export const Eyes = ({style, ...rest}) =>  {

        const { EYES } = useAvatarCreatorDataContext()

    return(React.cloneElement(EYES, {...rest}))

}
export default Eyes;