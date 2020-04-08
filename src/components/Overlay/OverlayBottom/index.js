import React, { cloneElement } from 'react';
import styled from 'styled-components';

import OverlayTiles from '../OverlayTiles/';
import content from "../../../assets/content";

const StyledBottom = styled.div`
  opacity: 1;
  background-color: #F7F7F7;
  height: auto;
  width: 100%;
  padding: 40px 0;
`;

const OverlayBottom = p => {
  const {children} = p;
  const { collaborate } = content;

  return (
    <StyledBottom>
      <OverlayTiles content={collaborate.tiles}/>
    </StyledBottom>
  )
}

export default OverlayBottom;