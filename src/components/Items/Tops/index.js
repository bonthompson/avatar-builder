import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';

export const Top = ({ style, ...rest }) => {

    const { TOPS} = useAvatarCreatorDataContext()

    return(React.cloneElement(TOPS, {...rest}))
}