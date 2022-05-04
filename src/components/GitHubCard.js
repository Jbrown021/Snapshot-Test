import React from "react"
import Card from "react-bootstrap/Card"
import MyProfilePic from './91687401.png'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={MyProfilePic} />
        <Card.Body>
            <Card.Title>Jbrown021</Card.Title>
            <Card.Text>
            I am a new program dev who is learning the ins and outs of programming and coding. I am working to ready myself for whichever path this road leads me.
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard