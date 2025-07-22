export interface ClientDetails {
  name: string;
  contactNumber: string;
  email: string;
  address: string;
}

export interface GoldDetails {
  goldPurity: string;
  goldColor: string;
  jewelrySize: string;
  weight: string;
  ratePerGram: string;
  totalGoldCost: string;
  labourCost: string;
  totalLabourPrice: string;
}

export interface DiamondDetails {
  type: string;
  shape: string;
  size: string;
  color: string;
  clarity: string;
  ratePerCts: string;
  discount: string;
  totalAmount: string;
}

export interface QuotationSummary {
  goldCost: string;
  labourCost: string;
  diamondCost: string;
  gst: string;
  total: string;
  finalTotal : string;
}

export interface QuotationForm {
  clientDetails: ClientDetails;
  goldDetails: GoldDetails;
  diamondDetails: DiamondDetails[];
  quotationSummary: QuotationSummary;
}
