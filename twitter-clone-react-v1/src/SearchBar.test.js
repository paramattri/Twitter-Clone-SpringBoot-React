import { shallow } from 'enzyme';
import SearchBar from './components/SearchBar'

test('searchBar', () => {
    const component = shallow(<SearchBar/>)
    const insideComponent = component.find('.searchBar')
    expect(insideComponent.length).toBe(1)
})