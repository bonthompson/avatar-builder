import React from 'react';
import ITEMS from '../../../config/items';
import TShirt from './TShirt';


export const Top = ({style, ...rest}) =>  {

    switch (style) {
        case ITEMS.TOPS.T_SHIRT:
            return (<TShirt {...rest}/>)
        default:
            return (<TShirt {...rest}/>)
    }

}