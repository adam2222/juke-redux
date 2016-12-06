import React from 'react';
import store from '../store';
import {setLyrics} from '../action-creators/lyrics';


export default class LyricsContainer extends React.Component{
	constructor(props){
		super(props);
		this.state = store.getState();
	}
	componentDidMount() {
		this.unsubscribe = store.subscribe(
			function(){
				this.setState(store.getState());
			});
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return(<h1>Just a container, more to come!</h1>);
	}
}