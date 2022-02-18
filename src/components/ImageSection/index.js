import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { elevatable } from "../../globalStyle";

const Root = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row" : "row-reverse")};
  flex-wrap: wrap;
  margin-top: 64px;
  justify-content: center;
  align-items: center;
  width: 100%;
  row-gap: 32px;
`;

const TextContainer = styled.div`
  flex: 1 1 0;
  flex-direction: column;
  text-align: center;
  min-width: 400px;
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.div`
  flex: 1 1 0;
  min-width: 400px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const contentWidth = css`
  width: 90%;
  max-width: 700px;
`;

const Image = styled(motion.img)`
  border-radius: 32px;
  ${contentWidth}
`;

const TextSurface = styled(motion.div)`
  ${contentWidth}
  ${elevatable}
  background-color:white;
  border-radius: 16px;
`;

export default function ContentSection({ reverse, imgSrc, title, children }) {
  return (
    <Root reverse={reverse}>
      <ImageContainer>
        <Image
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={imgSrc}
        />
      </ImageContainer>
      <TextContainer>
        <TextSurface
          $elevation={4}
          initial={{ scale: 0.1 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", bounce: "0.4" }}
        >
          <Title>{title}</Title>
          <p>{children}</p>
        </TextSurface>
      </TextContainer>
    </Root>
  );
}
