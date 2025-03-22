// Importe le logo depuis les assets (image SVG)
import logo from '../../../assets/LocalExpress_logo.svg';

// Importe le fichier de styles SCSS spécifique au composant Header
import './Header.scss';


// Déclaration du composant fonctionnel Header
function Header() {
  // Fonction appelée lors du clic sur le bouton
  const handleClick = () => {
    // Action à définir ici (par exemple : navigation, ouverture de modale, etc.)
  };

  return (
    // Élément HTML <header> avec une classe CSS "header"
    <header className="header">
      
      {/* Affiche le logo de l'application avec un texte alternatif */}
      <img src={logo} alt="Local Express" />
      
      {/* Titre principal affiché dans l'en-tête */}
      <h1>Vos courses livrées avec le sourire</h1>

      {/* Bouton avec un texte, une classe CSS "big" et un gestionnaire d’événement au clic */}
      <button
        type="button"         // Spécifie que c’est un bouton standard (pas un submit)
        className="big"       // Applique les styles associés à la classe CSS "big"
        onClick={handleClick} // Déclenche la fonction handleClick lors du clic
      >
        Commencer
      </button>

    </header>
  );
}

// Exporte le composant pour qu’il soit utilisé dans d’autres parties de l’application
export default Header;
