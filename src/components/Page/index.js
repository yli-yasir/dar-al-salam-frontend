import styled from "styled-components";
import { breakpoints } from "../../globalStyle";

const Root = styled.div`
  @media ${breakpoints.appBarShown(true)} {
    margin-top: var(--app-bar-height);
  }
  @media ${breakpoints.permanentSideBar(true)} {
    margin-left: var(--side-bar-width);
  }
  padding: 32px;
  & > * {
    margin-bottom: 32px;
  }
`;
export default function Page(props) {
  return <Root {...props}></Root>;
}
