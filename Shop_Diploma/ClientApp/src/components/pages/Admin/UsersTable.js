import React, { Component } from 'react';
import { Table } from 'react-bootstrap'
import { getUsers } from '../../../actions/users';
import { connect } from "react-redux";
import PropTypes from "prop-types";

class UsersTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0
        };
    }
    componentDidMount = () => {
        this.props.getUsers()
            .then(
                () => { },
                (err) => { console.log("Error get data ", err); }
            )
    }
    createTable(data) {
        return (
            <div></div>
        );
    }
    render() {
        let { users } = this.props;
        users.forEach(element => {
            console.log(element);
        });
        return (
            <Table striped bordered condensed hover id='usersTable'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Phone Number</th>
                    <th>Region</th>
                    <th>City</th>
                    <th>Number Delivery</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                       
                    </td>
                </tr>
            </tbody>
        </Table>
        )
    }
}
UsersTable.propTypes = {
    users: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired
};
const mapStateToProps = (state) => {
    return {
        users: state.users.users
    };
}
export default connect(mapStateToProps, { getUsers })(UsersTable);