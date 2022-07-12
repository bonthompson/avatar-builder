import React from "react";

import { useAvatarCreatorDataContext } from '../../hooks';

const Brands = ({style, ...rest}) =>  {

    const { BACKGROUND} = useAvatarCreatorDataContext()

    return(React.cloneElement(BACKGROUND, {...rest}))
}

export default Brands;