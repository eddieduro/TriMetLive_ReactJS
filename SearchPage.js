
'use strict';

import React, {
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableHighlight,
	ActivityIndicatorIOS,
	Image,
	Component,
} from 'react-native';

class SearchPage extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Search nearest Street Car stops
				</Text>
				<Text style={styles.description}>
					Search by zip-code, address, or near your location
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	description: {
		marginBottom: 20,
		fontSize: 18,
		textAlign: 'center',
		color: '#656565',
	},
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center',
	},
});

module.exports = SearchPage;
