import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className="wrapper">
            <div className="logo"><a href=''>AQILA.</a></div>
            <div className="menu">
                <ul>
                    <li><a href="#home">Login</a></li>
                    <li><a href="#courses">Beranda</a></li>
                    <li><a href="#tutors">Course</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="" className="tbl-biru">Sign Up</a></li>
                    <li><a href="" className="tbl-biru">Login</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
