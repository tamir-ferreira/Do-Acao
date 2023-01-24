import { UserContext } from "../../../contexts/UserContext";
import { ModalProfileStyled } from "./modalProfile";
import { useContext } from "react";
import { Input } from "../../Forms/Input";
import { Button } from "../../Button";
import { useForm } from "react-hook-form";
import imgError from "../../../assets/img/imgnotfound.jpg";

interface IdataProductUpdate {
  name: string;
  street: string;
  city: string;
  state: string;
  profileImgUrl: string;
}

type FormNewAndress = {
  name: string;
  street: string;
  city: string;
  state: string;
  profileImgUrl: string;
};

export const ModalProfile = () => {
  const {
    user,
    setModalProfile,
    addDefaultImg,
    editAddress: editAddress,
  } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormNewAndress>();
  console.log(user);

  return (
    <ModalProfileStyled>
      {user ? (
        <img
          src={user.profileImgUrl}
          alt="profilepic"
          onError={addDefaultImg}
        />
      ) : (
        <img src={imgError} alt="profilepic" />
      )}
      <div id="text">
        <span id="nome">{user?.name}</span>
        {/* <span>Tel.: {user?.telephone}</span> */}
        <span>Email: {user?.email}</span>
      </div>

      <form onSubmit={handleSubmit(editAddress)}>
        <Input
          label={"Nome"}
          id={"Nome"}
          type={"text"}
          register={register("name")}
          placeholder={"Digite seu novo endereço"}
        />
        <Input
          label={"Sua imagem"}
          id={"avatar"}
          type={"text"}
          register={register("profileImgUrl")}
          placeholder={"Cole aqui o link do seu avatar"}
        />
        <Input
          label={"Endereço"}
          id={"place"}
          type={"text"}
          register={register("street")}
          placeholder={"Digite seu endereço aqui"}
        />
        <Input
          label={"Cidade"}
          id={"Cidade"}
          type={"text"}
          register={register("city")}
          placeholder={"Digite sua cidade"}
        />
        <Input
          label={"Estado"}
          id={"country"}
          type={"text"}
          register={register("state")}
          placeholder={"Digite seu estado aqui"}
        />
        <Button size="lg" theme="primary" type="submit">
          Editar perfil
        </Button>
      </form>
      {/* <Button
          size="lg"
          theme="white"
          type="button"
          onclick={() => {setModalProfile(false)}}
        >
          Cancelar
        </Button> */}
    </ModalProfileStyled>
  );
};
function setOpenModal(arg0: boolean): void {
  throw new Error("Function not implemented.");
}
