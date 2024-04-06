import { useState } from "react";
import { Grid } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Input from "../../common/Input";
import Autocomplete from "../../common/Autocomplete";
import NumericInput from "../../common/NumericInput";

export default function Washing() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const zoningOptions = ["Urbano", "Industrial", "Diversificado", "Rural"];

  return (
    <CardContainer title="Lavação" isShow={isShow} setIsShow={setIsShow}>
      {isShow && (
        <>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_company_name"
              label="Razão social"
              placeholder="Digite a razão social"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_trading_name"
              label="Nome fantasia"
              placeholder="Digite o nome fantasia"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_cnpj"
              label="CNPJ"
              placeholder="Digite o CNPJ"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_cep"
              label="CEP"
              placeholder="Digite o CEP"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_state"
              label="Estado"
              placeholder="Digite o estado"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_city"
              label="Cidade"
              placeholder="Digite a cidade"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_address"
              label="Endereço"
              placeholder="Digite o endereço"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="establishment_zoning"
              label="Zoneamento"
              options={zoningOptions}
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_branch_of_activity"
              label="Ramo de atividade"
              placeholder="Digite o ramo de atividade"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_flag"
              label="Bandeira"
              placeholder="Digite a bandeira"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_phone"
              label="Telefone"
              placeholder="Digite o telefone"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_email"
              label="E-mail"
              placeholder="Digite o e-mail"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_responsible_name"
              label="Nome do responsável"
              placeholder="Digite o nome do responsável"
            />
          </Grid>
          <Grid item lg={6} sm={12} xs={12} display="flex">
            <NumericInput
              inputId="establishment_employees_quantity"
              label="Quantidade de funcionários"
              placeholder="Digite a quantidade de funcionários"
            />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="establishment_coordinates"
              label="Coordenadas (UTC)"
              placeholder="Digite as coordenadas"
            />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
