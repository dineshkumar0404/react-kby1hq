import React, { Component } from 'react';
import data from './pages/data.json';
import Addmodel from './Addmodel.js';
import { Modal, ModalBody } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from './components/RegisterForm.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: data,
      selecteduser: null,
      showModel: false,
      loading: true,
    };
  }
  passEmployee(e) {
    this.state.users.push(e);
    this.setState({ users: this.state.users });
  }

  DeleteRow = (index, name) => {
    this.state.users.splice(index, 1);
    this.setState({ users: this.state.users });
    // console.log(this.state.users.employee_name)
    alert('Do you want to delete EmployeeName : ' + name);
  };

  Details = (users) => {
    // console.log(index);
    console.log(
      'EmployeeID : ' + users.id,
      'EmployeeName :' + users.employee_name,
      'EmployeeSalary :' + users.employee_salary,
      'EmployeeAge :' + users.employee_age,
      'Email ID :' + users.email,
      'Designation :' + users.designation,
      'ProfileImage :' + users.file
    );
  };

  Update = (users) => {
    this.setState({ showModel: true });
    this.setState({ selecteduser: users });

    //   console.log("EmployeeID : " + users.id,
    //   "EmployeeName :" + users.employee_name,
    //   "EmployeeSalary :" + users.employee_salary,
    //   "EmployeeAge :" + users.employee_age,
    //   "Email ID :" + users.email,
    //   "Designation :" + users.designation,
    //   "ProfileImage :" + users.file
    // )
  };

  render() {
    let DisplayData = this.state.users.map((users, index) => {
      return (
        <tr key={index} style={{ textAlign: 'center' }}>
          <td>{users.id}</td>
          <td>{users.employee_name}</td>
          <td>{users.employee_salary}</td>
          <td>{users.employee_age}</td>
          <td>{users.email}</td>
          <td>{users.designation}</td>
          <td>{users.file}</td>

          <td>
            <button
              className="btn btn-danger m-1"
              onClick={() => {
                this.DeleteRow(index, users.employee_name);
              }}
            >
              Delete
            </button>
            <button
              className="btn btn-info m-1"
              onClick={() => this.Update(users)}
            >
              Update
            </button>

            <button
              className="btn btn-info m-1"
              onClick={() => this.Details(users)}
            >
              Details
            </button>
          </td>
        </tr>
      );
    });

    return (
      <div>
        <Addmodel passEmployee={(e) => this.passEmployee(e)} />

        <table className="table table-striped ">
          <thead style={{ textAlign: 'center' }}>
            <tr>
              <th>EmployeeId</th>
              <th>EmployeeName</th>
              <th>EmployeeSalary</th>
              <th>EmployeeAge</th>
              <th>Email ID</th>
              <th>Designation</th>
              <th>ProfileImage</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{DisplayData}</tbody>
        </table>

        <Modal isOpen={this.state.showModel}>
          <ModalBody>
            <RegisterForm data={this.state.selecteduser} />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default App;
