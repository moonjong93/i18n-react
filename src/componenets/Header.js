import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocale } from 'react-redux-i18n';

import locale from '../locale'


class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div>
                    <ul>
                        <li>
                            <div className="title"> i18n </div>
                        </li>
                        <li><Link to="/">ME</Link></li>
                        <li><Link to="/about">ABOUT</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        { Object.keys(locale).map( (lang, i) => (<li onClick={() => this.props.setLocale(lang) } key={i}>{ (lang).toUpperCase() }</li>) ) }
                    </ul>
                </div>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setLocale: (lang) =>  dispatch(setLocale(lang))
    }
}

Header = connect(undefined, mapDispatchToProps)(Header);
export default Header;