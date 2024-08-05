import logo from "../assets/CJlogo2.png"
import { FaLinkedin } from "react-icons/fa"
import { } from "react-icons/fa6"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-24 h-24" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/chakradhar45/"><FaLinkedin /></a>
            {/*<FaGithub /> FaGithub, FaInstagram, /fa
            <FaInstagram />
            <FaSquareXTwitter /> FaSquareXTwitter  /fa6*/ }
        </div>
    </nav>
  )
}

export default Navbar
