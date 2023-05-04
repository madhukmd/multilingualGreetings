import {ListItem, Button} from './styledComponents'

const GreetingItem = props => {
  const {greeting, changeTab, isActive} = props
  const {id, buttonText} = greeting
  return (
    <ListItem>
      <Button
        type="button"
        active={`${isActive}`}
        onClick={() => changeTab(id)}
      >
        {buttonText}
      </Button>
    </ListItem>
  )
}

export default GreetingItem
