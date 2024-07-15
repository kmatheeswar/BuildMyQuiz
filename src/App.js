import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import SubjectPage from './components/pages/SubjectPage';
import SkillPage from './components/pages/SkillPage';
import PracticePage from './components/pages/PracticePage';
import NavBar from './components/organisms/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/subject/:subjectId" element={<SubjectPage />} />
        <Route path="/skill/:skillId" element={<SkillPage />} />
        <Route path="/practice/:practiceId" element={<PracticePage />} />
      </Routes>
    </Router>
  );
};

export default App;
