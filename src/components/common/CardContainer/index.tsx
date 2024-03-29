import { Dispatch, ReactNode, useEffect } from "react";
import { Box, Button, Card, Divider, Grid, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

import { pxToRem } from "../../../styles/muiTheme";
import { useFormContext } from "react-hook-form";

interface CardContainerProps {
  title: string;
  isShow?: boolean;
  setIsShow?: Dispatch<(prevState: boolean) => boolean>;
  cardField?: string[];
  children: ReactNode;
}

export default function CardContainer({
  title,
  isShow = true,
  setIsShow,
  cardField,
  children,
}: CardContainerProps) {
  const {
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (
      cardField &&
      cardField?.find((e) => Object.keys(errors)?.includes(e)) &&
      isShow
    ) {
      if (setIsShow) {
        setIsShow(() => false);
      }
    }
  }, [errors]);

  return (
    <Card sx={{ p: pxToRem(16) }}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        pb={!isShow ? pxToRem(16) : 0}
      >
        <Typography variant="h5">{title}</Typography>

        {typeof setIsShow === "function" && (
          <Button
            color="secondary"
            startIcon={!isShow ? <Add /> : <Remove />}
            onClick={() => {
              setIsShow((value) => !value);
            }}
          >
            {!isShow ? `Mostrar` : `Ocultar`}
          </Button>
        )}
      </Box>

      {isShow && <Divider sx={{ my: pxToRem(16) }} />}

      <Grid
        container
        alignItems="center"
        columnSpacing={pxToRem(24)}
        rowSpacing={pxToRem(16)}
      >
        {children}
      </Grid>
    </Card>
  );
}
