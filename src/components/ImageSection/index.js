import styled from "styled-components";
import { breakpoints } from "../../globalStyle";

const flexDirection = {
  up: "column",
  bottom: "column-reverse",
  right: "row",
  left: "row-reverse",
};

const Root = styled.div`
  display: flex;
  flex-direction: ${(props) => flexDirection[props.direction]};
  @media ${breakpoints.down("sm")} {
    flex-direction: ${(props) =>
      // Force column on smaller screen sizes.
      props.direction === "right" ? "column-reverse" : "column"};
  }
`;

const TextContainer = styled.div`
  flex-direction: column;
  text-align: justify;
  width: 100%;
  color: #354387;
  @media ${breakpoints.up("sm")} {
    width: 50%;
  }
`;

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  @media ${breakpoints.up("sm")} {
    width: 50%;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

export default function ContentSection({ direction, imgSrc, title, text }) {
  return (
    <Root direction={direction}>
      <Image src={imgSrc} />
      <TextContainer>
        <Title>{title}</Title>
        <p>{text}</p>
      </TextContainer>
    </Root>
  );
}
