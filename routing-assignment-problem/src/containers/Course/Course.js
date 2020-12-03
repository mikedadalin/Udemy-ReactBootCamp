import React, { Component } from 'react';
import queryString from 'query-string'

class Course extends Component {

    state = {
        id: null,
        title: null
    }

    componentDidMount() {
        console.log(this.props, "componentDidMount")
        this.loadData()
    }

    componentDidUpdate() {
        console.log(this.props, "componentDidUpdate")
        this.loadData()
    }

    loadData() {
        
        // method 1: using queryString
        // const values = queryString.parse(this.props.location.search)
        // if(values.id) {
        //     if(!this.state.id || (values.id != this.state.id) && (this.state.id)) {
        //         this.setState({id: values.id, title: values.title})
        //         //console.log('values',values)

        //     }
        // }

        // method 2: using URLSearchParsms and .entries()
        if (this.props.match.params.courseid) {
            if (!this.state.id || (this.props.match.params.courseid != this.state.id) && (this.state.id)) {
                const query = new URLSearchParams(this.props.location.search)
                for (let param of query.entries()) {
                    this.setState({ title: param[1], id: this.props.match.params.courseid })
                }
            }
        }
    }


    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID:{this.state.id}</p>
            </div>
        );
    }
}

export default Course;