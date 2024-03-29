import { Fragment, useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Input from "../../common/Input";
import NumericInput from "../../common/NumericInput";
import Autocomplete from "../../common/Autocomplete";
import { Add, Remove } from "@mui/icons-material";

interface FieldsProps {
  index: number;
}

export default function Fields({ index }: FieldsProps) {
  const [isShow, setIsShow] = useState<boolean>(true);

  const supplyPumpTypeOptions = [
    "Simples",
    "Dupla",
    "Tripla",
    "Quadrupla",
    "Quintupla",
    "Sextupla",
    "Octupla",
    "Outro",
  ];

  return (
    <Fragment>
      <Grid
        item
        lg={12}
        sm={12}
        xs={12}
        display="flex"
        justifyContent="center"
        position="relative"
      >
        <Box display="flex" alignItems="center">
          <Typography variant="body1">{`Bomba ${index + 1}`}</Typography>
        </Box>
        {typeof setIsShow === "function" && (
          <Button
            color="secondary"
            startIcon={!isShow ? <Add /> : <Remove />}
            onClick={() => {
              setIsShow((value) => !value);
            }}
            sx={{
              position: "absolute",
              right: 0,
            }}
          >
            {!isShow ? `Mostrar` : `Ocultar`}
          </Button>
        )}
      </Grid>

      <Grid item lg={12} sm={12} xs={12} display="flex">
        <Divider sx={{ width: "100%" }} />
      </Grid>

      {isShow && (
        <>
          <Grid item lg={6} sm={6} xs={12} display="flex">
            <Input
              inputId={`${index}.manufacturer_name`}
              label="Nome do fabricante"
              placeholder="Digite o nome do fabricante"
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12} display="flex">
            <NumericInput
              inputId={`${index}.year_of_manufacture`}
              label="Ano de fabricação"
              placeholder="Ex.: 2024"
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12} display="flex">
            <NumericInput
              inputId={`${index}.serial_number`}
              label="Número de série"
              placeholder="Ex.: 0000000"
            />
          </Grid>
          <Grid item lg={6} sm={6} xs={12} display="flex">
            <Autocomplete
              inputId={`${index}.type`}
              label="Tipo da bomba"
              options={supplyPumpTypeOptions}
            />
          </Grid>
        </>
      )}
    </Fragment>
  );
}
