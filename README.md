README

Resource Management System App is in-training project in Mitrais' Java Bootcamp program. This project is only focusing on frontend side developed using React + Redux + Material UI.
The project still in development process.

TODO:
 1. refactoring wrapping dialog, which used in employment history and office location. For now the wrapping dialong still repeating which against DRY rule.
 2. commons/*SelectField need refactoring.
 3. <del>wiring to RESTful API</del> IN PROGRESS
 4. search, sorting the employee list
 5. UX inconsistencies, when user hit cancel button (or lost focus) on a form the store already changed. Pass temporary state to form may solve the case IMO.
 6. <del>re-structure the store, <em>employees</em> list is changed
 into employees object or <em>associative map</em> with ID as key
 and employee as value.</del> CANCELLED
 7. isolate the style into css file

CHANGELOG

1. 2017-03-31 all <em>ID</em> is string of url relative address,
not a number.
2. 2017-03-31 remove UUID dependencies.
3. 2017-04-03 CreateEmployeeDialog use EmployeeForm,
and removing CreateEmployeeForm.

COMMANDS 

$ npm test

to run the test suite written with jest library.

$ npm start 

to start development server, which is webpack dev server, listening on localhost port 3003.
To change the config please refer to webpak-dev-server.config.js

$ npm run lint

to start linting the code, using eslint with recommended rule. Actually the rule is altered a bit: (1) no-console warn (2) no-unused-var warn

$ npm run start-api

to run backend json-server to mock RESTful API.
The mocking backend is still on development process and the project don't use this mocking RESTful API yet.

$ npm run webpack

to build single javascript, please refer webpack.config.js for configuration.

WEBPACK CONFIG FILE

webpack-dev-server.config.js
webpack-production.config.js
webpack.config.js