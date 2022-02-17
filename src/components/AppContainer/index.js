import styled from "styled-components";

import LanguageSelect from "../LanguageSelect";

// Todo use vars for language

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
  position: relative;
  font-family: ${(props) =>
    props.lang === "en"
      ? `'Permanent Marker', cursive`
      : `'Lemonada', cursive`};
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
