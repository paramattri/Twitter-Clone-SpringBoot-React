import { shallow } from 'enzyme';
import Logout from './components/Logout'

test('logout', () => {
    const component = shallow(<Logout/>)
    const insideComponent = component.find('.logout')
    expect(insideComponent.length).toBe(1)
})