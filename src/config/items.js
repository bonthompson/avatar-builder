import { BigEar01, BigEar02 } from '../assets/body'
import EyesWithEyelashes from '../components/Items/Eyes/EyesWithEyelashes'
import Shoes1 from '../components/Items/Shoes/Shoes1'

import RoundEyes from '../components/Items/Eyes/RoundEyes'
import Brows1 from '../components/Items/EyeBrows/Brows1'
import Brows2 from '../components/Items/EyeBrows/Brows2'
import LongHair from '../components/Items/Hair/LongHair'
import ShortHair from '../components/Items/Hair/ShortHair'
import Mailjet from '../components/Brands/Mailjet'
import Mailgun from '../components/Brands/Mailgun'

export const ITEMS = {
    BODY: [],
    TOPS: [
        <RoundEyes />,
    ],
    EYES: [
        <RoundEyes />,
        <EyesWithEyelashes />,
    ],
    HAIR: [
        <LongHair />,
        <ShortHair />,

    ],
    MOUTH: [],
    BOTTOMS: [],
    EYEBROWS: [
        <Brows1 />,
        <Brows2 />,
    ],
    NOSE: [],
    SHOES: [
        <Shoes1 />,
    ],
    MISC: [],
    BACKGROUND: [
        <Mailjet />,
        <Mailgun />,
    ]
}

export default ITEMS