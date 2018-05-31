let Greeter = React.createClass({
    getDefaultProps () {
        return {
            name: 'React',
            message: 'This is the default message'
        };
    },

    getInitialState () {
        return {
            name: this.props.name
        };
    },

    onButtonClick (e) {
        e.preventDefault();
        let nameRef = this.refs.name;
        let name = nameRef.value;
        nameRef.value = '';

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            });
        }
    },

    render () {
        let name = this.state.name;
        let message = this.props.message;
        return (
            <div>
                <h1>Hello, {name}!</h1>
                <p>{`${message}!!`}</p>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name" />
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});
window.React = React;

let firstname = 'Kenny';

ReactDOM.render(
    <Greeter name={firstname} />,
    document.getElementById('app')
  );
  
