import { useParams } from "react-router-dom";

export default function Clinic() {
  const { clinicName } = useParams();
  return <div>{clinicName}</div>;
}
