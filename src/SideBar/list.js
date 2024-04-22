import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const list = [
  {
    name: "Tickets",
    targetLink: "/adminpanel/",
    icon: <ConfirmationNumberIcon />,
    isActive: true,
  },
  {
    name: "Analyticals",
    targetLink: "/analyticals/",
    icon: <AutoGraphIcon />,
    isActive: false,
  },
  {
    name: "Editer",
    targetLink : "/editer/",
    icon :<AutoFixHighIcon/>,
    isActive: false
  },
];

export default list;
