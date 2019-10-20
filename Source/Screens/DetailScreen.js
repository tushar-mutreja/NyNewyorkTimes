import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
} from 'react-native';
import { HEADER_TITLE } from './../Utility/Constant';


export default class Detail extends Component {

    static navigationOptions = {
        title: HEADER_TITLE.detail,
    };

    constructor(props) {
        super(props);
    }

render(){
 const {title,byline} = this.props.navigation.state.params.data;
    return(
        <View style={styles.container}>
         <Text style={styles.itemTitle}>{title}</Text>
         <Text style={styles.itemByTitle}>{byline}</Text>
        </View>
    )
}

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    itemTitle:{
        color:'black',
        fontSize:22
    },
    itemByTitle:{
        color:'grey',
        fontSize:18,
        marginTop:10
    },
})