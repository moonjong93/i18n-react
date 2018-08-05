import React from 'react';
import { Header } from '../componenets'
import { Translate } from 'react-redux-i18n'

// import style from '../styles/index'
class About extends React.Component {
    render(){
        return (
            <div className="main">
                <Header> </Header>
                <h2>
                    i18n :
                </h2>
                <p>
                    <Translate value="about"></Translate>
                </p>
            </div>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         locale: state.choiceLanguage.locale,
//     }
// }

// Home = connect(mapStateToProps)(Home);

export default About;