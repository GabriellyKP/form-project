import { useState } from "react";
import { Grid } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Input from "../../common/Input";
import Autocomplete from "../../common/Autocomplete";
import NumericInput from "../../common/NumericInput";

export default function EstablishmentData() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const zoningOptions = ["Urbano", "Industrial", "Diversificado", "Rural"];

  return (
    <CardContainer
      title="Dados do estabelecimento"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="company_name" label="Razão social" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="trading_name" label="Nome fantasia" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="cnpj" label="CNPJ" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="cep" label="CEP" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="state" label="Estado" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="city" label="Cidade" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input inputId="address" label="Endereço" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="zoning"
              label="Zoneamento"
              options={zoningOptions}
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="branch_of_activity" label="Ramo de atividade" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="flag" label="Bandeira" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="phone" label="Telefone" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="email" label="E-mail" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input inputId="responsible_name" label="Nome do responsável" />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <NumericInput
              inputId="employees_quantity"
              label="Quantidade de funcionários"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input inputId="coordinates" label="Coordenadas (UTC)" />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
