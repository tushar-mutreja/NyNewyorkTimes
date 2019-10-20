import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image
} from 'react-native';
import { HEADER_TITLE } from './../Utility/Constant';
import { fetchingData } from './../Actions/NewsAction';
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';


class MostPopularList extends Component {

    static navigationOptions = {
        title: HEADER_TITLE.homeTitle,
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchData();
    }

    onPressItem = (data) =>{
            this.props.navigation.navigate('detail',{data:data});
    }
    renderItem = (info) => {
        return (
            <TouchableOpacity onPress={() => this.onPressItem(info.item)} key={info.index} style={styles.itemContainer}>
                <View style={styles.imageContainer}>
                   <View style={styles.imageRoundedCorner}/>
                </View>
                <View style={styles.itemMiddleContainer}>
                    <Text numberOfLines={2} style={styles.itemTitle}>{info.item.title}</Text>
                    <Text numberOfLines={2} style={styles.itemByTitle}>{info.item.byline}</Text>
                    <View style={styles.itemDateContainer}>
                    <Image style={{height:20,width:20}} resizeMode='center' source={require('./../Resources/Images/appointment.png')}/>
                       <Text style={styles.itemDate}>{info.item.published_date}</Text>
                    </View>
                </View>

                <View style={styles.arrowContainer}>
                  <Image style={{height:20,width:20}} resizeMode='center' source={require('./../Resources/Images/arrow.png')}/>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={styles.container}>
            {this.props.isFetching ?   
                <ActivityIndicator animating={true} size="large" color='black' />
                :
                <FlatList
                    data={this.props.result}
                    renderItem={this.renderItem}
                    style={styles.flatlistConatainer}
                    keyExtractor = { (item, index) => index.toString()}
                />
                }         
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.newsReducer.isFetching,
        result: state.newsReducer.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => {
            dispatch(fetchingData())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MostPopularList);

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flatlistConatainer: {
        height: '100%',
        width: '100%',
    },
    imageContainer: {
        width: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    arrowContainer: {
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemMiddleContainer: {
        flex: 1,
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
    itemDate:{
        color:'grey',
        fontSize:18,
        marginLeft:10
    },
    itemDateContainer:{
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
        marginTop:10
    },
    itemContainer:{
        width: '100%',
        marginTop: 10, 
        flexDirection: 'row' 
    },
    imageRoundedCorner:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'grey'
    }
})