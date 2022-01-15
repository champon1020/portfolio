import React from "react";
import styled from "styled-components";

import Author from "../atoms/Author";
import Date from "../atoms/Date";
import SubTitle from "../atoms/SubTitle";
import Title from "../atoms/Title";

const StyledContainer = styled.li`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

type Props = {
  title?: string;
  journal?: string;
  authors?: string;
  month?: string;
  year?: number;
};

const PublicationItem = (props: Props) => {
  const { title, journal, authors, month, year } = props;

  return (
    <StyledContainer>
      <Title value={title} />
      <Author value={authors} />
      <SubTitle value={journal} />
      <Date month={month} year={year} />
    </StyledContainer>
  );
};

export default PublicationItem;
