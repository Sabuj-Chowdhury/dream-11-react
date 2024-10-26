import logo from "../../assets/image/logo.png";
import { TbCoin } from "react-icons/tb";
import PropTypes from "prop-types";

const Navbar = ({ freeCredits }) => {
  return (
    <div className="sticky top-0 z-20 max-w-7xl mx-auto flex justify-between items-center mt-5 p-10 mb-5 backdrop-blur-md bg-yellow-50 bg-opacity-70 ">
      <div>
        <img src={logo} alt="Logo" className="h-10 w-auto" />
      </div>

      <div className="flex gap-8 items-center">
        <button className="hidden md:block text-sm">Home</button>
        <button className="hidden md:block text-sm">Fixture</button>
        <button className="hidden md:block text-sm">Teams</button>
        <button className="hidden md:block text-sm">Schedules</button>
        <button className="flex items-center border rounded-xl p-2 font-bold">
          <span className="mr-2 md:mr-2">{freeCredits} Coin</span>
          <TbCoin className="text-3xl text-yellow-300" />
        </button>
      </div>
    </div>
  );
};
Navbar.propTypes = {
  freeCredits: PropTypes.number,
};
export default Navbar;
