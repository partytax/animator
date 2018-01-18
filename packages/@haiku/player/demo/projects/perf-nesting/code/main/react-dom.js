/** This file was autogenerated by Haiku at 20170814200036. */
var React = require('react') // Installed as a peer dependency of '@haiku/player'
var ReactDOM = require('react-dom') // Installed as a peer dependency of '@haiku/player'
var HaikuReactAdapter = require('@haiku/player/dom/react')

var React_Holster = HaikuReactAdapter(require('./dom'))
if (React_Holster.default) React_Holster = React_Holster.default

var React_Sect = require('./simpSectTwo/react-dom')
var React_Particle = require('./particle/react-dom')

React_Holster.mount = function (element, React, ReactDOM) {
  class Main extends React.Component {
    render() {
      return React.createElement(React_Holster, { key: 'holster', name: 'holster' },
        React.createElement(React_Sect, { key: 'sect', name: 'sect' }),
        React.createElement(React_Particle, { key: 'particle1', name: 'particle1' }),
        React.createElement(React_Particle, { key: 'particle2', name: 'particle2' }),
        React.createElement(React_Particle, { key: 'particle3', name: 'particle3' }),
        React.createElement(React_Particle, { key: 'particle4', name: 'particle4' }),
        React.createElement(React_Particle, { key: 'particle5', name: 'particle5' })
      )
    }
  }
  ReactDOM.render(React.createElement(Main), element)
}

module.exports = React_Holster