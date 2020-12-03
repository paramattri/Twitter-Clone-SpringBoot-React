import { shallow } from 'enzyme';
import UpdateTweet from './components/UpdateTweet'

test('updateTweet', () => {
    const component = shallow(<UpdateTweet/>)
    const insideComponent = component.find('.updateTweet')
    expect(insideComponent.length).toBe(1)
})