import React from 'react';
import ITEMS from '../../../config/items';
import RoundEyes from './RoundEyes';


export const MouthContainer = ({style, ...rest}) =>  {

    switch (style) {
        case ITEMS.EYES.ROUND_EYES:
            return (<RoundEyes {...rest}/>)
        default:
            return (<RoundEyes {...rest}/>)
    }

}
export default MouthContainer;