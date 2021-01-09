'use strict';

const e = React.createElement;

class loginHandler extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }
    render() {
        if (this.state.isLoggedIn) {
            return e('a', { class: "nav-link awhPointer", onClick: this.handleLogoutClick }, 'Logout');
        } else {
            return e('a', { class: "nav-link awhPointer", onClick: this.handleLoginClick }, 'Login');
        }
    }
}

ReactDOM.render(
    e(loginHandler, null), 
    document.getElementById('loginHandler')
);
