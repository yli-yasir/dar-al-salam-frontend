import styled from "styled-components";

import LanguageSelect from "../LanguageSelect";

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  position: relative;
`;

const StyledLanguageSelect = styled(LanguageSelect)`
  top: 0;
  right: 0;
  position: absolute;
`;

export default function Page({ children, ...props }) {
  return (
    <Root {...props}>
      <StyledLanguageSelect />
      {children}
    </Root>
  );
}
