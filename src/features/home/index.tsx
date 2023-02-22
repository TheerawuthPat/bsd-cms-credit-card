import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import MainButton from "../../components/MainButton";

export const Home = () => {
  const navigate = useNavigate();
  const createProjectPage = useCallback(
    () => navigate("/create-project", { replace: true }),
    [navigate]
  );
  const blankPage = useCallback(
    () => navigate("", { replace: true }),
    [navigate]
  );

  return (
    <>
      <Box padding={3}>
        <Box sx={{ display: { xs: "block", md: "flex" } }}>
          <Box sx={{ flexGrow: 1 }}>
            <h3 style={{ color: "#FF9800" }}>PROJECT LIST DASHBOARD</h3>
          </Box>
          <Box sx={{ mx: 1, display: { xs: "inline-flex", md: "flex" } }}>
            <MainButton
              onClick={createProjectPage}
              text={"NEW PROJECT"}
              textColor={"#FFFFFF"}
              bgColor={"#FF9800"}
              isDisableClick={false}
            ></MainButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};
