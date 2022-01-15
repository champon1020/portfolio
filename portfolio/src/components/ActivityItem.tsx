import React from "react";
import styled from "styled-components";

import Date from "../atoms/Date";
import Discription from "../atoms/Discription";
import SubTitle from "../atoms/SubTitle";
import Title from "../atoms/Title";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

type Props = {
  title?: string;
  month?: string;
  year?: number;
  discription?: string;
};

const EducationItem = (props: Props) => {
  const { title, month, year, discription } = props;

  return (
    <StyledContainer>
      <Title value={title} />
      <Date month={month} year={year} />
      <Discription value={discription} />
    </StyledContainer>
  );
};

export default EducationItem;
