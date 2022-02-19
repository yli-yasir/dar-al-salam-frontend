import styled from "styled-components";
import { motion } from "framer-motion";
import { sizeable, elevatable } from "../../globalStyle";

const Root = styled.div`
  ${sizeable}
  position: relative;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding-top: 50px;
`;

const Splash = styled.div`
  position: absolute;
  clip-path: ellipse(50% 80% at bottom);
  background: skyblue;
  top: 20%;
  left: 0;
  right: 0;
  border-radius: 32px;
  height: 100%;
`;

const StyledCard = styled(motion.div)`
  ${elevatable}
  background-color: white;
  width: 50%;
  height: 300px;
  z-index: 1;
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  align-items: center;
  border-radius: 16px;
  max-width: 300px;
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

export default function Card({ cover, children, ...props }) {
  return (
    <Root {...props}>
      <Splash cover={cover || "skyblue"} />
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
