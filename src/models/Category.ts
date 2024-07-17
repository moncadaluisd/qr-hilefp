import { Tenant } from "./Tenant";

export interface Category {
  id: number;
  name: string;
  description: string;
  tenant: Tenant;
  tenant_id: number;
}
