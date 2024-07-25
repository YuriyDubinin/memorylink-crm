import React, {Suspense} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Layout from '../layouts/Layout';
import CreatePage from '../containers/CreatePage/CreatePage';
import DeletePage from '../containers/DeletePage/DeletePage';

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense>
                    <Routes>
                        <Route path="/" element={<>AUTH_PAGE</>} />
                        <Route path="/create" element={<CreatePage />} />
                        <Route path="/delete" element={<DeletePage />} />
                    </Routes>
                </Suspense>
            </Layout>
            <Toaster />
        </BrowserRouter>
    );
};

export default App;
