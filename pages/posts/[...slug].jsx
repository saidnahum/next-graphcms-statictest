import Link from 'next/link';
import client from '../../apolloClient'
import { gql } from '@apollo/client';

export default function SinglePostPage({post}){
  console.log(post)
  return(
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <img src={post.coverImage.url}/>
      

      <Link href='/'>Home</Link>
    </div>
  )
}

export async function getStaticPaths(){
  const {data} = await client.query({
    query: gql`
      query {
        posts {
          slug
        }
      }
    `
  })

  const {posts} = data;

  const paths = posts.map( post =>({
    params: {slug: [post.slug]}
  }))
  console.log(paths)
  return {paths, fallback: false};
}

export async function getStaticProps({params}){
  const slug = params.slug[0];
  
  const {data} = await client.query({
    query: gql`
      query PostBySlug($slug: String!){
        posts (where: { slug:  $slug }) {
          id
          title
          slug
          description
          content {
            raw
          }
          coverImage {
            url
          }
        }
      }
    `,
    variables: {slug}
  })

  const {posts} = data;
  const post = posts[0];

  console.log(post);

  return { props: {post} }
}