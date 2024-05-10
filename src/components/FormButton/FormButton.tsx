import { FormButtonProps } from "@/types/types";

export const FormButton = ({ isDisabled, dispatchClick }: FormButtonProps) => {

  const handleButtonClick = () => {
    dispatchClick(true);
  }
  return (
    <button
      type="submit"
      disabled={isDisabled}
      className={`w-full h-[14.359vw] xs:h-[56px] ${
        isDisabled
          ? "bg-[#b7b8b7] hover:bg-[#b7b8b7]"
          : "bg-[#62c991] hover:bg-[#39bf76]"
      } rounded-[2.051vw] xs:rounded-[8px] text-[4.102vw] xs:text-[16px] text-[#ffffff]`}
      onClick={handleButtonClick}
    >
      Next
    </button>
  );
};
