import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ItemCarouselContainer, StyledSlide } from './styles/index'
import { useRequestsContext } from '../../hooks/index'

const images = ['https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200', 'https://picsum.photos/200']

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
    return (
        <ItemCarouselContainer>

            <Slider {...settings}>
                {images.map(item => (
                    <StyledSlide
                        onClick={() => setIsDisplayedItem(item)}
                    >
                        <img src={item} />
                    </StyledSlide>
                ))}
            </Slider>
        </ItemCarouselContainer>
    );
}

export default ItemCarousel;
