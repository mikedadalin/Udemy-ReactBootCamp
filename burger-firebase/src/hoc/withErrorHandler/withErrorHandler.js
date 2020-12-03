import React, { Component } from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Auxiliary/Auxiliary'

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        }
        
        componentWillMount() {
            this.reqInterceptor = axios.interceptors.request.use(req => {
                // reset the error, clean it out
                this.setState({error: null})
                return req
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error})                
            })
        }

        componentWillUnmount() {
            // axios.interceptors.request.eject([xxxx])
            // eject() require a reference to the interceptor
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {/* because error may be bull, so the message will have problem*/}
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} /> 
                </Aux>
            )
        }
    }
}

/*
    Note: 
    The {...this.props} in <WrappedComponent {...this.props} />
    It means passing every props to the WrappedComponent directly

*/


export default withErrorHandler