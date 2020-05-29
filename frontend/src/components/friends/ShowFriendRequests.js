import React from 'react'
import { Link } from 'react-router-dom'
import { getUserFriends, acceptFriendRequest, rejectFriendRequest } from '../../lib/api'
import { getPayload } from '../../lib/_auth'


class ShowFriendsRequests extends React.Component {

  state = {
    friends: [],
    madeTheRequest: [],
    receivedTheRequest: []
  }

  async componentDidMount() {
    try {
      const userId = getPayload().sub
      const res = await getUserFriends(userId)
      console.log('res', res.data)
      this.setState({ friends: res.data })
    } catch (err) {
      console.log(err)
    }
  }

	handleAccept = async event => {
		console.log('this.state', this.state)
		try {
			const userId = getPayload().sub
			const requestId = event.target.value
			const res = await acceptFriendRequest(userId, requestId)
			console.log('res', res.data)
			
		} catch (err) {
			console.log(err.message)
		}

  }

	handleReject = async event => {
		console.log('this.state', this.state)
		try {
			const userId = getPayload().sub
			const requestId = event.target.value
			const res = await rejectFriendRequest(userId, requestId)
			console.log('res', res.data)
			// window.location.reload()
		} catch (err) {
			console.log(err.message)
		}

	}

	render() {
		
		return (
      <section className="section friends">
      <h1 className="accountable-brand">Friends</h1>
      <Link to="/search"><h3>Add new friends</h3></Link>
      <div className="tabs">
        <Link to="/users/friends" className="accountable-brand shaded">Friends</Link>
        <span className="accountable-brand highlighted">Pending requests</span>
      </div>
      <div className="options">
						{this.state.friends.filter(friend => (
							friend.madeTheRequest === true && friend.accepted === false
						)).map(friend => (
							<div className="option-content">
								<img src={friend.user.image} alt={friend.firstName} className="image"/>
							<p>{friend.firstName} {friend.user.lastName}</p>
							<button 
							onClick={this.handleAccept}
							name='acceptRequest'
							value={friend._id}
					>Accept</button>
							<button onClick={this.handleReject}
							name='rejectRequest'
							value={friend._id}
					>Reject</button>
						</div>
						))}
							{this.state.friends.filter(friend => (
							friend.madeTheRequest === false && friend.accepted === false
						)).map(friend => (
							<div className="option-content">
								<img src={friend.user.image} alt={friend.firstName} className="image"/>
							<p>{friend.firstName} {friend.user.lastName}</p>
							<span 
					>Pending</span>
						</div>
						))}
					</div>
			</section>
		)
	}
}

export default ShowFriendsRequests