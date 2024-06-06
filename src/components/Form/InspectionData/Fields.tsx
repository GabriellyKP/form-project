import { Fragment, useState } from "react";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import FileUploadInput from "../../common/FileUploadInput";

interface FieldsProps {
  index: number;
}

export default function Fields({ index }: FieldsProps) {
  const [isShow, setIsShow] = useState<boolean>(true);

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
          <Typography variant="body1">{`Pista de abastecimento ${
            index + 1
          }`}</Typography>
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
        <Grid item lg={12} sm={12} xs={12} display="flex">
          <FileUploadInput
            inputId={`inspection_supply_pumps.${index}.inspection_supply_lane_file`}
          />
        </Grid>
      )}
    </Fragment>
  );
}
