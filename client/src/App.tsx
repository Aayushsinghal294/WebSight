import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Preview from './pages/Preview'
import Pricing from './pages/Pricing'
import MyProjects from './pages/MyProjects'
import Community from './pages/Community'
import View from './pages/View'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/pricing" element={<Pricing />} />
        <Route path="/projects/:ProjectId" element={<Projects />} />
           <Route path="/projects" element={<MyProjects/>} />
        <Route path="/preview/:ProjectId" element={<Preview />} />
        <Route path="/preview/:ProjectId/:VersionId" element={<Preview />} />
        <Route path="/community" element={<Community/>} />
        <Route path="/view/:ProjectId" element={<View/>} />
      </Routes>
    </div>
  )
}

export default App
