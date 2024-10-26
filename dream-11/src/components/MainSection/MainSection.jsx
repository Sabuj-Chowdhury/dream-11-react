import { useState } from "react";
import AvailablePlayers from "../AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const MainSection = ({ players, freeCredits, updateCredits }) => {
  const [isAvailable, setAvailable] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleToggleView = (view) => {
    setAvailable(view === "available");
  };

  const handleAddPlayer = (player) => {
    if (selectedPlayers.length >= 6) {
      toast.error("You can't add more than 6 players");
      return;
    }

    if (
      selectedPlayers.some((selected) => selected.playerId === player.playerId)
    ) {
      toast.error(`${player.name} is already selected`);
      return;
    }

    if (freeCredits < player.biddingPrice) {
      toast.error("Not enough credit, please claim more free credit", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const newBalance = freeCredits - player.biddingPrice;
    updateCredits(newBalance);
    setSelectedPlayers([...selectedPlayers, player]);
    toast.success(
      `${player.name} selected successfully for ${player.biddingPrice}. Remaining balance: ${newBalance}`,
      { position: "top-center", autoClose: 3000 }
    );
  };

  const handleRemovePlayer = (playerId) => {
    setSelectedPlayers(
      selectedPlayers.filter((player) => player.playerId !== playerId)
    );
    toast.info("Player removed from your team");
  };

  // switch back to available players
  const handleAddMorePlayersClick = () => {
    handleToggleView("available");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-end gap-4 mb-4">
        <button
          onClick={() => handleToggleView("available")}
          className={`px-4 py-2 rounded-xl font-bold ${
            isAvailable ? "bg-yellow-300 text-black" : "bg-gray-200"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleToggleView("selected")}
          className={`px-4 py-2 rounded-xl font-bold ${
            !isAvailable ? "bg-yellow-300 text-black" : "bg-gray-200"
          }`}
        >
          Selected ({selectedPlayers.length})
        </button>
      </div>

      <div>
        {isAvailable ? (
          <div>
            <p className="text-3xl font-bold mb-3">Available Players List</p>
            <AvailablePlayers
              players={players}
              handleAddPlayer={handleAddPlayer}
            />
          </div>
        ) : (
          <div>
            <p className="text-3xl font-bold mb-3">
              Selected Players List ({selectedPlayers.length}/6)
            </p>
            <SelectedPlayers
              players={selectedPlayers}
              handleRemovePlayer={handleRemovePlayer}
            />

            <button
              onClick={handleAddMorePlayersClick}
              className="rounded-xl p-4 font-bold bg-yellow-300 mt-5"
            >
              Add More Players
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

MainSection.propTypes = {
  players: PropTypes.array,
  freeCredits: PropTypes.number,
  updateCredits: PropTypes.func,
};

export default MainSection;
