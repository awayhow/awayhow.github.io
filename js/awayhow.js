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
        sessionStorage.setItem('loginHandler', "true");
    }
    handleLogoutClick() {
        this.setState({isLoggedIn: false});
        sessionStorage.setItem('loginHandler', "false");
    }
    render() {
        // if (this.state.isLoggedIn) {
        if (!sessionStorage.getItem('loginHandler')) {
            sessionStorage.setItem('loginHandler', "false");
        }
        if (sessionStorage.getItem('loginHandler') == "true") {
            return e('a', { class: "nav-link awhPointer", onClick: this.handleLogoutClick }, 'Logout');
        } else {
            return e('a', { class: "nav-link awhPointer", onClick: this.handleLoginClick }, 'Login');
        }
    }
}

class menuOptHandler extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        if (location.pathname == this.props.href) {
            return e('a', { class: "nav-link active awhPointer", href: this.props.href }, this.props.label);
        } else {
            return e('a', { class: "nav-link awhPointer", href: this.props.href }, this.props.label);
        }
    }
}

ReactDOM.render(
    e(loginHandler, null), 
    document.getElementById('loginHandler')
);

document.querySelectorAll('#menuOptHandler')
    .forEach(domContainer => {
        const href = domContainer.dataset.href;
        const label = domContainer.dataset.text;
        ReactDOM.render(
            e(menuOptHandler, { href: href, label: label }), 
            domContainer
        )
    });
