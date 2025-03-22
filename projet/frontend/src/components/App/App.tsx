// Importe le composant Header depuis le dossier "Header"
import Header from './Header/Header';

// Importe les styles globaux de l'application
import './App.scss';

// Importe le composant Footer depuis le dossier "Footer"
import Footer from './Footer/Footer';


// Déclaration du composant principal App
function App() {
  return (
    // Conteneur principal avec la classe CSS "app"
    <div className="app">
      
      {/* Affiche le composant Header en haut de la page */}
      <Header />

      {/* Affiche le composant Footer en bas de la page */}
      <Footer />
      
    </div>
  );
}

// Exporte le composant App pour qu’il soit utilisé par React (dans index.js par exemple)
export default App;
