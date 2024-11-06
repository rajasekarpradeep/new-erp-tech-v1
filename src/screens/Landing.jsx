import React, {useState} from 'react'
import Navbar from '../components/Navbar/Navbar'
import Header from '../components/Header/Header'
import About from '../components/sections/About'
import Industry from '../components/sections/Industry'
import Services from '../components/sections/Services'
import ServiceArea from '../components/sections/ServiceArea'
import Footer from '../components/sections/Footer'
import Modal from '../components/Elements/Modal'
import Contact from '../components/sections/Contact'
import Map from '../components/sections/Map'

const Landing = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent('');
  };


  return (
    <>
     <Navbar/>
     <Header/>
     <main>
     <About/>
     {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
      )}
     <Services openModal={openModal}/>
     <ServiceArea/>
     <Industry/>
     <Contact/>
     <Map/>
     </main>
     <Footer/>
  

    </>
   
  )
}

export default Landing