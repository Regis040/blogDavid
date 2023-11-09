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
                    <li>Home</li>
                    <li>A propos de moi</li>
                    <li>Mes idées</li>  
                    <ProfilMenu />
                </ul>
           </nav>
           
        </header>
    );
}
export default Header;