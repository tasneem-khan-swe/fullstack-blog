// import {NavLink} from "react-router";
import { Facebook, Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import SearchIcon from '@mui/icons-material/Search';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { NavLink, Link } from "react-router";
const navLinks = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
];
const socialLinks = [
    {
        name: "Facebook",
        icon: <Facebook />,
        url: "https://facebook.com",
    },
    {
        name: "Instagram",
        icon: <Instagram />,
        url: "https://instagram.com",
    },
    {
        name: "LinkedIn",
        icon: <LinkedIn />,
        url: "https://linkedin.com",
    },
    {
        name: "GitHub",
        icon: <GitHub />,
        url: "https://github.com",
    },
];

export const Header = () => {
    return (
        <Box>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box className="left-logo">
                            <Typography sx={{ fontWeight: "bold", fontSize: "24px" }} component="div">Tasfa</Typography>
                        </Box>
                        <Box className="center-nav" component="nav">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.title}
                                    to={link.path}
                                    style={{color: "#fff", textDecoration: "none", margin: "0 5px", padding: "5px"}}
                                // className={({ isActive }) =>
                                //   isActive ? styles.activeLink : styles.link
                                // }
                                >
                                    {link.title}
                                </NavLink>
                            ))}
                        </Box>
                        <Box className="right-social">
                            <a><SearchIcon /></a>
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.name}
                                    to={social.url}
                                    target="_blank"
                                    style={{ color: "#fff", textDecoration: "none" }}

                                    rel="noopener noreferrer" // security & privacy
                                //   className={styles.iconLink}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
