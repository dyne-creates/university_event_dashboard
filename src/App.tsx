import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"

import NavBar from './components/NavBar'
import PageNotFound from './pages/PageNotFound'
import ViewEvent from "./pages/ViewEvent"
import RegisterEvent from "./pages/RegisterEvent"

type EventType = {
  eventName: string;
  venue: string;
  date: string;
  organizer: string;
  capacity: number;
  registeredStudents: string[];
}

export default function App() {

  const [events, setEvents] = useState<EventType[]>([
    {
      eventName: 'Tech Symposium',
      venue: 'FGB Hall',
      date: 'March 29, 2026',
      organizer: 'Jerry Salazar',
      capacity: 20,
      registeredStudents: []
    },
    {
      eventName: 'Leadership Training',
      venue: 'Gymnasium',
      date: 'May 01, 2026',
      organizer: 'John Kenedy',
      capacity: 30,
      registeredStudents: [
        'Rizalyn Ocampo',
        'Ronald Fernandez',
        'Stephanie Bantasan',
        'Queen Natividad'
      ]
    },
    {
      eventName: 'Robotics Training',
      venue: 'Legacy Hall',
      date: 'April 19, 2026',
      organizer: 'Julius Caesar',
      capacity: 15,
      registeredStudents: [
        'Romeo Celebes',
        'Karrie Tan',
        'Marjorie Sinta'
      ]
    }
  ])

  const addEvent = (newEvent: EventType) => {
    setEvents(prev => [...prev, newEvent])
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ViewEvent events={events} />}/>
        <Route path="/register" element={<RegisterEvent addEvent={addEvent} />}/>
        <Route path="*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  )
}