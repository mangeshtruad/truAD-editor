import HomeIcon from "@mui/icons-material/Home";
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';

const list = [
    {
      name: "Tickets",
      targetLink: "/adminpanel/",
      icon: <ConfirmationNumberIcon />,
      isActive: false,
    },
    {
      name: "Analyticals",
      targetLink: "/analyticals/",
      icon: <AutoGraphIcon />,
      isActive: false,
    },
   
  ];

  export default list;
  