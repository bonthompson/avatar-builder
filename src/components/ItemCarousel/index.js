import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemCarouselContainer, StyledSlide } from './styles/index'
import { useAvatarCreatorDataContext, useRequestsContext } from '../../hooks/index'
import { ITEMS } from '../../config/items'

const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    arrows: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
}

const ItemCarousel = () => {
    const { setIsDisplayedItem } = useRequestsContext()
    const { category } = useAvatarCreatorDataContext()
    return (
        <ItemCarouselContainer>

            <Slider {...settings}>
                {ITEMS[category].map(item => (
                    <StyledSlide
                        onClick={() => setIsDisplayedItem({[category] : item})}>
                        {item}
                    </StyledSlide>
                ))}
            </Slider>
        </ItemCarouselContainer>
    );
}

export default ItemCarousel;
