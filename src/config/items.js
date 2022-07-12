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
    BODY: [
        <BigEar02 />,
    ],
    TOPS: [
        <RoundEyes />,
    ],
    EYES: [
        <RoundEyes />,
        <EyesWithEyelashes />,
        <BigEar01 />,
    ],
    HAIR: [
        <LongHair/>,
        <ShortHair/>,
     
    ],
    MOUTH: [
        <BigEar02 />,
        <BigEar01 />,
        <BigEar01 />,
        <BigEar01 />,
        <BigEar01 />,
    ],
    BOTTOMS: [
        <BigEar02 />,
        <BigEar01 />,
        <BigEar01 />,
        <BigEar01 />,
        <BigEar01 />,
    ],
    EYEBROWS: [
        <Brows1/>,
        <Brows2/>,
    ],
    NOSE: [
        <BigEar01 />,
    ],
    SHOES: [
        <Shoes1/>,
    ],
    MISC: [
        <BigEar01 />,
    ],
    BACKGROUND: [
        <Mailjet/>,
        <Mailgun/>,
    ]
}

export default ITEMS