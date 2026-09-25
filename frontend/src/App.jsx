import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>VoyageAI - AI Travel Planner</h1>
        <p>Welcome to your AI-powered travel planning assistant!</p>
        {/* Your app routes and components will go here */}
      </div>
      <SpeedInsights />
    </Router>
  );
}

export default App;
