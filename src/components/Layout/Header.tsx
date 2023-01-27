import {
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { Settings } from "@mui/icons-material";
import { BaseSyntheticEvent, Fragment, useState, useContext } from "react";
import UIContext from "../../store/ui-context";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: BaseSyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const uiCtx = useContext(UIContext);

  return (
    <Fragment>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          paddingY: "20px",
          paddingX: "37px",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h1">To Do</Typography>
        <Tooltip title="Settings">
          <IconButton
            onClick={handleClick}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Settings sx={{ width: 28, height: 30 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={uiCtx.onToggleViewHandler}>
          <ListItemIcon>
            {uiCtx.isSubtitleVisible ? (
              <VisibilityIcon />
            ) : (
              <VisibilityOffIcon />
            )}
          </ListItemIcon>
          {uiCtx.isSubtitleVisible ? "Hide" : "Show"} Description(s)
        </MenuItem>
      </Menu>
    </Fragment>
  );
}

export default Header;
