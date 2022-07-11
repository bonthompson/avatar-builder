import BRANDS from "../../config/brand";
import Mailgun from "./Mailgun.png"


const Brands = ({brandName}) => {

    let realChildren = "";

    switch(brandName) {
        case BRANDS.mailgun:
            realChildren = <img src={Mailgun} alt="brand"/>
            break;
        default:
            realChildren = <img src={Mailgun} alt="brand"/>
    }

    return(
        <div style={{
            margin: '20px 25px auto auto'
        }}>
            {realChildren}
        </div>
    )
}

export default Brands;