import styled from "styled-components";
import PropTypes from "prop-types";
import MedicalLine from "../MedicalLine";
import { elevatable } from "../../globalStyle";
import Menu from "../Menu";
import { FiFacebook, FiInfo, FiMail, FiPhoneCall } from "react-icons/fi";
import MenuItem from "../Menu/MenuItem";
import { breakpoints } from "../../globalStyle";
const Root = styled.div`
  background-image: url(${(props) => props.profilePicture || ""});
  background-color: var(--app-color-primary);
  display: inline-block;
  padding: 8px;
  border: 4px solid var(--app-color-secondary);
  width: 100vw;
  box-sizing: border-box;
  @media ${breakpoints.up("sm")} {
    width: 300px;
  }
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
  phoneNumbers,
  email,
  facebook,
  moreInfo,
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
      <MedicalLine width="50%" />
      <Menu>
        {phoneNumbers.map((phoneNumber) => (
          <MenuItem key={phoneNumber} label={phoneNumber} icon={FiPhoneCall} />
        ))}
        <MenuItem label={email} icon={FiMail} to={email} />
        <MenuItem label="Facebook Account" icon={FiFacebook} to={facebook} />
        <MenuItem label="More Info" icon={FiInfo} to={moreInfo} />
      </Menu>
    </Root>
  );
}

DoctorCard.propTypes = {
  profilePicture: PropTypes.string,
  doctorName: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.any),
  $elevation: PropTypes.number,
};
