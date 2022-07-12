import React from 'react';
import { useAvatarCreatorDataContext } from '../../../hooks';

export const Top = ({ style, ...rest }) => {

    const { TOP} = useAvatarCreatorDataContext()

    return(React.cloneElement(TOP, {...rest}))
}