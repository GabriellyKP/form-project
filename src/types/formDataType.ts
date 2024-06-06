export interface IFormDataFields {
  establishment_company_name: string;
  establishment_trading_name: string;
  establishment_cnpj: string;
  establishment_cep: string;
  establishment_state: string;
  establishment_city: string;
  establishment_address: string;
  establishment_zoning: string;
  establishment_branch_of_activity: string;
  establishment_flag: string;
  establishment_phone: string;
  establishment_email: string;
  establishment_responsible_name: string;
  establishment_employees_quantity: number;
  establishment_coordinates: string;
  file: File;
  tanks: Array<ITanksForm>;
  tanks_quantity: number;
  supply_pumps_quantity: number;
  supply_pumps: Array<any>;
  inspection_center_in_operation: boolean;
  inspection_change_in_anp: boolean;
  inspection_changes_in_facade: boolean;
  inspection_collaborator_inspection: string;
  inspection_first_inspection: boolean;
  inspection_leak_records: string;
  inspection_monitorin_system_operation_extract: string;
  inspection_monitoring_system_status: string;
  inspection_raining: boolean;
  inspection_water_supply: string;
  inspection_monitoring_system_file: File;
  inspection_inventory_control_system: File;
  inspection_supply_pumps: Array<File>;
  inspection_supply_lane_quantity: number;
}

export interface ITanksForm {
  manufacturer_name: string;
  serial_number: number;
  stored_product: string;
  type: string;
  volume: number;
  wall_type: string;
  year_of_manufacture: number;
}
