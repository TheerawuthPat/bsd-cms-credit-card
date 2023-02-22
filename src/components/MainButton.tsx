import Button from "@mui/material/Button";

interface MainButtonProps {
  text: string;
  textColor: string;
  bgColor: string;
  isDisableClick?: boolean;
  marginRight?: string;
  onClick: () => void;
}

export default function MainButton({
  text,
  textColor,
  bgColor,
  isDisableClick = false,
  marginRight = "0",
  onClick,
}: MainButtonProps) {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: bgColor,
        width: "auto",
        color: textColor,
        marginRight: marginRight,
      }}
      disabled={isDisableClick ? true : false}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
