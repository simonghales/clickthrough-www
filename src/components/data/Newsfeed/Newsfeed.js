// @flow
// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import type { Node } from 'react';
import { fetchNewsfeedPosts } from '../../../api/newsfeed';
import type { MappedPostModel } from '../../../models/posts';

type Props = {
  children: ({ items: Array<MappedPostModel>, isLoading: boolean }) => Node,
  uid: string,
};

type State = {
  isLoading: boolean,
  items: Array<MappedPostModel>,
};

class Newsfeed extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: true,
      items: [],
    };
  }

  componentDidMount(): void {
    const { uid } = this.props;
    fetchNewsfeedPosts(uid).then(posts => {
      console.log('posts', posts);
      this.setState({
        isLoading: false,
        items: posts,
      });
    });
  }

  render() {
    const { children } = this.props;
    const { isLoading, items } = this.state;
    return children({
      items,
      isLoading,
    });
  }
}

export default Newsfeed;
