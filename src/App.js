import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import HomePageLayout from "./HomePageLayout";
import PropertiesPage from "./PropertiesPage";
import { fetchProperties } from "./store/slice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProperties());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />} />
      <Route path="/properties" element={<PropertiesPage />} />
    </Routes>
  );
}

export default App;
