import styled from "styled-components";
import { breakpoints } from "../../globalStyle";

const flexDirection = {
  up: "column",
  bottom: "column-reverse",
  right: "row",
  left: "row-reverse",
};

const cssStyledDiv = {
  up: "padding: 50px;",
  bottom: "padding: 50px;",
  right: "padding-top: 40px; padding-bottom: 40px;",
  left: "padding-top: 40px; padding-bottom: 40px;"
};

const cssTextConteiner = {
  up: "text-align: justify;",
  bottom: "text-align: justify; margin-bottom: 26px;",
  right: "width: 300px; margin-left: 50px;",
  left: "width: 300px; margin-right: 50px;"
};

const cssHospitalTitle = {
  up: "text-align: center; ",
  bottom: "text-align: center; margin-top: 0px;",
  right: "text-align: unset; ",
  left: "text-align: unset; "
}

// styled components

const Container = styled.div`
  background-color: #ececec;
  display: flex;
  flex-direction: ${props => flexDirection[props.direction] };
  justify-content: center;
  align-items: center;
  width: 70vw;
  ${props => cssStyledDiv[props.direction] };
`;

const Image = styled.img`
  width: 100%;

  @media ${breakpoints.up("lg")} {
    width: 500px;
    height: 300px;
  }
`;

const TextContainer = styled.div`
  /* ${props => cssTextConteiner[props.direction] }; */
  text-align: justify;
  width: 100%;
  color: #354387;

  @media ${breakpoints.up("lg")} {
    width: 50%;
  }
`;

const Title = styled.h1`
  /* ${props => cssHospitalTitle[props.direction] }; */
  text-align: center;
`;

export default function ContentSection(props) {
  return (
    <Container direction={"right"}>
      <Image direction={"right"} src="https://www.henryford.com/-/media/images/modules/news/2018/new-entrance-allegiance.jpg?h=521&la=en&w=907&hash=68C8C72B01B5761AE5C36470C134E5FA" />
      <TextContainer direction={"right"}>
        <Title direction={"right"}>Lorem Ipsum</Title>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </TextContainer>
    </Container>
    );
}