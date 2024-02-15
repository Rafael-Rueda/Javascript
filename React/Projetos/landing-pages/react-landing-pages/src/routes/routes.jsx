import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import App from '../templates/App';

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/pages' element={<Outlet/>}>
                    <Route path=':slug' element={<App />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}