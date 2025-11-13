import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter } from "react-router";
import { Routing } from './routing';
const App = () => {
  return (
    <>
      <CssBaseline>
        <BrowserRouter>
        <Routing/>
        </BrowserRouter>
      </CssBaseline>
    </>
  )
}
export default App