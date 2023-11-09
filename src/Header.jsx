// J'ai importé le composant ProfilMenu 
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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">A propos de moi</a></li>
                    <li><a href="#">Mes idées</a></li>  
                    <ProfilMenu />
                </ul>
           </nav>
           
        </header>
    );
}
export default Header;