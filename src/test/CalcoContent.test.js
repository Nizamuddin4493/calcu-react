import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import CalcoContent from '../component/CalcoContent';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><CalcoContent /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
