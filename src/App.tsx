import { useCallback, useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Work from './components/Work'
import Systems from './components/Systems'
import Services from './components/Services'
import Process from './components/Process'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Modal from './components/Modal'
import type { Project } from './data/projects'

export default function App() {
  const [open, setOpen] = useState<Project | null>(null)
  const close = useCallback(() => setOpen(null), [])
  return (<><Nav /><main><Hero /><Work onOpen={setOpen} /><Systems onOpen={setOpen} /><Services /><Process /><About /><Contact /></main><Footer /><Modal p={open} close={close} /></>)
}
