import React from 'react';
import {render} from 'react-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {validate} from 'validate.js';

import rmsApp from './rmsApp';
import TestMain from './TestMain';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
	<Provider store={createStore(rmsApp)}>
		<TestMain />
	</Provider>
	, document.getElementById('app'));

var constraints = {
  creditCardNumber: {
    presence: true,
    format: {
      pattern: /^(34|37|4|5[1-5]).*$/,
      message: function(value/*, attribute, validatorOptions, attributes, globalOptions*/) {
        return validate.format("^%{num} is not a valid credit card number", {
          num: value
        });
      }
    },
    length: function(value/*, attributes, attributeName, options, constraints*/) {
      if (value) {
        // Amex
        if ((/^(34|37).*$/).test(value)) return {is: 15};
        // Visa, Mastercard
        if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
      }
      // Unknown card, don't validate length
      return false;
    }
  },
  creditCardZip: function(value, attributes/*, attributeName, options, constraints*/) {
    if (!(/^(34|37).*$/).test(attributes.creditCardNumber)) return null;
    return {
      presence: {message: "is required when using AMEX"},
      length: {is: 5}
    };
  }
};

/*const result1 = */validate({creditCardNumber: "4"}, constraints);
// => {"creditCardNumber": ["Credit card number is the wrong length (should be 16 characters)"]}

/*const result2 = */validate({creditCardNumber: "9999999999999999"}, constraints);
// => {"creditCardNumber": ["9999999999999999 is not a valid credit card number"]}

/*const result3 = */validate({creditCardNumber: "4242424242424242"}, constraints);
// => undefined

/*const result4 = */validate({
	creditCardNumber: "340000000000000"
}, constraints);
// => {"creditCardZip": ["Credit card zip is required when using AMEX"]}