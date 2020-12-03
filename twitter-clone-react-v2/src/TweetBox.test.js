import { shallow } from 'enzyme';
import TweetBox from './TweetBox';

test('tweetBox', () => {
    const component = shallow(<TweetBox/>);
    const insideComponent = component.find('.tweetBox')
    expect(insideComponent.length).toBe(1);
})