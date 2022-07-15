
import React from 'react';
import { StyledAvatarContainer, StyledAvatar } from './styles/index'
import { useAvatarCreatorDataContext } from '../../hooks/index'
import {BodyContainer} from '../Parts/BodyContainer';
import Brands from '../Brands';


const AvatarContainer = React.forwardRef((pops, ref) => {
    const { colours, BACKGROUND } = useAvatarCreatorDataContext()
    return (
        <StyledAvatarContainer ref={ref} className="avatar-container" color={colours. BACKGROUND}>
          <BACKGROUND />
          <BodyContainer />
        </StyledAvatarContainer>
    );
});

export default AvatarContainer;