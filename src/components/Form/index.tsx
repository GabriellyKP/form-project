import EstablishmentData from "./EstablishmentData";
import InspectionData from "./InspectionData";
import OilChange from "./OilChange";
import SupplyPumpsTechnicalInformation from "./SupplyPumpsTechnicalInformation ";
import SupplyUnits from "./SupplyUnits";
import TankTechnicalInformation from "./TankTechnicalInformation";
import Tankage from "./Tankage";
import Washing from "./Washing";
import WasteStorageAndManagement from "./WasteStorageAndManagement";
import WaterAndOilSeparatorBox from "./WaterAndOilSeparatorBox";

export default function Form() {
  return (
    <>
      <EstablishmentData />
      <TankTechnicalInformation />
      <SupplyPumpsTechnicalInformation />
      <InspectionData />
      <Tankage />
      <SupplyUnits />
      <OilChange />
      <Washing />
      <WaterAndOilSeparatorBox />
      <WasteStorageAndManagement />
    </>
  );
}
