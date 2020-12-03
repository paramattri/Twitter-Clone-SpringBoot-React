import { shallow } from 'enzyme';
import CreateTweet from './components/CreateTweet'

test('createTweet', () => {
    const component = shallow(<CreateTweet/>)
    const insideComponent = component.find('.createTweet')
    expect(insideComponent.length).toBe(1)
})