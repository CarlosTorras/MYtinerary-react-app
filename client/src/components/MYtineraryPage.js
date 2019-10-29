import React from "react";
import { connect } from "react-redux";
import { fetchItineraries } from "../store/actions/itineraryActions";

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
    // console.log(this.props);
    if (itineraries.length === 0) {
      return <div>No Itineraries found in this city</div>;
    } else {
      return (
        <div>
          <h1>Itineraries Page</h1>

          {itineraries.map(itinerary => (
            <div className="itinerary-card" key={itinerary._id}>
              {itinerary.name}
            </div>
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
