import './App.css'
import { RouterProvider, createRoute } from '@tanstack/react-router';
import { routeTree } from "./routeTree.gen";
import Tiles from './pages/Tiles';
import { StrictMode } from 'react';

const router = createRoute({routeTree});

function App() {
  
  return (
      <RouterProvider router={router} /> 
  );
}

export default App
