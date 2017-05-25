var React = require('react');
var Hello = require('./Hello');

class App extends React.Component{
    render() {
        return(
            <div>
                <Hello />
            </div>
        )
    }
}

module.exports = App;