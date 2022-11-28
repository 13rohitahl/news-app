import React, { Component } from "react";
import NewsItem from "./NewsItem";
import image from "./images/download.png";
import Loader from "./Loader/Loader";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=297fbf0f17b34eb1810d111cefa96ddb&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  componentDidMount() {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=297fbf0f17b34eb1810d111cefa96ddb&page=1&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    // this.setState({
    //   articles: parseData.articles,
    //   totalResults: parseData.totalResults,
    //   loading: false,
    // });
    this.updateNews();
  }

  handlePreviousClick = () => {
    console.log("this is previous btn");
    // let url = `https://newsapi.org/v2/top-headlines?country=${
    //   this.props.country
    // }&category=${
    //   this.props.category
    // }&apiKey=297fbf0f17b34eb1810d111cefa96ddb&page=${
    //   this.state.page - 1
    // }&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    // let data = await fetch(url);
    // let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
    });
    this.updateNews();
  };
  handleNextClick = () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      // let url = `https://newsapi.org/v2/top-headlines?country=${
      //   this.props.country
      // }&category=${
      //   this.props.category
      // }&apiKey=297fbf0f17b34eb1810d111cefa96ddb&page=${
      //   this.state.page + 1
      // }&pageSize=${this.props.pageSize}`;
      // this.setState({ loading: true });
      // let data = await fetch(url);
      // let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
      });
      this.updateNews();
    }
  };
  fetchMoreData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <>
        {this.state.loading && <Loader />}
        <h2 className="text-center my-4">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          News
        </h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={
            this.state.loading && <h4 className="text-center">Loading...</h4>
          }
        >
          <Container>
            <Row className="gy-4">
              {this.state.articles.map((element) => {
                return (
                  <NewsItem
                    key={element.url}
                    title={element.title ? element.title : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 85)
                        : ""
                    }
                    imageUrl={element.urlToImage ? element.urlToImage : image}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                  />
                );
              })}
            </Row>
          </Container>
        </InfiniteScroll>
        {/* <Row className="mt-4">
            <Col md={12}>
              <div className="d-flex justify-content-between">
                <Button
                  disabled={this.state.page <= 1}
                  variant="dark"
                  className="btn-sm"
                  onClick={this.handlePreviousClick}
                >
                  <FontAwesomeIcon icon={faArrowLeft} />
                  Previous
                </Button>
                <Button
                  disabled={
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                  }
                  variant="dark"
                  className="btn-sm"
                  onClick={this.handleNextClick}
                >
                  Next
                  <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              </div>
            </Col>
          </Row> */}
      </>
    );
  }
}

export default News;
