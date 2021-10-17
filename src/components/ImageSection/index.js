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
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
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
  flex-grow: 1;
  width: 400px;
  min-width: 300px;
`;

const Image = styled.img`
  object-fit: contain;
  width: 500px;
  height: 300px;
`;

const Title = styled.h1`
  text-align: center;
`;

export default function ContentSection({
  direction,
  imgSrc,
  title,
  children: text,
}) {
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
