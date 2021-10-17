import styled from "styled-components";

const CenteringBlock = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width || "initial"};
  height: ${({ height }) => height || "initial"};
`;

export default CenteringBlock;
