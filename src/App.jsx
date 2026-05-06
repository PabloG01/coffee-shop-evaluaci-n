import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DeveloperPage from './components/DeveloperPage';
import NotFoundPage from './pages/NotFoundPage';

const developerData = {
  name: 'Pablo Guzmán',
  career: 'Ingeniería Civil Informática',
  description: 'Estudiante de Ingeniería Civil Informática con experiencia en desarrollo de aplicaciones web.',
  github: 'https://github.com/PabloG01',
  techs: ['React', 'Vite', 'CSS Modules', 'Flexbox', 'React Router DOM'],
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/desarrollador"
          element={
            <DeveloperPage
              name={developerData.name}
              career={developerData.career}
              description={developerData.description}
              github={developerData.github}
              techs={developerData.techs}
            />
          }
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;