import { AWS_DVA } from "@/lib/constants";
import CantrillAws from "./CantrillAws";

function AwsDva() {
  return <CantrillAws {...AWS_DVA} />;
}

export default AwsDva