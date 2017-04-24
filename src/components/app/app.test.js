import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import {expect} from 'chai';
import path from 'path';

describe('App component', () => {
    it('should render properly', () => {
        const tree = renderer.create(<App />).toJSON();
        let filename = path.join(__dirname, 'App.spec.js.snap');
        let name = 'App renders correctly';
        expect(tree).to.matchSnapshot(filename, name);
    });
});
