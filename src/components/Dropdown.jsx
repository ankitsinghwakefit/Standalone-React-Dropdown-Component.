import React from "react";
import "../styles/dropdown.css";
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'


class Dropdown extends React.Component {
  componentDidMount() {
    M.AutoInit();
  }
  
  render() {
    return (
      <div className="mycontainer">
        <div className="dropdown_container">
          <form className="dropdown_form" onSubmit={this.props.handelSubmit}>
            <label className="label">
              Please Select Your Email Address:
              <select className="select"  onChange={this.props.handelChange}>
                <option value="">Please Select Email</option>
                {this.props.userData.map(user => (
                  <option
                    className="options"
                    key={user.id}
                    name="think"
                    value={user.email}
                    data-icon={user.avatar}
                  >
                    {user.email}
                  </option>
                ))}
              </select>
            </label>
            <input className="btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default Dropdown;
