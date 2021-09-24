import styled from "styled-components";
import { breakpoints } from "../../globalStyle";

const flexDirection = {
  up: "column",
  bottom: "column-reverse",
  right: "row",
  left: "row-reverse",
};

const Root = styled.div`
  border-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${(props) => flexDirection[props.direction]};
  @media ${breakpoints.down("md")} {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 100%;
  @media ${breakpoints.up("md")} {
    width: 50%;
  }
`;

const TextContainer = styled.div`
  text-align: justify;
  width: 100%;
  color: #354387;
  @media ${breakpoints.up("md")} {
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
        <Title>{title}</Title>s <p>{text}</p>
      </TextContainer>
    </Root>
  );
}
