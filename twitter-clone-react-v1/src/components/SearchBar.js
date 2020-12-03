import React, { Component } from 'react'

class SearchBar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
        }
    }
    
    SearchHandler = (event) => {
        let keyword = event.target.value;
        this.props.parentCallback(keyword)
    }

    render() {
        return (
            <div className="searchBar">
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.SearchHandler}/>
                        {/* <button class="btn btn-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            </div>
        )
    }
}

export default SearchBar
