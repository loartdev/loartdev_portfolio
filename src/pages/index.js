import * as React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Hero from '../components/hero';
import MasonryLayout from '../components/masonry/masonry-layout';

const IndexPage = () => {
  const imgs = useStaticQuery(graphql`
    {
      allContentfulArtwork(filter: {node_locale: {eq: "es-CO"}}, limit: 8) {
        edges {
          node {
            images {
              gatsbyImageData(formats: AUTO, placeholder: DOMINANT_COLOR)
            }
            slug
            title
            author {
              foto {
                gatsbyImageData(formats: AUTO, placeholder: TRACED_SVG, width: 100)
              }
            }
          }
        }
      }
    }
  `)

  const images = []
  imgs.allContentfulArtwork.edges.forEach(function (img) {
    const imm = {
      id: img.node.slug,
      src: img.node.images[0].gatsbyImageData,
      user: {
        src: img.node.author.foto.gatsbyImageData,
        name: "Simón López",
        job: "LoArt & Dev"
      }
    }

    images.push(imm)
  })
  console.log(images);
  return (
    <Layout title="Home">
      <Hero />

      <div className="w-full relative p-10 md:max-h-[500px] overflow-hidden b-shadow ">
        <MasonryLayout images={images} />

        <div className='absolute flex b-shadow h-full top-0 left-0 w-full'>
          <a href="#"
            class="mx-auto bg-transparent my-auto  hover:bg-theme-accent text-theme-accent hover:text-zinc-800 rounded shadow hover:shadow-lg py-2 px-4 border border-theme-accent hover:border-transparent">
            Explore Now</a>

        </div>
      </div>
    </Layout>
  )
}

export default IndexPage