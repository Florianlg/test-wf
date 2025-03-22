// Importe le fichier de styles SCSS spécifique au composant Footer
import './Footer.scss';


// Déclaration du composant fonctionnel Footer
function Footer() {
  return (
    // Élément HTML <footer> avec une classe CSS "footer"
    <footer className="footer">
      {/* Affiche l’année actuelle dynamiquement avec JavaScript */}
      {/* Exemple : "© 2025 — LocalExpress" */}
      <p>© {new Date().getFullYear()} — LocalExpress</p>
    </footer>
  );
}

// Exporte le composant pour qu'il puisse être utilisé ailleurs dans l'application
export default Footer;