import styled from "styled-components";
import { motion } from "framer-motion";

const Root = styled.div`
  position: relative;
  min-height: 200px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 16px;
`;

const Splash = styled.div`
  position: absolute;
  background: linear-gradient(
    var(--app-color-primary),
    ${(props) => props.backgroundColor}
  );
  clip-path: ellipse(40% 50% at bottom);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 32px;
`;

const StyledCard = styled(motion.div)`
  background-color: white;
  width: 50%;
  height: 300px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 16px;
`;

export default function Card(props) {
  return (
    <Root>
      <Splash backgroundColor={props.splashColor} />
      <StyledCard
        animate={{ rotate: -15, y: [300, 10] }}
        transition={{ type: "spring" }}
      >
        Hello world
      </StyledCard>
    </Root>
  );
}
