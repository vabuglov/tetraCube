import React from 'react';
import HomePage from "./pages/HomePage/HomePage";


const routes = {
  admin: [
    { path: "/", component: <HomePage />, exact: true },
    { path: "/test1", component: <HomePage />, exact: true }
  ],
  user: [
    { path: "/test2", component: <HomePage />, exact: true },
    { path: "/test3", component: <HomePage />, exact: true }
  ]
}

export default routes;