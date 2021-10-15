import styled from "styled-components";
import PropTypes from "prop-types";
import MedicalLine from "../MedicalLine";
import { elevatable } from "../../globalStyle";
import Menu from "../Menu";

const Root = styled.div`
  background-image: url(${(props) => props.profilePicture || ""});
  display: inline-block;
  padding: 8px;
  border: 4px solid var(--app-color-secondary);
  width: 250px;
  ${elevatable};
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 8px;
`;

const ProfilePicture = styled.img`
  display: block;
  border-radius: 50%;
`;
export default function DoctorCard({
  profilePicture,
  doctorName,
  menuItems,
  ...rootProps
}) {
  return (
    <Root {...rootProps}>
      <Header>
        <ProfilePicture
          alt="avatar"
          height="100px"
          width="100px"
          src={profilePicture}
        />
        <h3>{doctorName}</h3>
      </Header>
      <MedicalLine width="100%" />
      <Menu menuItems={menuItems} />
    </Root>
  );
}

DoctorCard.propTypes = {
  profilePicture: PropTypes.string,
  doctorName: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.any),
  $elevation: PropTypes.number,
};
