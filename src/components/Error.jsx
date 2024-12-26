import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton } from "@mui/material";

function Errortag({ error_msg, setErrorMsg }) {
  const clearError = (key1) => {
    var errlist = error_msg;

    errlist = errlist.filter((e) => {
      return e.key != key1;
    });

    setErrorMsg(errlist);
  };

  return (
    error_msg && // Render only if error_msg exists
    error_msg.map((e1) => (
      <Box
        key={e1.key}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "red",
          fontSize: "12px",
          marginTop: 1,
        }}
      >
        <span>{e1.error}</span>
        <IconButton
          size="small"
          onClick={() => clearError(e1.key)}
          sx={{ color: "red" }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    ))
  );
}

export default Errortag;
