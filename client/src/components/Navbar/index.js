import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light container-fluid sticky-top">
      <Link class="navbar-item" to="/">STEFFANO MALAGA</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><Link class="nav-link" to="/Projects">PROJECTS</Link></li>
          <li class="nav-item"><Link class="nav-link" to="/Contact">CONTACT ME</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
