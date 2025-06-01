import { gql } from "@apollo/client";
const GET_SUMMARY = gql`
  query GetSummary($newsTopic: String!) {
    getSummary(newsTopic: $newsTopic)
  }
`;
const GET_NEWS_BY_TOPIC = gql`
    query GetNewsByTopic($topic: String!) {
        getNews(topic : $topic){
            source{
              id
              name
            }
            author
            title
            description
            url
            urlToImage
            publishedAt
            content
        }
    }
`
export {GET_NEWS_BY_TOPIC,GET_SUMMARY}