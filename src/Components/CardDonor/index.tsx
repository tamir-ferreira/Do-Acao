import { useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledTypography } from "../BaseTypography/style";
import { ImageCategories } from "../ImageCategories";
import { StyledCard } from "./styles";
import { MdOutlineEdit } from "react-icons/md";

export interface IElement {
  userId: number;
  title: string;
  category: string;
  validation: string;
  descripition: string;
  amounts: number;
  id: number;
  address: {
    city: string;
    state: string;
  };
}

interface icard {
  element: IElement;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setEditDonor: React.Dispatch<React.SetStateAction<boolean>>;
  setIdModal: React.Dispatch<React.SetStateAction<number>>;
}
export const CardDonor = ({
  element,
  setModal,
  setEditDonor,
  setIdModal,
}: icard) => {
  const { title, category, id, address } = element;
  const { getDonationbyId } = useContext(DonationContext);
  const { isDonor } = useContext(UserContext);

  const openModal = async () => {
    setModal(true);
    const state = await getDonationbyId(id);
    setModal(state);
  };

  const editModal = () => {
    setIdModal(id);
    setEditDonor(true);
  };

  return (
    <StyledCard>
      <ImageCategories category={category} />
      <div>
        <StyledTypography classText="Heading4" tag="h3">
          {title.substring(0, 13)}
        </StyledTypography>
        <StyledTypography classText="Body" tag="p">
          {category}
        </StyledTypography>
        <StyledTypography classText="Body" tag="p">
          {address.city} | {address.state}
        </StyledTypography>
        <hr />
        <div id="btn">
          <button id="icon" onClick={openModal}>
            Detalhes
          </button>
          {isDonor && (
            <button id="icon" onClick={editModal}>
              <MdOutlineEdit />
            </button>
          )}
        </div>
      </div>
    </StyledCard>
  );
};
