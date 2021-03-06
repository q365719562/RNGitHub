import {Component} from 'react'
import {StyleSheet,View, Text} from 'react-native'
import React from "react";
import Girl from "./Girl"
import FocusTest from "./FocusTest";
import MenuDialog from "./activity/MenuDialog";
export default class Boy extends Component {
    state = {
        word:''
    };

    constructor(props) {
        super(props);
    }

    navigatorButton(){
        return <Text style={styles.text}
                     onPress={()=>{
                         //页面跳转的标志
                         this.props.navigator.push({
                             component:Girl,//需要跳转到的页面,注意要导入组件
                             params:{
                                 word:'一枝玫瑰',//传递的数据
                                 //回调方法回传的数据,名字随便
                                 onCallBack:(word)=>{
                                     this.setState({
                                         word:word,
                                     })
                                 },
                             }
                         })
                     }}>送女孩一支玫瑰</Text>
    }

    navigationButton(){
        return <Text style={styles.text}
              onPress={()=>{
                  //页面跳转的标志
                  this.props.navigation.navigate("Girl",{word:'两枝玫瑰'});
              }}>送女孩一支玫瑰</Text>
    }

    render(){
        return(
          <View style={styles.tabContainer}>
              <Text style={styles.text}>I am boy</Text>
              {/*{this.navigatorButton()}*/}
              {this.navigationButton()}
              <Text style={styles.text}>{this.state.word}</Text>
              <FocusTest/>
              <Text onPress={()=>this.dialog.show()}>弹窗出来!</Text>
              <MenuDialog ref={dialog=>this.dialog = dialog}/>
          </View>
        );
    }
}


const styles = StyleSheet.create({
    tabContainer:{
        height:100,
        backgroundColor:'red'
    },
    text:{
        fontSize:20,
    }
});