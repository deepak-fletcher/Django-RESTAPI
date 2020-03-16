import React, {Component} from 'react'
import axios from '../../axios'
import {Alert, Button} from 'reactstrap'

export default class users extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            Users: []
        };
    }
    getUsersData() {
        axios
            .get(`/users`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                const users = data.map(u =>
                    
                    <Alert color='primary' >
                    <Alert color='secondary'>{u.name}</Alert>
                    <Alert color='secondary'>{u.email}</Alert>
                    <Alert color='secondary'>{u.phone}</Alert>
                    <Alert color='secondary'>{u.feedback}</Alert>
                    </Alert>
                    )

                    this.setState({
                        users
                    })

            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }
    render() {

        return (
            <div>
                {this.state.users}
            </div>
        )
    }
}