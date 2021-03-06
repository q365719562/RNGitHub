import React from 'react';
import {Image,TouchableOpacity} from 'react-native';

export default class ViewUtil{
    static getLeftButton(callBack){
        return (
        <TouchableOpacity 
            style={{padding:8}}
            onPress={callBack}>
            <Image
                style={{width:26,height:26,tintColor:'white'}}
                source={require('../../res/images/to_left.png')}
            />
        </TouchableOpacity>)
    }
}