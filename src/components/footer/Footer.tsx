import React from "react";
import styled from "styled-components";

import Text from "../../atoms/Text";
import accountData from "../../configs/account.json";

type StyleProps = {
  fontSize?: string;
  margin?: string;
  height?: string;
  lineHeight?: string;
  backgroundColor?: string;
};

const StyledFooter = styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  border-top: solid thin lightgray;
  text-align: center;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  height: ${(props) => props.height};
  line-height: ${(props) => props.lineHeight};
  background-color: ${(props) => props.backgroundColor};
`;

type Props = {
  style?: StyleProps;
};

const Footer = (props: Props) => {
  return (
    <StyledFooter {...props.style}>
      <Text text="Copyright©2022. Developed by" />
      <span>&nbsp;</span>
      <Text text="Yoshiki Nagasaki" link={accountData[0].url} />
    </StyledFooter>
  );
};

export default Footer;
