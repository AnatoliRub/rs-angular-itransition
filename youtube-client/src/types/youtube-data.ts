export interface YoutubeData<T> {
  etag: string;
  items: Array<T>;
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  nextPageToken: string;
  regionCode: string;
}

export interface Post<N> {
  kind: string;
  etag: string;
  id: N;
  snippet: Snippet;
  statistics: Statistic;
}

export interface Id {
  kind: string;
  videoId: string;
}

export interface Snippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    medium: Thumbnail;
    standard: Thumbnail;
    maxres: Thumbnail;
  };
  title: string;
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Statistic {
  commentCount: string;
  dislikeCount: string;
  likeCount: string;
  viewCount: string;
}
