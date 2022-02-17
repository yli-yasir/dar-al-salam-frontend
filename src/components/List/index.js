import styled from "styled-components";
import PropTypes from "prop-types";
import ListItem from "./ListItem";
import { sizeable } from "../../globalStyle";
import { motion } from "framer-motion";

const StyledList = styled(motion.ul)`
  &[role="menu"] {
    list-style-type: none;
  }
  padding: 8px;
  & > li {
    margin-bottom: ${({ $vGap }) => ($vGap ? `${$vGap * 4}px` : 0)};
  }
  ${sizeable}
`;

export default function List(props) {
  const variants = {
    hidden: { opacity: 0 },
    shown: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <StyledList
      {...props}
      variants={variants}
      initial="hidden"
      animate="shown"
    />
  );
}

StyledList.propTypes = {
  $vGap: PropTypes.number,
  children: PropTypes.arrayOf(ListItem),
};
