import { shallow } from 'enzyme';
import Navbar from './components/Navbar'

test('twitterNavbar', () => {
    const component = shallow(<Navbar/>)
    const insideComponent = component.find('.twitterNavbar')
    expect(insideComponent.length).toBe(1)
})