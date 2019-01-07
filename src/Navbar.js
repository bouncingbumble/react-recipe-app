import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }

    static propTypes = {
        onNewRecipe: PropTypes.func
    }

    render() {
        const {appName} = this.props;
        const links = this.props.links.map((link, i) => (
            <a onClick={this.props.onNewRecipe} key={i} href="#">{link}</a>
        ))
        return (
            <div className="navbar">
                <div className="navbar-appName">
                    <h2>{appName}</h2>
                </div>
                <div className="navbar-links">
                    <h4>
                    {links}
                    </h4>
                </div>
            </div>
        );
    }
}

export default Navbar;