import {cloneElement} from 'react';
import styled from 'styled-components';

import {useAvatarCreatorDataContext} from '../../hooks';
import { Body } from './Body';

const StyledDiv = styled('div')`
  height: 415px;
  margin: 0 auto;
  padding: 50px 0;
  position: relative;
  width: 221px;
`;

const PartContainer = styled('div')`
  height: 100%;
  position: absolute;
  width: 100%;
  
  svg {
    height: 100%;
    width: 100%;
  }
`;

export function BodyContainer() {
  const { colours, BEARD, BOTTOM, EYEBROWS, EYES, GLASSES, HAIR, JEWELLERY, MISC, MOUTH, SHOES, TOPS } = useAvatarCreatorDataContext()
  const BeardPart = BEARD;
  const BottomPart = BOTTOM;
  const EyeBrowPart = EYEBROWS;
  const EyePart = EYES;
  const GlassesPart = GLASSES;
  const HairPart = HAIR;
  const JewellryPart = JEWELLERY;
  const MiscPart = MISC;
  const MouthPart = MOUTH;
  const ShoePart = SHOES;
  const ShirtPart = TOPS;

  return (
      <StyledDiv>
        <PartContainer>
          <Body color={colours.BODY}/>
        </PartContainer>
        <PartContainer>
          <BottomPart color={colours.BOTTOM} />
        </PartContainer>
        <PartContainer>
          <EyePart color={colours.EYES} />
        </PartContainer>
        <PartContainer>
          <EyeBrowPart color={colours.EYEBROWS} />
        </PartContainer>
        <PartContainer>
          <MouthPart />
        </PartContainer>
        {BEARD !== 'no beard' && (
            <PartContainer>
              <BeardPart color={colours.BEARD} />
            </PartContainer>
        )}
        <PartContainer>
          <ShirtPart color={colours.TOPS} />
        </PartContainer>
        {HAIR !== 'no hair' && (
            <PartContainer>
              <HairPart color={colours.HAIR} />
            </PartContainer>
        )}
        {MISC !== 'no misc' && (
            <PartContainer>
              <MiscPart />
            </PartContainer>
        )}
        {JEWELLERY !== 'no jewellery' && (
            <PartContainer>
              <JewellryPart />
            </PartContainer>
        )}
        {GLASSES !== 'no glasses' && (
            <PartContainer>
              <GlassesPart color={colours.GLASSES} />
            </PartContainer>
        )}
        <PartContainer>
          <ShoePart color={colours.SHOES} />
        </PartContainer>
      </StyledDiv>
  );
}