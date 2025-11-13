import { Box } from '@mui/material'
import { Header } from './Header'
import { MainLayout } from './MainLayout'
import { Footer } from './Footer'

export const Layout = () => {
  return (

    <>
      <Header />
      <Box sx={{ display: "flex" }}>
        <MainLayout />
      </Box>
      <Footer />
    </>
  )
}
