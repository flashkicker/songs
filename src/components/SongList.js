import React, { Component } from "react"
import { connect } from "react-redux"

// importing actionCreator
import { selectSong } from "../actions"

class SongList extends Component {
	renderList() {
		return this.props.songs.map(song => {
			return (
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button
							onClick={() => {
								this.props.selectSong(song)
							}}
							className="ui button primary"
						>
							Select
						</button>
					</div>
					<div className="content">{song.title}</div>
				</div>
			)
		})
	}

	render() {
		return <div className="ui divided list">{this.renderList()}</div>
	}
}

const mapStateToProps = state => {
	return { songs: state.songs }
}

// selectSong is passed into the connect function as an object
// it will then be passed into the props of the SongList component through connect
// all action creators should be used like this
export default connect(
	mapStateToProps,
	{
		selectSong
	}
)(SongList)