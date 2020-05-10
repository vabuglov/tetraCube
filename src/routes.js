import React from 'react';
import HomePage from "./pages/HomePage/HomePage";


const routes = {
  admin: [
    { path: "/", children: <HomePage />, exact: true },
    { path: "/test1", children: <HomePage />, exact: true }
  ],
  user: [
    { path: "/test2", children: <HomePage />, exact: true },
    { path: "/test3", children: <HomePage />, exact: true }
  ]
}

export default routes;