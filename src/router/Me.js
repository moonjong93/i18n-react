import React from 'react';
import { Header } from '../componenets'
import { Translate } from 'react-redux-i18n'

const Me = () => {
    return (
        <div className="main">
            <Header> </Header>
            <h2>
                <Translate value="hello"/>
            </h2>
            <h2>
                <Translate value="title"/>
            </h2>
            <p>
                <Translate value="description"/>
            </p>
        </div>
    )
}

export default Me;