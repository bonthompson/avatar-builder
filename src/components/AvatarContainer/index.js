
import React from 'react';
import { StyledAvatarContainer, StyledAvatar } from './styles/index'
import { useAvatarCreatorDataContext } from '../../hooks/index'
//import Brands from '../Brands';
import {BodyContainer} from '../Parts/BodyContainer';

// const BodyContainer = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// height: 500px;
// position: relative;`

const AvatarContainer = React.forwardRef((pops, ref) => {
    const { BACKGROUND } = useAvatarCreatorDataContext()
    return (
        <StyledAvatarContainer ref={ref} className="avatar-container" color={BACKGROUND}>
            {/*<Brands />*/}
{/*            <BodyContainer>
                <Body />
            </BodyContainer>*/}
          <BodyContainer />
        </StyledAvatarContainer>
    );
});

export default AvatarContainer;