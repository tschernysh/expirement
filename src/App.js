import logo from './logo.svg';
import './App.css';
import Preloader from './Components/Preloader/Preloader';
import { useEffect, useState } from 'react';
import ContentWrapper from './Components/ContentWrapper/ContentWrapper';
import { PhaseContext } from './Context/PhaseContext';
import { UserDataContext } from './Context/UserDataContext';
import Modal from './Components/Modal/Modal';
import { ModalContext } from './Context/ModalContext';
import React from 'react'


function App() {
  const [preloader, setPreloader] = useState(true)
  const [offPreloader, setOffPreloader] = useState(false)
  const [phase, setPhase] = useState('HELLO')
  const [phaseFetch, setPhaseFetch] = useState(false)
  const [userData, setUserData] = useState({
    name: '',
    fakeName: '',
    prevPhase: '',
    priest: [null, null],
    toaster: [null, null],
    sex: [null, null],
    papich: [null, null],
    video: [null, null],
    porn: [null, null]
  })
  const [modalContent, setModalContent] = useState({
    mood: null,
    content: null
  })
  const [modalVisibility, setModalVisibility] = useState(false)
  const [userSex, setUserSex] = useState(null)

  useEffect(() => {
    setUserSex(userData.sex[1] === null ? userData.sex[0] === null ? null : userData.sex[0] : userData.sex[1])
  }, [userData.sex])

  setTimeout(() => {
    setOffPreloader(true)
  }, 10000)

  return (
    <PhaseContext.Provider value={{phase, setPhase, phaseFetch, setPhaseFetch}} >
      <UserDataContext.Provider value={{userData, setUserData, userSex}}>
        <ModalContext.Provider value={{setModalVisibility, setModalContent}}>
          <div className="App">
            {preloader && <Preloader offPreloader={offPreloader} setPreloader={setPreloader} />}
            <ContentWrapper preloader={preloader} phaseFetch={phaseFetch} setPhaseFetch={setPhaseFetch} setUserData={setUserData} userData={userData} setPhase={setPhase} phase={phase} />
            {modalVisibility && <Modal setModalVisibility={setModalVisibility} modalContent={modalContent} /> }
          </div>
        </ModalContext.Provider>
      </UserDataContext.Provider>
    </PhaseContext.Provider>
  );

}

export default App;
