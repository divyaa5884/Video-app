import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
    	searchText: ''
    }
    onFormSubmit = (e) => {
    	e.preventDefault();
    	this.props.onSearchSubmit(this.state.searchText);
    }
    onInputChange = ((e) => {
    	this.setState({searchText: e.target.value})
    })
    render() {
        return (
            <div className="ui segment search-bar">
            	<form className = "ui form" onSubmit = {this.onFormSubmit}>
				    <input className="ui icon search" type="text" placeholder="Search for videos..." value={this.state.searchText} onChange={this.onInputChange} />
				</form>
			</div>
        );
    }
}

export default SearchBar;
