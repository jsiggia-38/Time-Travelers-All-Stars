import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from '../routes/Layout'
import './index.css'
import CreateForm from '../routes/Create'
import Home from '../routes/Home'
import TimeTravelerList from '../routes/View'
import TimeTraveler from '../routes/TimeTraveler'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Layout />}>
            <Route index = {true} element = {<Home />} />
          </Route>
          <Route path = "/create" element = {<Layout />}>
            <Route index = {true} element = {<CreateForm />} />
          </Route>
          <Route path = "/view" element = {<Layout />}>
            <Route index = {true} element = {<TimeTravelerList />} />
          </Route>
          <Route path = "/timeTravelers/:id" element = {<Layout />}>
            <Route index = {true} element = {<TimeTraveler />} />
          </Route>


  
        </Routes>
  </BrowserRouter>
)
