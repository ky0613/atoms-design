import { memo } from "react";
import styled from "styled-components";

import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = memo(() => {
  console.log("SearchInput");

  return (
    <SContainer>
      <Input placeholder="検索条件を入力" />
      <SButttonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButttonWrapper>
    </SContainer>
  );
});

const SContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SButttonWrapper = styled.div`
  padding-left: 8px;
`;
