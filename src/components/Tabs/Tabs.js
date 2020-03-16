
import React from 'react'
import { Tab } from 'semantic-ui-react'

import Movies from './Movies/Movies';
import SearchResults from './SearchResults/SearchResults';
import TvShows from './TvShows/TvShows';

// Importing CSS file
import "./Tabs.css";

const panes = [
  {
    menuItem: 'MOVIES',
    render: () => <Tab.Pane attached={false}><Movies /></Tab.Pane>,
  },
  {
    menuItem: 'SEARCH RESULTS',
    render: () => <Tab.Pane attached={false}><SearchResults /></Tab.Pane>,
  },
  {
    menuItem: 'TV SHOWS',
    render: () => <Tab.Pane attached={false}><TvShows /></Tab.Pane>,
  },
]

const TabExampleSecondaryPointing = () => (
  <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
)

export default TabExampleSecondaryPointing

