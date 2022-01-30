import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../modules/home/Home';

export default function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    );
}
