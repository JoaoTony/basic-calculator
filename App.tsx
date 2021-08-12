import { StatusBar } from 'expo-status-bar';
import React from 'react';



import Home from './src/views/home';


export default function App() {
  return (
    <><StatusBar style="inverted"/>
      <Home/>
    </>
  );
}

