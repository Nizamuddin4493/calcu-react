import { BrowserRouter as Router } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import MainCalcu from '../component/MainCalcu';

it('renders correctly', () => {
  const tree = TestRenderer.create(<Router><MainCalcu /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});
