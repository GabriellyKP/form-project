import { useState } from "react";
import { Grid, InputAdornment, Typography } from "@mui/material";

import CardContainer from "../../common/CardContainer";
import Autocomplete from "../../common/Autocomplete";
import FileUploadInput from "../../common/FileUploadInput";
import Input from "../../common/Input";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

export default function WasteStorageAndManagement() {
  const [isShow, setIsShow] = useState<boolean>(true);

  const sanitarySewageOptions = [
    "Rede pública",
    "Fossa séptica",
    "Filtro biológico",
    "Sumidouro",
  ];
  const statusOptions = ["Ruim", "Regular", "Bom", "Ótimo"];

  return (
    <CardContainer
      title="Armazenamento e gerenciamento de resíduos classe I e II"
      isShow={isShow}
      setIsShow={setIsShow}
    >
      {isShow && (
        <>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Localização da área</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_area_location_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_area_location_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_area_location_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Pavimentação</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_paving_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_paving_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_paving_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Cobertura</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_coverage_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_coverage_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_coverage_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Sistema de drenagem ou contenção
            </Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_drainage_containment_system_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_drainage_containment_system_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_drainage_containment_system_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Estado de conservação do ambiente
            </Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_environmental_conservation_status_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_environmental_conservation_status_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_environmental_conservation_status_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Qualidade de segregação dos resíduos
            </Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_quality_of_waste_segregation_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_quality_of_waste_segregation_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_quality_of_waste_segregation_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">
              Forma de armazenamento borra oleosa - csao
            </Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_store_oily_sludge_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_store_oily_sludge_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_store_oily_sludge_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Armazenamento de filtros</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_filter_storage_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_store_oily_sludge_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_store_oily_sludge_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Armazenamento de estopas</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_burlap_storage_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_burlap_storage_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_burlap_storage_file" />
          </Grid>
          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Armazenamento de embalagens</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_packaging_storage_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_packaging_storage_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_packaging_storage_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Resíduos classe II</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_class_II_waste_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_class_II_waste_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_class_II_waste_file" />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Typography variant="body1">Esgoto sanitário</Typography>
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Input
              inputId="wasteStorageAndManagement_sanitary_sewage_observation"
              label="Observação"
              placeholder="Digite uma observação"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StickyNote2OutlinedIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item lg={12} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_sanitary_sewage_type"
              label="Tipo"
              options={sanitarySewageOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <Autocomplete
              inputId="wasteStorageAndManagement_sanitary_sewage_status"
              label="Situação"
              options={statusOptions}
            />
          </Grid>

          <Grid item lg={6} sm={12} xs={12} display="flex">
            <FileUploadInput inputId="wasteStorageAndManagement_sanitary_sewage_file" />
          </Grid>
        </>
      )}
    </CardContainer>
  );
}
