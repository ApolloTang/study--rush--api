import React from "react";
import styled from "styled-components";
import img from './peanuts/peanuts.jpg'

import Cat from '@myscope/ui--react-cat-image';

const ComponentStyled = styled.div`
  border: 1px solid blue;
  padding: 10px;
`;

const Component = () => (
  <ComponentStyled>
    <div>This is @myscope/ui-component-1 with styled</div>
    <div>here is an images of peanutsx</div>
    <div>
      <img src={img} width="150px"/>
    </div>
    <Cat />
  </ComponentStyled>
);

const XXXComponent = () => (
  <div> this is @myscope/ui-component-1 </div>
);

export default Component;
