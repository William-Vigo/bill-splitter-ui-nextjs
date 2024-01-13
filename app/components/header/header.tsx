import React from "react";
import { AppBar, Button, Box, Toolbar } from "@mui/material";
import ReceiptImg from '@mui/icons-material/ReceiptLong';
import Link from "next/link";

const Header = () => {
    return (
       <AppBar position="static" className="flex-row">
        <ReceiptImg className="grid justify-items-start"/>
        <Box className="grow grid justify-items-center">Bill Splitter</Box>
        <Box className="grid justify-items-end">
            <Toolbar>
                <Link href="/">
                    <Button variant="text" sx={{color: "white"}}>Home</Button>
                </Link>
                <Link href="/About">
                    <Button variant="text" sx={{color: "white"}}>About</Button>
                </Link>
                <Link href="/Receipts">
                    <Button variant="text" sx={{color: "white"}}>Reciepts</Button>
                </Link>
            </Toolbar>
        </Box>
       </AppBar>
    )
}

export default Header