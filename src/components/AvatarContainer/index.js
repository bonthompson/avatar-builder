
import React from 'react';
import { StyledAvatarContainer, StyledAvatar } from './styles/index'
import { useAvatarCreatorDataContext } from '../../hooks/index'
import Face from "../Items/Face";
import styled from 'styled-components';
import { Top } from '../Items/Tops';
import Brands from '../Brands';

const BodyContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 200px;
        align-items: center;
    `

const AvatarContainer = React.forwardRef((pops, ref) => {
        const { isDisplayedItem } = useAvatarCreatorDataContext()

    return (
        <StyledAvatarContainer ref={ref} className="avatar-container" color='#7A7885'>
            <Brands/>
           <BodyContainer>
            <Face/>
            <Top/>
            </BodyContainer>
            <img src={`${isDisplayedItem}`} />

        </StyledAvatarContainer>
    );
});

export default AvatarContainer;