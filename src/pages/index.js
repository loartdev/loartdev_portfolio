import * as React from 'react';
import Layout from '../components/layout';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Hero from '../components/hero';
import { SEO } from '../components/seo';
import MasonryLayout from '../components/masonry/masonry-layout';
import ArtCarousel from '../components/artworkCarousel';
import GitHubCalendar from 'react-github-calendar';

const IndexPage = () => {
  const imgs = useStaticQuery(graphql`
    {
      allContentfulArtwork(filter: {node_locale: {eq: "es-CO"}}, limit: 14) {
        edges {
          node {
            images {
              gatsbyImageData(formats: AUTO, placeholder: DOMINANT_COLOR, width:700)
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
    if (img.node.images[1] != null) {
      const imm2 = {
        id: img.node.slug,
        src: img.node.images[1].gatsbyImageData,
        user: {
          src: img.node.author.foto.gatsbyImageData,
          name: "Simón López",
          job: ""
        }
      }

      images.push(imm2)
    }
    const imm = {
      id: img.node.slug,
      src: img.node.images[0].gatsbyImageData,
      user: {
        src: img.node.author.foto.gatsbyImageData,
        name: "Simón López",
        job: ""
      }
    }

    images.push(imm)
  })
  console.log(images);
  return (
    <Layout title="Home">
      <Hero />

      <div className="w-full relative p-10 max-h-[500px] overflow-hidden b-shadow">
        <div className=' w-[400vw] -rotate-[25deg] -translate-y-[30%] md:-translate-y-10 lg:-translate-y-40 -translate-x-[35%] md:translate-x-0 scale-[.6] md:scale-[1.4] lg:scale-[1.2] md:w-full'>
          <MasonryLayout dontbreak images={images} />
        </div>
        <div className='absolute w-full h-full top-0 left-0 bg-gradient-to-b from-theme-bg via-transparent to-theme-bg' />
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 grid grid-cols-1'>
          <center>
            <h2 className='text-4xl text-center mb-8'>ARTWORKS</h2>

            <Link to="/gallery"><a
              className="bg-transparent hover:bg-theme-accent text-theme-accent hover:text-zinc-800 rounded shadow hover:shadow-lg py-2 px-4 border border-theme-accent hover:border-transparent">
              Explore Now</a></Link>
          </center>
        </div>
      </div>
      <h2 className='w-full text-center text-3xl mt-10'>GITHUB</h2>
      <div className='flex justify-center w-full p-8'>
        <GitHubCalendar
          username='simonlopezjara'
          blockRadius="10"
          hideTotalCount={true}
          theme={{
            level0: '#1a1a1a',
            level1: '#301a47',
            level2: '#5f348a',
            level3: '#8b4dc9',
            level4: '#b061ff'
          }}
        />
      </div>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
  <SEO />
)