import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './pages/index';

export default function Example() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* <Route index element={<Home />} />
        <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
