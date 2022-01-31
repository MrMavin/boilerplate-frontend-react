import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../modules/home/HomePage';
import HomeCatFactPage from '../modules/home/HomeCatFactPage';

const routes = (
    <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/fact" element={<HomeCatFactPage />} />

        <Route path="/" element={<Navigate to={'/home'} />} />
    </Routes>
);

export default function Router() {
    return <BrowserRouter>{routes}</BrowserRouter>;
}
