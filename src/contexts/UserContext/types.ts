import React from "react";
import { SyntheticEvent } from "react";
import { iFormRegisterDonor } from "../../Components/RegisterFormDonor";
import { iFormRegisterReceiver } from "../../Components/RegisterFormReceiver";

export interface iFormLogin {
  email: string;
  password: string;
}

export interface iEditAddress {
  [name: string]: string | undefined;
  profileImgUrl?: string;
  street?: string;
  city?: string;
  state?: string;
}

export interface iUserProviderProps {
  children: React.ReactNode;
}

export interface iUser {
  id: string;
  name?: string;
  email?: string;
  profileImgUrl?: string;
  telephone?: string;
  donor?: boolean;
}

export interface iUserResponse {
  accessToken: string;

  user: iUser;
}
export interface iUserProviderValue {
  user: iUser | null;
  isDonor: boolean;
  setUser: (user: iUser | null) => void;
  loading: boolean;
  loadingUser: boolean;
  userLogin: (data: iFormLogin) => Promise<void>;
  userRegisterDonor: (data: iFormRegisterDonor) => Promise<boolean>;
  userRegisterReceiver: (data: iFormRegisterReceiver) => Promise<boolean>;
  editAddress: (data: iEditAddress) => Promise<boolean>;
  userLogout: () => void;
  modalProfile: boolean;
  setModalProfile: (modalProfile: boolean) => void;
  addDefaultImg: (event: SyntheticEvent<HTMLImageElement, Event>) => void;
}
