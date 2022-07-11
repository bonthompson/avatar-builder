import AvatarContainer from '../AvatarContainer/index'
import StyledContainer from './styles/index'
// import Download from './styles/index'
const Container = () => {
    return (
        <StyledContainer className="layout-container">
            <AvatarContainer />
            {/* <Download /> */}
        </StyledContainer>
    );
}

export default Container; 
