import React from 'react';
import ITEMS from '../../../config/items';
import LongHair from './LongHair';


export const Hair = ({style, ...rest}) =>  {

    switch (style) {
        case ITEMS.HAIR.LONG_HAIR:
            return (<LongHair {...rest}/>)
        default:
            return (<LongHair {...rest}/>)
    }

}
export default Hair;