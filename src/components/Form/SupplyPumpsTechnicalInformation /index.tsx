import { useState } from "react";
import { Button, Grid } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import NumericInput from "../../common/NumericInput";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import Fields from "./Fields";
import { pxToRem } from "../../../styles/muiTheme";

export default function SupplyPumpsTechnicalInformation() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "supply_pumps",
  });

  const fieldsName = {
    year_of_manufacture: "",
    serial_number: "",
    type: "",
    manufacturer_name: "",
  };

  const addSupplyPumpsInputs = () => {
    append(fieldsName);
  };

  const supplyPumpsQuantity = useWatch({
    control,
    name: "supply_pumps_quantity",
  });

  const handleAddSupplyPumpsQuantity = async () => {
    remove();
    for (let i = 0; i < supplyPumpsQuantity; i++) {
      addSupplyPumpsInputs();
    }
  };

  return (
    <CardContainer
      title="Informações técnicas das bombas de abastecimento"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex" gap={pxToRem(16)}>
            <NumericInput
              inputId="supply_pumps_quantity"
              label="Quantidade de bombas (1-60)"
              isAllowed={(values) => {
                const { formattedValue, floatValue } = values;
                if (floatValue == null) {
                  return formattedValue === "";
                } else {
                  return floatValue <= 60 && floatValue >= 1;
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddSupplyPumpsQuantity}
              disabled={!supplyPumpsQuantity}
            >
              Adicionar
            </Button>
          </Grid>

          {fields.map((item, index) => (
            <Fields key={item.id} index={index} />
          ))}
        </>
      )}
    </CardContainer>
  );
}
