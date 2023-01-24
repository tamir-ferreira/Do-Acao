import { ProductInfosStyled } from "./styled";
import { StyledTypography } from "../BaseTypography/style";
import { DonationContext } from "../../contexts/DonationContext";
import { useContext } from "react";
import { ImageCategories } from "../ImageCategories";
import { CardDonation } from "../CardDonation";
import { iPropsState, iReciver } from "../../contexts/DonationContext/types";
import { CiFaceFrown } from "react-icons/ci";

export const ProductDonor = ({ setState }: iPropsState) => {
  const { donation, request } = useContext(DonationContext);

  console.log(request?.request.length);
  return (
    <ProductInfosStyled>
      <StyledTypography classText="Heading3" tag="h2">
        {donation.title}
      </StyledTypography>
      <ImageCategories category={donation.category} />
      <StyledTypography classText="Heading4" tag="h2">
        Solicitações para esta doação:
      </StyledTypography>
      <ul>
        {request?.request.length !== 0 ? (
          request?.request.map((req: iReciver, index: number) => (
            <CardDonation request={req} setState={setState} key={index} />
          ))
        ) : (
          <div>
            <CiFaceFrown size={35} />
            <StyledTypography classText="Caption" tag="p">
              Ninguém se candidatou por aqui...
            </StyledTypography>
          </div>
        )}
      </ul>
    </ProductInfosStyled>
  );
};
