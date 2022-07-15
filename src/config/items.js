import { Baguette } from '../components/Parts/Items';
import { Beard1 } from '../components/Parts/Beards';

import {
    Bottoms1,
    Bottoms2
} from '../components/Parts/Bottoms';

import {
    Brows1,
    Brows2,
    Brows3,
} from '../components/Parts/Brows';

import {
    Eyes1,
    Eyes2,
    Eyes3,
    Eyes4,
    Eyes5,
    Eyes6,
} from '../components/Parts/Eyes';

import { Glasses1 } from '../components/Parts/Glasses/index.js';

import {
    Hair1,
    Hair2,
    Hair3,
    Hair4,
    Hair5,
    Hair6,
    Hair7,
} from '../components/Parts/Hair';

import {
    BowTie
} from '../components/Parts/JEWELLRY';

import {
    Mouth1,
    Mouth2,
    Mouth3,
    Mouth4,
} from '../components/Parts/Mouths';

import {
    Shirt1,
    Shirt2,
    Shirt3,
    Shirt4,
    Shirt5
} from '../components/Parts/Shirts';

import { Shoes } from '../components/Parts/Shoes';

import Mailjet from '../components/Brands/Mailjet';
import Mailgun from '../components/Brands/Mailgun';

export const ITEMS = {
    BODY: [],
    BEARD: [
        "no beard",
        Beard1
    ],
    JEWELLERY: [
        "no jewellery",
        BowTie,
    ],
    TOPS: [
        Shirt1,
        Shirt2,
        Shirt3,
        Shirt4,
        Shirt5,
    ],
    EYES: [
        Eyes1,
        Eyes2,
        Eyes3,
        Eyes4,
        Eyes5,
        Eyes6,
    ],
    GLASSES: [
        "no glasses",
        Glasses1,
    ],
    HAIR: [
        Hair1,
        Hair2,
        Hair3,
        Hair4,
        Hair5,
        Hair6,
        Hair7,
        "no hair"
    ],
    MOUTH: [
        Mouth1,
        Mouth2,
        Mouth3,
        Mouth4,
    ],
    BOTTOMS: [
        Bottoms1,
        Bottoms2,
    ],
    EYEBROWS: [
        Brows1,
        Brows2,
        Brows3,
    ],
    NOSE: [],
    SHOES: [
        Shoes,
    ],
    MISC: [
        'no misc',
        Baguette
    ],
    BACKGROUND: [
        Mailjet,
        Mailgun,
    ]
}

export default ITEMS