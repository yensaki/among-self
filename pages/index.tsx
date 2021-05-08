import Layout from '../components/Layout'
import CrewCard from '../components/CrewCard'
import { useState } from 'react'
import Modal from 'react-modal'
import CrewForm from '../components/CrewForm'
import Crew from '../models/crew'
import styled from 'styled-components'

const IndexPage = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "pink",
    "orange",
    "yellow",
    "black",
    "white",
    "purple",
    "brown",
    "cyan",
    "lime"
  ]
  const defaultCrews: Crew[] = []
  colors.forEach((color, index) => {
      defaultCrews.push({color: color, name: color, inuse: true, status: "live", index: index} as Crew)
  })
  const [crews, setCrews] = useState(defaultCrews)

  const onChangeHandle = (changedCrew: Crew) => {
    const newCrews: Crew[] = []
    crews.forEach((crew) => {
      if (crew.index == changedCrew.index) {
        newCrews.push(changedCrew)
      } else {
        newCrews.push(crew)
      }
    })
    setCrews(newCrews)
  }

  const [modalIsOpen,setIsOpen] = useState(false)
  const closeModal = () => {
    setIsOpen(false)
  }
  const openModal = () => {
    setIsOpen(true)
  }

  const [backgroundImage, setBackgroundImage] = useState("")
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader()
    reader.addEventListener("load", () => {
      if (typeof reader.result == "string") {
        setBackgroundImage(reader.result)
      }
    }, false);

    const files = e.target.files
    if (files && files[0]) {
      const file = files[0]
      if (file) {
        reader.readAsDataURL(file)
      }
    }
  }

  return (
    <Layout title="Among Self">
      <Header>
        <LogoHeading>
          <img src="/logo.png" width="160px" />
        </LogoHeading>
        <div>
          <ConfigButton onClick={openModal}>
            <SettingImage src="/setting.svg" width="32px" />
          </ConfigButton>
        </div>
      </Header>
      <Header>
          <p>Among Us Note for yourself</p>
      </Header>

      <Header>
        <input type="file" name="file" onChange={onChangeImage}/>
      </Header>

      <BackgroundContainer>
        {backgroundImage ?
          <BackgroundImg src={backgroundImage} />
          : <p>マップ画像を読み込み</p>
        }

        <CrewsUl>
          {crews.map((crew) => (
            crew.inuse ? <CrewCard crew={crew} onChange={onChangeHandle} key={crew.color} /> : ""
          ))}
        </CrewsUl>
      </BackgroundContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ConfigContainer>
          <CrewsUl>
              {crews.map((crew) => 
                <CrewForm crew={crew} onChange={onChangeHandle} key={crew.index} />
              )}
          </CrewsUl>
          <CloseButton onClick={closeModal}>close</CloseButton>
        </ConfigContainer>
      </Modal>
    </Layout>
  )
}

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 72px;
  max-width: 1080px;
  padding: 0 10%;
  padding: 15px;
  margin: 0 20px;
  height: 82px;
  border-bottom: solid 2px #cee2f0;
`

const LogoHeading = styled.h1`
  margin: auto 0;
`

const SettingImage = styled.img`
  cursor: pointer;
`

const ConfigButton = styled.button`
  cursor: pointer;
  margin: 18px 6px;
  width: 64px;
  height: 64px;
`

const ConfigContainer = styled.div`
  display: grid;
  place-items: center;
`

const BackgroundContainer = styled.div`
  background-size: cover;
  min-height: 640px;
  position: relative;
  margin: 32px 0 32px 0;
`

const BackgroundImg = styled.img`
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.5;
`

const CrewsUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const CloseButton = styled.button`
  cursor: pointer;
  margin: 0 12px;
  padding: 16px;
  width: 120px;
  font-size: 18px;
`

// type CrewProps = {
//   crew: Crew,
//   onChange: (crew: Crew) => void
// }

// const CrewForm = ({crew, onChange}: CrewProps) => {
//   const [formCrew, setFormCrew] = useState(crew)
//   const HandleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const newCrew: Crew = {index: formCrew.index, color: formCrew.color, name: e.target.value, inuse: formCrew.inuse}
//       setFormCrew(newCrew)
//       onChange(newCrew)
//   }
//   return (
//       <li>
//           <p>{formCrew.color}</p>
//           <label>プレイヤー名</label>
//           <input type="text" name="name" value={formCrew.name} onChange={(e) => HandleChangeText(e)} />
//       </li>
//   )
// }

// const FormList = styled.li`
//     display: flex;
//     list-style: none;
//     width: 320px;
//     border: 1px solid #cee2f0;
//     border-radius: 5px 5px;
//     margin: 10px;
//     padding: 5px;
// `

export default IndexPage
