import React from "react";
import styled from "styled-components";

import PublicationItem from "./PublicationItem";

const StyledContainer = styled.ul<{ color?: string }>`
  width: 100%;
  color: ${({ color }) => (color != null ? color : "black")};
`;

type Props = {
  color?: string;
};

const Conference = (props: Props) => {
  const { color } = props;

  return (
    <StyledContainer color={color}>
      <PublicationItem
        title={
          "Temporal Cross Modal Attention for Audio-Visual Event Localization"
        }
        journal={
          "The 7th IIEEJ International Conference on Image Electronics and Visual Computing (IEVC2021), 1P-11"
        }
        authors={
          "Yoshiki Nagasaki, Masaki Hayashi, Naoshi Kaneko and Yoshimitsu Aoki"
        }
        month={"September"}
        year={2021}
      />
    </StyledContainer>
  );
};

export default Conference;
