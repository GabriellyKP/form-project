import { useState } from "react";
import { Button, Grid } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import NumericInput from "../../common/NumericInput";
import { useFieldArray, useFormContext, useWatch } from "react-hook-form";
import Fields from "./Fields";
import { pxToRem } from "../../../styles/muiTheme";

export default function TankTechnicalInformation() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "tanks",
  });

  const fieldsName = {
    year_of_manufacture: "",
    serial_number: "",
    type: "",
    volume: "",
    stored_product: "",
    manufacturer_name: "",
    wall_type: "",
  };

  const addTankInputs = () => {
    append(fieldsName);
  };

  const tanksQuantity = useWatch({ control, name: "tank_quantity" });

  const handleAddTanksQuantity = async () => {
    remove();
    for (let i = 0; i < tanksQuantity; i++) {
      addTankInputs();
    }
  };

  return (
    <CardContainer
      title="Informações técnicas dos tanques"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex" gap={pxToRem(16)}>
            <NumericInput
              inputId="tank_quantity"
              label="Quantidade de tanques (1-30)"
              isAllowed={(values) => {
                const { formattedValue, floatValue } = values;
                if (floatValue == null) {
                  return formattedValue === "";
                } else {
                  return floatValue <= 30 && floatValue >= 1;
                }
              }}
            />
            <Button
              variant="contained"
              onClick={handleAddTanksQuantity}
              disabled={!tanksQuantity}
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
