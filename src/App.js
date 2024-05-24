import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import { ProfileProvider } from "./context/ProfileContext";


function App() {
  return (
    <ProfileProvider>
   <BrowserRouter>
   <Routes>
    <Route index element={<Dashboard />}/>
   </Routes>
   </BrowserRouter>
   </ProfileProvider>
  );
}

export default App;
