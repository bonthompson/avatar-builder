import { BigEar01, BigEar02 } from '../assets/body'

//Shoes
import Shoes1 from '../components/Items/Shoes/Shoes1'


//Glasses
import Glasses1 from '../components/Items/Glasses/Glasses1'


//Eyes
import EyesWithEyelashes from '../components/Items/Eyes/EyesWithEyelashes'
import RoundEyes from '../components/Items/Eyes/RoundEyes'
import { Eyes3 } from '../components/Items/Eyes/Eyes3';
import { Eyes4 } from '../components/Items/Eyes/Eyes4';
import { Eyes5 } from '../components/Items/Eyes/Eyes5';
import { Eyes6 } from '../components/Items/Eyes/Eyes6';

//Brows
import Brows1 from '../components/Items/EyeBrows/Brows1'
import Brows2 from '../components/Items/EyeBrows/Brows2'
import { Brows3 } from '../components/Items/EyeBrows/Brows3'

//Hair
import Hair from '../components/Items/Hair';
import LongHair from '../components/Items/Hair/LongHair'
import ShortHair from '../components/Items/Hair/ShortHair'
import { Hair3 } from '../components/Items/Hair/Hair3';
import { Hair4 } from '../components/Items/Hair/Hair4';
import { Hair5 } from '../components/Items/Hair/Hair5';
import { Hair6 } from '../components/Items/Hair/Hair6';

//Mouth
import { Mouth2 } from '../components/Items/Mouth/Mouth2';
import { Mouth3 } from '../components/Items/Mouth/Mouth3';
import { Mouth4 } from '../components/Items/Mouth/Mouth4';

//Misc
import Mailjet from '../components/Brands/Mailjet'
import Mailgun from '../components/Brands/Mailgun'
import TShirt from '../components/Items/Tops/TShirt';
import Dress from '../components/Items/Tops/Dress';

//Beard
import Beard1 from 'components/Items/Beard/Beard1'

export const ITEMS = {
    BODY: [],
    BEARD: [<Beard1 />],
    TOPS: [
        <TShirt />,
        <Dress />,
    ],
    EYES: [
        <RoundEyes />,
        <EyesWithEyelashes />,
        <Eyes3 />,
        <Eyes4 />,
        <Eyes5 />,
        <Eyes6 />
    ],
    GLASSES: [
        <Glasses1 />,
        "no glasses"
    ],

    HAIR: [
        <LongHair />,
        <ShortHair />,
        <Hair3 />,
        <Hair4 />,
        <Hair5 />,
        <Hair6 />,
        "no hair (loïck)"
    ],
    MOUTH: [
        <Mouth2 />,
        <Mouth3 />,
        <Mouth4 />,
    ],
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