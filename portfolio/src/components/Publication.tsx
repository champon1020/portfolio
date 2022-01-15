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

const Publication = (props: Props) => {
  const { color } = props;

  return (
    <StyledContainer color={color}>
      <PublicationItem
        title={
          "動画内の音と映像によるイベント推定タスクにおける時間方向クロスモーダルアテンションの導入"
        }
        journal={"精密工学会誌（採録決定）"}
        authors={"長崎好輝，林昌希，金子直史，青木義満"}
        month={"Not Decided"}
        year={2022}
      />
    </StyledContainer>
  );
};

export default Publication;
