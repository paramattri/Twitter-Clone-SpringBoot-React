import { shallow } from 'enzyme';
import AccessDenied from './AccessDenied';

test('accessDenied', () => {
    const component = shallow(<AccessDenied/>);
    const insideComponent = component.find('.accessDenied')
    expect(insideComponent.length).toBe(1);
  })
