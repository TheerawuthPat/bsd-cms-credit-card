import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import MainButton from "../../components/MainButton";
import { ReactSpreadsheetImport } from "react-spreadsheet-import";

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

    // Determines if modal is visible.
    var isOpen: Boolean
    // Called when flow is closed without reaching submit.
    var onClose: () => void
    // Called after user completes the flow. Provides data array, where data keys matches your field keys.
    var onSubmit: () => void
    const fields = [
      {
        // Visible in table header and when matching columns.
        label: "Name",
        // This is the key used for this field when we call onSubmit.
        key: "name",
        // Allows for better automatic column matching. Optional.
        alternateMatches: ["first name", "first"],
        // Used when editing and validating information.
        fieldType: {
          // There are 3 types - "input" / "checkbox" / "select".
          type: "input",
        },
        // Used in the first step to provide an example of what data is expected in this field. Optional.
        example: "Stephanie",
        // Can have multiple validations that are visible in Validation Step table.
        validations: [
          {
            // Can be "required" / "unique" / "regex"
            rule: "required",
            errorMessage: "Name is required",
            // There can be "info" / "warning" / "error" levels. Optional. Default "error".
            level: "error",
          },
        ],
      },
    ] as const

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
            <ReactSpreadsheetImport isOpen={isOpen} onClose={onClose} onSubmit={onSubmit} fields={fields} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
