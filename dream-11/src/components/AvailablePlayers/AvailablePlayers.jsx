import PropTypes from "prop-types";
import { FaUser, FaFlag } from "react-icons/fa6";

const AvailablePlayers = ({ players, handleAddPlayer }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {players.map((player, idx) => (
        <div key={idx} className="bg-white p-4 rounded shadow">
          <img
            src={player.image}
            alt={player.name}
            className="h-30 w-full object-cover mb-4 rounded"
          />
          <h2 className="font-bold flex text-2xl ">
            <span className="mr-2 ">
              <FaUser />
            </span>
            {player.name}
          </h2>
          <div className="flex justify-between text-gray-400 mb-2">
            <p className="text-gray-400 flex items-center">
              <span className="mr-2">
                <FaFlag />
              </span>{" "}
              {player.country}
            </p>
            <p className="p-2 bg-slate-100 rounded"> {player.role}</p>
          </div>
          <hr />
          <div className="space-y-2">
            <h3 className="text-sm mt-2 font-bold">Rating</h3>
            <div className="flex justify-between">
              <p className="font-bold">{player.playerType}</p>
              <p className="text-gray-300">{player.playerType}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-bold">Price: ${player.biddingPrice} </p>
              <button
                onClick={() => handleAddPlayer(player)}
                className="bg-yellow-300 text-black py-1 px-4 font-bold rounded mt-2"
              >
                Choose Player
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

AvailablePlayers.propTypes = {
  players: PropTypes.array.isRequired,
  handleAddPlayer: PropTypes.func,
};

export default AvailablePlayers;
