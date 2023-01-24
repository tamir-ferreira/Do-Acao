import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { iFormRegisterDonor } from "../../Components/RegisterFormDonor";
import { iFormRegisterReceiver } from "../../Components/RegisterFormReceiver";
import { SyntheticEvent } from "react";
import imgError from "../../assets/img/imgnotfound.jpg";
import {
  iUserProviderProps,
  iUserProviderValue,
  iUser,
  iFormLogin,
  iUserResponse,
  iEditAddress,
} from "./types";

export const UserContext = createContext({} as iUserProviderValue);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true);
  const [isDonor, setIsDonor] = useState(false);
  const [modalProfile, setModalProfile] = useState(false);
  const [reloadPage, setReloadPage] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("TOKEN");
      const userID = localStorage.getItem("USER");

      if (!token && !userID) {
        setLoadingUser(false);
        return;
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      try {
        const response = await api.get(`/users/${userID}`, config);
        setUser(response.data);
        setIsDonor(response.data.donor);
      } catch (error) {
        console.log(error);
        window.localStorage.clear();
      } finally {
        setLoadingUser(false);
      }
    }
    loadUser();
  }, [reloadPage]);

  const userLogin = async (data: iFormLogin): Promise<void> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("login", data);
      const isDonorResponse: any = response.data.user.donor;

      setUser(response.data.user);
      setIsDonor(isDonorResponse);

      window.localStorage.setItem("TOKEN", response.data.accessToken);
      window.localStorage.setItem("USER", response.data.user.id);

      toast.success("Login realizado com sucesso!");

      (await isDonor)
        ? navigate("/DashboardDonor")
        : navigate("/DashboardReceiver");
    } catch (error) {
      toast.error("Ops! Usuário ou Senha inválido!");
      window.localStorage.clear();
    } finally {
      setLoading(false);
    }
  };

  const userRegisterDonor = async (
    data: iFormRegisterDonor
  ): Promise<boolean> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("register", data);

      toast.success("Conta criada com sucesso!");
      return false;
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
      return true;
    } finally {
      setLoading(false);
    }
  };

  const userRegisterReceiver = async (
    data: iFormRegisterReceiver
  ): Promise<boolean> => {
    try {
      setLoading(true);

      const response = await api.post<iUserResponse>("register", data);

      toast.success("Conta criada com sucesso!");
      return false;
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      return true;
    } finally {
      setLoading(false);
    }
  };
  const editAddress = async (data: iEditAddress): Promise<boolean> => {
    try {
      setLoading(true);
      setReloadPage(!reloadPage);
      const userId = window.localStorage.getItem("USER");
      const token = localStorage.getItem("TOKEN");
      console.log(data);
      const newData: iEditAddress = {};
      Object.keys(data).forEach((item) => {
        if (data[item] !== "") {
          newData[item] = data[item] as string;
        }
      });

      console.log(newData);

      await api.patch(`/users/${userId}`, newData, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      toast.success("Dados alterados com sucesso!");
      setModalProfile(false);
      return false;
    } catch (error) {
      toast.error("Ops! Algo deu errado");
      return true;
    } finally {
      setLoading(false);
      setReloadPage(!reloadPage);
    }
  };

  const userLogout = () => {
    window.localStorage.clear();
    navigate("/");
  };

  const addDefaultImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    (event.target as HTMLImageElement).src = `${imgError}`;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        isDonor,
        setUser,
        loading,
        loadingUser,
        userLogin,
        userRegisterDonor,
        userRegisterReceiver,
        editAddress,
        userLogout,
        modalProfile,
        setModalProfile,
        addDefaultImg,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
