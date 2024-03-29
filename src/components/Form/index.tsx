import EstablishmentData from "./EstablishmentData";
import InspectionData from "./InspectionData";
import SupplyPumpsTechnicalInformation from "./SupplyPumpsTechnicalInformation ";
import TankTechnicalInformation from "./TankTechnicalInformation";

export default function Form() {
  return (
    <>
      <EstablishmentData />
      <TankTechnicalInformation />
      <SupplyPumpsTechnicalInformation />
      <InspectionData />
    </>
  );
}
