import React,{Component} from 'react';
//类型检查的包
import PropTypes from 'prop-types'
import {View, Platform,StatusBar,StyleSheet,Text} from "react-native";

const NAV_BAR_HEIGHT_ANDROID = 50;//安卓高度
const NAV_BAR_HEIGHT_IOS = 44;//IOS高度
const STSTUS_BAR_HEIGHT = 20;//状态栏高度
const StatusBarShape={//状态栏
    backgroundColor:PropTypes.string,
    barStyle:PropTypes.oneOf(['default','light-content','dark-content']),
    hidden:PropTypes.bool,
};
/**
 * 顶部导航栏组件
 */
export default class NavigationBar extends Component {

    //定义属性类型
    static propTypes = {
        title: PropTypes.string,//记得导包
        titleView: PropTypes.element,//作为元素传进来
        hide: PropTypes.bool,//这里好神奇,bool类型是这么写的
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar:PropTypes.shape(StatusBarShape),//状态栏形状约束
    };

    //默认值 
    static defaultProps={
        statusBar:{
            hidden:false,
            barStyle:'light-content',
            backgroundColor:'#2196F3',
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',//默认标题
            hide: false,//默认不隐藏
        }
    }

    render() {
        let status = <View style={styles.statusBar}>
            <StatusBar {...this.props.statusBar}/>
        </View>;
        //给传进来的title设置优先级 如果titleView不为空
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title}>{this.props.title}</Text>;
        let content = <View style={styles.navBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>;

        return (
            //这里表示的意思是允许使用用户外部传来的样式
        <View style={[styles.tabContainer,this.props.style]}>
            {status}
            {content}
        </View>);
    }
}


const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: '#2196F3',
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'iso' ? NAV_BAR_HEIGHT_ANDROID : NAV_BAR_HEIGHT_IOS,
        flexDirection:'row',
        paddingLeft: 10,
        paddingRight: 10,
    },
    //绝对位置显示titleBar的位置居中
    titleViewContainer:{
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        left:40,
        right:40,
        top:0,
        bottom:0,
    },
    title:{
        fontSize:20,
        color:'white',
    },
    statusBar:{
        height:Platform.OS==='ios'?STSTUS_BAR_HEIGHT:0,
    },
});