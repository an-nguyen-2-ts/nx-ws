import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h1`
  color: #000;
  font-size: 24px;
  font-weight: bold;
`;

const Heading = ({ children }) => {
  return <StyledHeading>{children}</StyledHeading>;
};

export default Heading;
