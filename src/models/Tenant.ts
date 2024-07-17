export interface Tenant {
  id: number;
  name: string;
  email: string;
  phone: string;
  domain: string;
  description: string;
  logo: string;
  status: string;
  tenant_type_id: number;
  status_note: string;
  created_at: string;
  updated_at: string;
  tenant_ype: TenantType;
}

export interface TenantType {
  id: number;
  name: string;
  description: string;
  icon: string;
  imagen: string;
  created_at: string;
  updated_at: string;
}

export interface TenantSurcusal {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  latitude: string;
  longitude: string;
  tenant_id: number;
  created_at: string;
  updated_at: string;
  tenant: Tenant;
}

