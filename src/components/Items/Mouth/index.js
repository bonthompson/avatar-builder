import React from 'react';
import ITEMS from '../../../config/items';
import Mouth from './Mouth';


export const MouthContainer = ({style, ...rest}) =>  {

    switch (style) {
        case ITEMS.MOUTH.MOUTH_1:
            return (<Mouth {...rest}/>)
        default:
            return (<Mouth {...rest}/>)
    }

}
export default MouthContainer;