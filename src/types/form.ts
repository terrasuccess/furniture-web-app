
export type FormStep = 
  | 'welcome'
  | 'basicInfo' 
  | 'customerInfo'
  | 'itemDescription'
  | 'signature'
  | 'summary'
  | 'confirmation';

export interface FurnitureFormData {
  // Basic info
  attachmentNumber?: string;
  pickupDate?: string;

  // Customer info
  name?: string;
  address?: string;
  postalCode?: string;
  city?: string;
  phone?: string;
  email?: string;

  // Item details
  items: {
    quantity: number;
    model: string;
    designer: string;
    manufacturer: string;
    condition: string;
    materials: string;
    price: number;
  }[];

  // Signature
  signature?: string;
}
