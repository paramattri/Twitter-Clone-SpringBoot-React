const { shallow } = require("enzyme")
import Login from './components/Login'

test('login', () => {
    const component = shallow(<Login/>)
    const insideComponent = component.find('.login')
    expect(insideComponent.length).toBe(1)
})
