import AvatarContainer from '../AvatarContainer/index'
import StyledContainer from './styles/index'
import Download from '../Download/index'
import ItemCarousel from '../ItemCarousel/index'
import CategoryButtons from '../CategoryButtons/index'

const Container = () => {

    return (
        <StyledContainer className="layout-container">
            <AvatarContainer />
            <CategoryButtons />
            <ItemCarousel />
            <Download />
        </StyledContainer>
    );
}

export default Container;

