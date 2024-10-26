import PropTypes from "prop-types";
import { AiTwotoneDelete } from "react-icons/ai";

const SelectedPlayers = ({ players, handleRemovePlayer }) => {
  return (
    <div className="flex flex-col gap-4">
      {players.map((player, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded shadow flex items-center"
        >
          <img
            src={player.image}
            alt={player.name}
            className="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold">{player.name}</h2>
            <p>{player.role}</p>
            <p>Bidding Price: ${player.biddingPrice}</p>
          </div>
          <button
            onClick={() => handleRemovePlayer(player.playerId)}
            className="ml-auto bg-red-500 text-white py-1 px-3 rounded"
          >
            <AiTwotoneDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

SelectedPlayers.propTypes = {
  players: PropTypes.array.isRequired,
  handleRemovePlayer: PropTypes.func.isRequired,
};

export default SelectedPlayers;
