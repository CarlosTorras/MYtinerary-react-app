import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";
import ItineraryCard from "./itineraryCard";

class MYtinerary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.fetchItineraries(this.props.match.params.city_id);
  }
  render() {
    const { itineraries } = this.props.itineraries;
    console.log(itineraries);
    // console.log(this.props);
    if (itineraries.length === 0) {
      return <div>No Itineraries found in this city</div>;
    } else {
      return (
        <div>
          <div className="cities-card">{itineraries[0].city_name}</div>
          <p>Available MYtineraries:</p>
          {itineraries.map(itinerary => (
            <ItineraryCard key={itinerary._id} itinerary={itinerary} />
          ))}
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    itineraries: state.itineraries
  };
};

export default connect(
  mapStateToProps,
  { fetchItineraries }
)(MYtinerary);
