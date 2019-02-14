/**
 * Created by japjohal on 2019-02-08.
 */
import React, { Component } from 'react';
import {  AsyncStorage, View, Switch, Alert} from 'react-native';
import { Text , Button} from 'react-native-elements';
import { connect } from 'react-redux';
import {  setUserToLoggedOut, userWillUseFaceID, userWillNotUseFaceID } from '../actions/postActions';
import TouchID from 'react-native-touch-id';

class Settings extends Component {
    constructor(props){
        super(props);
        this.state={
            phoneHasBioMetrics:true
        };
        this.logOut = this.logOut.bind(this);
        this.turnOnBioMetricLogIn = this.turnOnBioMetricLogIn.bind(this);
    }

    logOut(){
        // logs out user
        AsyncStorage.removeItem("Status")
            .then(resp => this.props.setUserToLoggedOut())
    }


    turnOnBioMetricLogIn = async() =>{
        this.changeBioMetricStatus()
            .catch((err) => Alert.alert(err))

    };
    componentWillMount() {
        this.checkBioMetrics()
            .catch((err)=>{
                this.setState({
                    phoneHasBioMetrics:false
                })
            })
    }

    checkBioMetrics = async() =>{
        TouchID.isSupported()
            .then((resp) =>{
                return {status:1,code:resp}
            })
            .catch((err) =>{
                return{status:0,code:err}
            })
    };

    changeBioMetricStatus = async() =>{
        // we are checking ASYNC if faceID has been enabled if so we turn it off if not we leave it on
        let status = await AsyncStorage.getItem("faceId");
        console.log(status)
        if(status == "true"){
            this.props.userWillNotUseFaceID();
            await AsyncStorage.removeItem("faceId")
        }
        else{
            try{
                await AsyncStorage.setItem("faceId", "true");
                this.props.userWillUseFaceID();
            }
            catch (error){
                return error;
            }
        }
    };

    render() {
        let swticher;
        if(this.state.phoneHasBioMetrics){
            swticher = <Switch
                onValueChange={this.turnOnBioMetricLogIn}
                value={this.props.faceIdStatus}/>
        }
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'white' }}>
                <Text>Settings!</Text>
                <Text>{this.props.faceIdStatus.toString()}</Text>
                <Button
                    title="Log Out"
                    onPress={this.logOut}
                />
                {swticher}
            </View>
        );
    }
}

const mapStateToProps = state => ({
    // jap: state.posts.items,    // posts come from what you named the reducer in index. items comes from postreducer file
    // newItem: state.posts.item,
    faceIdStatus: state.posts.usingFaceId
})

export default connect(mapStateToProps, {setUserToLoggedOut, userWillUseFaceID, userWillNotUseFaceID})(Settings)