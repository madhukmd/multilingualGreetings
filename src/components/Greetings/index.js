import {Component} from 'react'
import GreetingItem from '../GreetingItem'

import {
  GreetingContainer,
  Content,
  Heading,
  ButtonsContainer,
  Image,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

class Greetings extends Component {
  state = {
    activeTab: languageGreetingsList[0].id,
  }

  getImageUrl = () => {
    const {activeTab} = this.state
    const Img = languageGreetingsList.filter(
      eachItem => eachItem.id === activeTab,
    )
    const {imageUrl, imageAltText} = Img[0]
    return <Image src={imageUrl} alt={imageAltText} key={imageUrl} />
  }

  changeTab = id => {
    this.setState({activeTab: id})
  }

  render() {
    const {activeTab} = this.state
    // const imageUrl = this.getImageUrl(activeTab)
    // console.log(imageUrl)
    return (
      <GreetingContainer>
        <Content>
          <Heading>Multilingual Greetings</Heading>
          <ButtonsContainer>
            {languageGreetingsList.map(eachItem => (
              <GreetingItem
                key={eachItem.id}
                greeting={eachItem}
                changeTab={this.changeTab}
                isActive={eachItem.id === activeTab}
              />
            ))}
          </ButtonsContainer>
          {this.getImageUrl()}
        </Content>
      </GreetingContainer>
    )
  }
}
export default Greetings
