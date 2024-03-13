import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import './App.css';
import MyCalendar from './components/Calendar';

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4">
          <MyCalendar />
        </main>
      </div>
    </div>
  )
}

export default App
