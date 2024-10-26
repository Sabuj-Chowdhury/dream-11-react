import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import MainSection from "./components/MainSection/MainSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [players, setPlayers] = useState([]);
  const [freeCredits, setFreeCredits] = useState(0); // Initial balance set to zero

  useEffect(() => {
    fetch("/players.json") // Ensure this path is correct
      .then((res) => res.json())
      .then((data) => setPlayers(data.players))
      .catch((error) => console.error("Error fetching players:", error));
  }, []);

  const handleClaimCredit = () => {
    const newFreeCredit = freeCredits + 60000000;
    setFreeCredits(newFreeCredit);
    toast.success(`${60000000} claimed successfully`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const updateCredits = (newBalance) => {
    setFreeCredits(newBalance);
  };

  return (
    <>
      <Navbar freeCredits={freeCredits} />
      <Banner handleClaimCredit={handleClaimCredit} />
      <MainSection
        players={players}
        freeCredits={freeCredits}
        updateCredits={updateCredits}
      />
      <ToastContainer />
    </>
  );
}

export default App;
