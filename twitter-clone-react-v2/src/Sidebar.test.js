import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

test('sidebar', () => {
    const component = shallow(<Sidebar/>);
    const insideComponent = component.find('.sidebar')
    expect(insideComponent.length).toBe(1);
})