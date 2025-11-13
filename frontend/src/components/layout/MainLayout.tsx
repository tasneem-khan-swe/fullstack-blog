import Box from '@mui/material/Box';
import {Outlet} from "react-router";

export const MainLayout = () => {
  return (
    <Box component="main" flex={2} sx={{display:"flex", justifyContent: "center", alignItems: "center"}}>
        <Outlet/>
    </Box>
  )
}
