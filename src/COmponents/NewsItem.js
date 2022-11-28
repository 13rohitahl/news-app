import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
        <Col md={4}>
          <Card className="newsCard">
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Subtitle className="text-muted mt-3">By {author} : {new Date(date).toGMTString()}</Card.Subtitle>
              <Card.Text>{description}...</Card.Text>
              <Button href={newsUrl} variant="dark" className="btn-sm">Read More</Button>
            </Card.Body>
          </Card>
        </Col>
    );
  }
}

export default NewsItem;
