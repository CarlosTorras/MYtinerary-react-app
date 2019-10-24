import React from "react";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cities: [],
      citySearch: ""
    };
  }

  componentDidMount() {
    fetch("/cities/all")
      .then(res => res.json())
      .then(
        result => {
          console.log(result);
          this.setState({
            isLoaded: true,
            cities: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleChange = e => {
    this.setState({
      citySearch: e.target.value
    });
  };

  render() {
    const { error, isLoaded, cities, citySearch } = this.state;
    let filteredCities = cities.filter(city => {
      return (
        city.city.toLowerCase().startsWith(citySearch.toLowerCase()) !== false
      );
    });
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Cities Page</h1>
          <label htmlFor="filter">Filter by City: </label>
          <input
            type="text"
            id="filter"
            value={this.state.citySearch}
            onChange={this.handleChange}
          />
          <ul>
            {filteredCities.map(city => (
              <li key={city.city}>
                {city.city}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Cities;
