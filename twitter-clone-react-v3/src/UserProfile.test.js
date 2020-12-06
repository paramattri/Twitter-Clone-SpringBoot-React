import { shallow } from 'enzyme';
import UserProfile from './UserProfile';

test('userProfile', () => {
    const component = shallow(<UserProfile/>);
    const insideComponent = component.find('.userProfile')
    expect(insideComponent.length).toBe(1);
})