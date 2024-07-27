import { Fragment, useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import FileUploadInput from "../../common/FileUploadInput";
import Checkbox from "../../common/Checkbox";
import { useFormContext } from "react-hook-form";
import Autocomplete from "../../common/Autocomplete";

interface FieldsProps {
  index: number;
}

export default function Fields({ index }: FieldsProps) {
  const { watch } = useFormContext();
  const [isShow, setIsShow] = useState<boolean>(true);

  const hasTankPlate = watch(`tankages.${index}.has_tank_plate`);

  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

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
          <Typography variant="body1">{`Área Tanque ${index + 1}`}</Typography>
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
        <Fragment>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Checkbox
              inputId={`tankages.${index}.has_tank_plate`}
              label="Possui plaqueta do tanque"
            />
          </Grid>
          {hasTankPlate && (
            <Grid item lg={6} sm={12} xs={12} display="flex">
              <FileUploadInput inputId={`tankages.${index}.tank_plate_file`} />
            </Grid>
          )}
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Área de descarga:</Typography>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId={`tankages.${index}.unloading_area_status`}
              label="Situação"
              options={statusOptions}
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput
              inputId={`tankages.${index}.unloading_area_file`}
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Spill de monitoramento do tanque:
            </Typography>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId={`tankages.${index}.spill_status`}
              label="Situação"
              options={statusOptions}
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <FileUploadInput inputId={`tankages.${index}.spill_file`} />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Sump do tanque:</Typography>
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId={`tankages.${index}.tank_sump_status`}
              label="Situação"
              options={statusOptions}
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <FileUploadInput inputId={`tankages.${index}.tank_sump_file`} />
          </Grid>
        </Fragment>
      )}
    </Fragment>
  );
}
