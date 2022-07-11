import { StyledAvatarContainer, StyledAvatar } from './styles/index'
import { useAvatarCreatorDataContext } from '../../hooks/index'

const AvatarContainer = () => {
    const { isDisplayedItem } = useAvatarCreatorDataContext()

    return (
        <StyledAvatarContainer className="avatar-container">
            Avatar Creator
            <StyledAvatar className="avatar-container">
                <img src={`${isDisplayedItem}`} />
            </StyledAvatar>
        </StyledAvatarContainer>
    );
}

export default AvatarContainer;