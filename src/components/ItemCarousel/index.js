import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TwitterPicker } from 'react-color'

import { ItemCarouselContainer, StyledSlide } from './styles/index'
import { useAvatarCreatorDataContext, useRequestsContext } from '../../hooks/index'
import { ITEMS } from '../../config/items'

const ItemCarousel = () => {
    const { setIsDisplayedItem, setColour } = useRequestsContext()
    const { category, colour } = useAvatarCreatorDataContext()

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        slidesToShow: ITEMS[category].length < 6 ? ITEMS[category].length : 6,
        slidesToScroll: 1
    }

    const handleChangeComplete = (color) => {
        setColour(color.hex)
    }
    return (
        <ItemCarouselContainer>
            <Slider {...settings}>
                {ITEMS[category].map(item => (
                    <StyledSlide
                        // onMouseOver={changeBackground}
                        onClick={() => setIsDisplayedItem(item)}>
                        {item}
                    </StyledSlide>
                ))}
            </Slider>
            <TwitterPicker
                color={colour}
                // make this on hover
                // onSwatchHover={(e) => console.log(e)}
                colors={['#D13D42', '#3B76CB', '#6F67D9', '#377386', '#098761', '#3B76CB', '#BD43B5', '#11819D', '#E37452']}
                onChangeComplete={handleChangeComplete} />
        </ItemCarouselContainer>
    )
}

export default ItemCarousel;
