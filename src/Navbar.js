import React from 'react';

class Navbar extends React.Component {
    render() {
        return (<div className="navbar">
            <img src="https://cdn1.iconfinder.com/data/icons/flat-mobile-app-icons/128/Video_player-512.png" alt="Logo" />
            <div className="right">
                <input type="text" name="search" placeholder="search movie" onChange = {this.props.search}/>
                <div className="links">
                    <span>Home</span>
                    <span>Browse movies</span>
                </div>
            </div>
        </div>)
    }
}

export default Navbar;