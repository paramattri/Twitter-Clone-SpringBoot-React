import { shallow } from 'enzyme';
import Post from './Post';

test('post', () => {
    const component = shallow(<Post/>);
    const insideComponent = component.find('.post')
    expect(insideComponent.length).toBe(1);
})