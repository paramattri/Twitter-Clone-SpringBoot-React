import { shallow } from 'enzyme';
import TrendingTweets from './components/TrendingTweets'
import { render, screen } from '@testing-library/react';

it('trendingTweets', () => {
    const component = shallow(<TrendingTweets/>)
    const insideComponent = component.find('.trendingTweets')
    expect(insideComponent.length).toBe(1)
})
