import eye from "../../assets/eye.svg";
import styled from "styled-components";
import { sizeable } from "../../globalStyle";
import { motion } from "framer-motion/dist/framer-motion";

const StyledLogo = styled(motion.img).attrs(() => ({
  alt: "logo",
  src: eye,
}))`
  ${sizeable}
`;

export default function Logo({ animated, ...props }) {
  const motionProps = animated
    ? {
        animate: { rotate: 360 },
        transition: { repeat: Infinity, duration: 2 },
      }
    : {};
  return <StyledLogo {...props} {...motionProps} />;
}
