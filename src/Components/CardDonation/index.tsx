import { iReciver } from "../../contexts/DonationContext/types";
import { StyledTypography } from "../BaseTypography/style";
import { Button } from "../Button";
import { StyledCardDonation } from "./styles";
import imgError from "../../assets/img/imgnotfound.jpg";
import { SyntheticEvent, useContext } from "react";
import { DonationContext } from "../../contexts/DonationContext";
interface Irequest {
  request: iReciver;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CardDonation = ({ request, setState }: Irequest) => {
  console.log(request);
  const { sendDonation } = useContext(DonationContext);

  const addDefaultImg = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    (event.target as HTMLImageElement).src = `${imgError}`;
  };

  const sendDonationConfig = async () => {
    const state = await sendDonation();
    setState(state);
  };

  return (
    <StyledCardDonation>
      <div className="containerli">
        {request ? (
          <img
            src={request.profileImgUrl}
            alt="profilepic"
            onError={addDefaultImg}
          />
        ) : (
          <img src={imgError} alt="profilepic" />
        )}
        <StyledTypography classText="Caption" tag="p">
          {request.name?.substring(0, 10)}
        </StyledTypography>
        <StyledTypography classText="Caption" tag="p">
          {request.company?.substring(0, 10)}
        </StyledTypography>
        <Button
          size={"sm"}
          theme={"primary"}
          type={"button"}
          onclick={sendDonationConfig}
        >
          Doar
        </Button>
      </div>
    </StyledCardDonation>
  );
};
