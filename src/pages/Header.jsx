// J'ai importé le composant ProfilMenu 
import { Link } from "react-router-dom";
import ProfilMenu from "./ProfilMenu";



// Je  crée une fonction qui génére du html
// Cette fonction porte un H car il s'agit d'un composant
function Header () {
    return (
    // Après le "return" je dois placer des balises pour que les 'enfants" soient pris en compte.
        <header>
           <h1>Le blog du cours de David</h1> 
           <nav>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/profil">Mon profil</Link></li>  
                    <li><Link to="/articles">Mes articles</Link></li>  
                    <ProfilMenu />
                </ul>
           </nav>
           
        </header>
    );
}
export default Header;