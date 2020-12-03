import { shallow } from 'enzyme';
import Tweet from './components/Tweet'

test('twitterHomePage', () => {
    const component = shallow(<Tweet/>)
    const insideComponent = component.find('.twitterHomePage')
    expect(insideComponent.length).toBe(1)
})