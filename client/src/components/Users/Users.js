import React, { Component } from 'react';
import Header from '../../shared/Header';
import ProfileWizard from '../../components/Users/ProfileWizard/ProfileWizard';
import { Progress, Button } from 'reactstrap';

class Users extends Component {
    state = {
        totalSteps: 3,
        currentStep: 1
    }

    nextStep = () => {
        this.setState({
            currentStep: this.state.currentStep + 1
        });
    }

    previousStep = () => {
        this.setState({
            currentStep: this.state.currentStep - 1
        });
    }

    render() {
        return (
            <>
                <Header profile='user' ></Header>
                <div class="container">
                    <Progress value={(100/this.state.totalSteps * this.state.currentStep )}>{this.state.currentStep}/4</Progress>
                    <ProfileWizard currentStep={this.state.currentStep} nextStep={this.nextStep}/>
                    { this.state.currentStep !== 1 ?
                        <Button color="primary" active onClick={this.previousStep}>Previous Step</Button>:''}
                    {' '}
                    {this.state.currentStep !== 4 ?
                        <Button color="primary" active onClick={this.nextStep}>Next Step</Button>: ''}
                </div>
            </>
        );
    }
}

export default Users;