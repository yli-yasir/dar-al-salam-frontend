import { useParams } from "react-router-dom";
import Card from "../../components/Card";
import clinicInfo from "./clinicInfo";

export default function Clinic() {
  const { clinicName } = useParams();

  const targetClinic = clinicInfo[clinicName];

  return (
    <>
      <p>hello</p>
      <Card $width="100%">Hello world {targetClinic.phoneNumber}</Card>
    </>
  );
}
