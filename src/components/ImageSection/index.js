import styled from "styled-components";

const flexDirection = {
  up: "column",
  bottom: "column-reverse",
  right: "row",
  left: "row-reverse",
};

const StyledDiv = styled.div`
  background-color: #ececec;
  display: flex;
  flex-direction: ${props => flexDirection[props.elementsOrder] };
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70vw;
`;

const HospitalImage = styled.img`
  width: 65%;
`;

const TextContainer = styled.div`
  width: 65%;
  
  h1 {
    text-align: center;
  };

  > * {
    color: #354387;
  }
`;

export default function ContentSection(props) {
  return ( 
    <StyledDiv size={props.size} elementsOrder={"up"}>
      <HospitalImage src="https://www.henryford.com/-/media/images/modules/news/2018/new-entrance-allegiance.jpg?h=521&la=en&w=907&hash=68C8C72B01B5761AE5C36470C134E5FA" />
      <TextContainer>
        <h1>Lorem Ipsum</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      </TextContainer>
    </StyledDiv>
    );
}