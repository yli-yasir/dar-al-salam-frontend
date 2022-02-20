import logoSrc from "../../assets/logo.png";
import { breakpoints } from "../../globalStyle";
import styled from "styled-components";
import { sizeable } from "../../globalStyle";
import { motion } from "framer-motion";

const StyledLogo = styled(motion.img).attrs(() => ({
  alt: "logo",
  src: logoSrc,
}))`
  ${sizeable}
  max-width:200px;
  @media ${breakpoints.isMobile()} {
    max-width: 150px;
  }
  margin-bottom: 64px;
`;

export default function Logo({ animated, ...props }) {
  const motionProps = animated && {
    animate: { rotate: 360 },
    transition: { repeat: Infinity, duration: 2 },
  };

  return <StyledLogo {...props} {...motionProps} />;
}
