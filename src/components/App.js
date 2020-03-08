import React from "react";
import Dropdown from "./Dropdown";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      value: "",
      userData: null,
      targetedUser: null
    };
    this.handelChange = this.handelChange.bind(this);
    this.handelSubmit = this.handelSubmit.bind(this);
  }
  componentDidMount() {
    fetch("https://reqres.in/api/users")
      .then(Response => Response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          value: "",
          userData: data
        });
      });
  }

  handelChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handelSubmit(event) {
    event.preventDefault();
    fetch("https://reqres.in/api/users")
      .then(Response => Response.json())
      .then(data => {
        console.log(data.data);
        this.setState({
            targetedUser: data.data
        });
      });
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          <h1>Loading Users Details....</h1>
        ) : (
            // Reusable Dropdown Component
          <Dropdown
            userData={this.state.userData.data}
            handelSubmit={this.handelSubmit}
            handelChange={this.handelChange}
          />
        )}
        {/* Profile card of selected user */}
        {this.state.targetedUser
          ? this.state.targetedUser.map(selectedUserDetails =>
            selectedUserDetails.email === this.state.value ? (
                <div className='profile-contatiner'>
                    <div className='profile'>
                        <div class="ab">
                        <div class="card-panel">
                            <div class="row">
                            <div class="col s2">
                                <img src={selectedUserDetails.avatar} alt="avatar" class="circle responsive-img">
                                </img>
                            </div>
                            <div class="col s10">
                                <span class="black-text">
                                    Hello, {selectedUserDetails.first_name} {selectedUserDetails.last_name} <br></br>
                                    Email : {selectedUserDetails.email}
                                </span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </>
    );
  }
}

export default App;
