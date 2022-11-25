import { StyleSheet, View } from "react-native"

const PageContainer = props => {
    return <View style={{ ...styles.container, ...props.style }}>
        {props.children}
    </View>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})

export default PageContainer;