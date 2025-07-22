export interface UserType {
  id: string;
  name: string;
  email: string;
  mobile: string;
  // Add other fields as needed
}

export interface UserContextType {
  user: UserType | null;
  login: (userData: UserType) => Promise<void>;
  logout: () => Promise<void>;
  loader: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
  goldRateData: any;
  setGoldRateData: (val: any) => void;
  dropdown: any;
  setDropdown: (val: any) => void;
}