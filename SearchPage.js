
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
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	searchString: '97209'
	  };
	}

	onSearchTextChanged(event){
		console.log('onSearchTextChanged');
		this.setState({ searchString: event.nativeEvent.text});
		console.log(this.state.searchString);
	}

	render() {
		console.log('SearchPage.render');
		return (
			<View style={styles.container}>
				<Text style={styles.description}>
					Search nearest Street Car stops
				</Text>
				<Text style={styles.description}>
					Search by zip-code, address, or near your location
				</Text>
				<View style={styles.flowRight}>
					<TextInput
						style={styles.searchInput}
						value={this.state.searchString}
						//Whenever the user changes the text, you invoke the function supplied to onChange; in this case, it’s onSearchTextChanged.
						onChange={this.onSearchTextChanged.bind(this)}
						placeholder="Search via street address or zipcode"/>
					<TouchableHighlight style={styles.button}
						underlayColor='#99d9f4'>
						<Text style={styles.buttonText}>Go</Text>
					</TouchableHighlight>
				</View>
				<TouchableHighlight style={styles.button}
					underlayColor='#99d9f4'>
					<Text style={styles.buttonText}>Location</Text>
				</TouchableHighlight>
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
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch',
	},
	buttonText: {
		fontSize: 18,
		color: 'white',
		alignSelf: 'center',
	},
	button: {
		height: 36,
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center',
	},
	searchInput: {
		height: 36,
		padding: 4,
		marginRight: 5,
		flex: 4,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: '#48BBEC',
	},
});

module.exports = SearchPage;
