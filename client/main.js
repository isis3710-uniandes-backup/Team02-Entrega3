import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import OfertasList from '../imports/ui/OfertasList';

Meteor.startup(() => {
    render(<OfertasList/>, document.getElementById('root'));
  });