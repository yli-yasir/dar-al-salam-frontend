import styled from "styled-components";

const Root = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 500px;
`;
export default function Page(props) {
  return <Root {...props}></Root>;
}
