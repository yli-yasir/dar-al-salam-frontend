import styled from "styled-components";
import { motion } from "framer-motion";
import { sizeable, elevatable } from "../../globalStyle";

const Root = styled.div`
  ${sizeable}
  position: relative;
  min-height: 200px;
  max-width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 50px;
`;

const Splash = styled.div`
  position: absolute;
  background: linear-gradient(
    45deg,
    ${(props) => props.backgroundColor} 80%,
    var(--app-color-secondary),
    var(--app-color-primary)
  );
  clip-path: ellipse(40% 60% at 50% 90%);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 32px;
`;

const StyledCard = styled(motion.div)`
  ${elevatable}
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

const variants = {
  hidden: {
    y: 300,
  },
  shown: {
    y: 10,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 3,
    },
  },
};

export default function Card({ splashColor, children, $width }) {
  return (
    <Root $width={$width}>
      <Splash backgroundColor={splashColor || "pink"} />
      <StyledCard
        variants={variants}
        initial="hidden"
        animate="shown"
        $elevation={3}
      >
        {children}
      </StyledCard>
    </Root>
  );
}
