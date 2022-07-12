import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TwitterPicker } from 'react-color'

import { ItemCarouselContainer, StyledSlide, StyledDiv } from './styles/index'
import { useAvatarCreatorDataContext, useRequestsContext } from '../../hooks/index'
import { ITEMS } from '../../config/items'

const ItemCarousel = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    const { category, colours } = useAvatarCreatorDataContext()

    const settings = {
        dots: false,
        infinite: true,
        autoplay: false,
        arrows: true,
        slidesToShow: ITEMS[category] && ITEMS[category].length < 6 ? ITEMS[category].length : 6,
        slidesToScroll: 1
    }

    const handleChangeComplete = (color) => {
        setIsDisplayedItem({ colours: { ...colours, [category]: color.hex } })

    }

    const getSelectColours = category => {
        switch (category) {
            case 'BODY':
                return ['#8d5524', '#c68642', '#e0ac69', '#f1c27d', '#ffdbac', '#E0AB8B', '#FDCDA7', '#FFEBE8', '#724837']
            case 'EYES':
                return ['#634e34', '#2e536f', '#3d671d', '#1c7847', '#497665', '#A1CAF1', '#070B18', '#11819D', '#ff1111']
            case 'HAIR':
                return ['#000', '#3B76CB', '#6F67D9', '#377386', '#098761', '#3B76CB', '#BD43B5', '#11819D', '#E37452']
            case 'EYEBROWS':
                return ['#000', '#3B76CB', '#6F67D9', '#377386', '#098761', '#3B76CB', '#BD43B5', '#11819D', '#E37452']
            default:
                return ['#D13D42', '#3B76CB', '#6F67D9', '#377386', '#098761', '#3B76CB', '#BD43B5', '#11819D', '#E37452']
        }
    }

    return (
        <ItemCarouselContainer>
            <StyledDiv>
                {(category !== 'MISC' || category !== 'MOUTH') &&
                    <TwitterPicker
                        color={colours[category]}
                        colors={getSelectColours(category)}
                        onChangeComplete={handleChangeComplete} />
                }
            </StyledDiv>

            <Slider {...settings}>
                {ITEMS[category].map(item => (
                    <StyledSlide
                        onClick={() => setIsDisplayedItem({ [category]: item })}>
                        {item}
                    </StyledSlide>
                ))}
            </Slider>
        </ItemCarouselContainer>
    )
}

export default ItemCarousel;
