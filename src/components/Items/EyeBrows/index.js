import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';


export const EyeBrows = ({style, ...rest}) =>  {

        const { EYEBROWS } = useAvatarCreatorDataContext()

    return(React.cloneElement(EYEBROWS, {...rest}))

}
export default EyeBrows;