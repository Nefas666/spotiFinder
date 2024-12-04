'use client'

import React from 'react';
import styled from 'styled-components';

const Pattern = () => {
  return (
    <StyledWrapper>
      <div className="container-pattern w-screen h-sceen absolute t-0 l-0 -z-10" />
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .container-pattern {
    width: 100%;
    height: 100%;
    --s: 300px; /* control the size */
    --c1: #44FFD2;
    --c2: #000;

    --_g: var(--c2) 4% 14%, var(--c1) 14% 24%, var(--c2) 22% 34%,
      var(--c1) 34% 44%, var(--c2) 44% 56%, var(--c1) 56% 66%, var(--c2) 66% 76%,
      var(--c1) 76% 86%, var(--c2) 86% 96%;
    background: radial-gradient(
        100% 100% at 100% 0,
        var(--c1) 4%,
        var(--_g),
        #0008 96%,
        #0000
      ),
      radial-gradient(
          100% 100% at 0 100%,
          #0000,
          #0008 4%,
          var(--_g),
          var(--c1) 96%
        )
        var(--c1);
    background-size: var(--s) var(--s);
  }`;

export default Pattern;
