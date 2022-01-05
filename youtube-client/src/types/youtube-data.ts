export interface YoutubeData {
  etag: string;
  items: Array<Post>;
  kind: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

export interface Snippet {
  channelTitle: string;
  description: string;
  publishedAt: string;
  title: string;
  thumbnails: {
    default: Thumbnail;
    high: Thumbnail;
    maxres: Thumbnail;
    medium: Thumbnail;
    standard: Thumbnail;
  };
}

export interface Thumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Post {
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
  statistics: Statistic;
}

export interface Statistic {
  commentCount: string;
  dislikeCount: string;
  likeCount: string;
  viewCount: string;
}
