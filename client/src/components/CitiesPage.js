import React from "react";
import { connect } from "react-redux";
import { fetchCities } from "../store/actions/cityActions";
import { Link } from "react-router-dom";

class Cities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      citySearch: ""
    };
  }

  componentDidMount() {
    this.props.fetchCities();
  }

  handleChange = e => {
    this.setState({
      citySearch: e.target.value
    });
  };

  render() {
    const { citySearch } = this.state;
    const { cities } = this.props.cities;
    // console.log(this.props);
    let filteredCities = cities.filter(city => {
      return (
        city.city.toLowerCase().startsWith(citySearch.toLowerCase()) !== false
      );
    });
    if (filteredCities.length === 0) {
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

          {filteredCities.map(city => (
            <Link to={"/itineraries/" + city._id}>
              <div className="cities-card" key={city._id}>
                {city.city}
              </div>
            </Link>
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  };
};

export default connect(
  mapStateToProps,
  { fetchCities }
)(Cities);
