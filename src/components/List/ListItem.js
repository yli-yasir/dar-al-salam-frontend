import styled from "styled-components";
import { motion } from "framer-motion";

const StyledListItem = styled(motion.li)``;

const variants = {
  hidden: { x: -100, opacity: 0 },
  shown: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
};
export default function ListItem(props) {
  return <StyledListItem {...props} variants={variants} />;
}
