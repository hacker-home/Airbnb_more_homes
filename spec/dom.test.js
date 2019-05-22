import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ListEntry from '../client/src/components/ListEntry';
import StarRating from '../client/src/components/StarRating';
import ListOfHomes from '../client/src/components/ListOfHomes';
configure({ adapter: new Adapter() });

const testEntries = (() => {
  let arr = [];
  for (let i = 0; i < 5; i++) {
    arr.push({
      id: i,
      img: `path${i}.jpg`,
      house_type: 'house',
      location: 'Berlin',
      description: `sunny${i}`,
      cost_per_night: 250 + i,
      rating: 1.1 + (i * 0.5),
      votes: 4
    });
  }
  return arr;
})();


it('render ListEntry correctly', () => {
  const tree = renderer
    .create(<ListEntry entry={testEntries[0]} key={testEntries.id} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render StarRating correctly', () => {
  const tree = renderer
    .create(<StarRating rating={testEntries[0].rating} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('render ListOfHomes correctly', () => {
  const tree = renderer
    .create(<ListOfHomes data={testEntries} height={720} width={1150} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('component of ListEntry', () => {
  const entry = shallow(<ListEntry entry={testEntries[1]} key={testEntries[1].id} />);
  expect(entry.text()).not.toBeNull();
});
