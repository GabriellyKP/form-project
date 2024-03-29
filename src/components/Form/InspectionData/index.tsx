import { useState } from "react";
import { Grid } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Input from "../../common/Input";

export default function InspectionData() {
  const [isShow, setIsShow] = useState<boolean>(true);

  return (
    <CardContainer
      title="Dados do estabelecimento"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="file"
              label="Teste"
              type="file"
              variant="standard"
            />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
