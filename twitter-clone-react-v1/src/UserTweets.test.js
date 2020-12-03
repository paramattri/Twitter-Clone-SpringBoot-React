import { shallow } from 'enzyme';
import UserTweets from './components/UserTweets'

test('userHomePage', () => {
    const component = shallow(<UserTweets/>)
    const insideComponent = component.find('.userHomePage')
    expect(insideComponent.length).toBe(1)
})