import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import MainPage from '../containers/MainPage/MainPage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<MainPage />} />
                    </Routes>
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
