import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();
    this.state = { search: "" };
  }

  render() {
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            value={this.state.searach}
            placeholder="Search Your Feed"
            onChange={e => this.props.searchFeedFn(e.target.value)}
          />

          <SearchIcon id="Search__icon" />
        </div>
      </section>
    );
  }
}