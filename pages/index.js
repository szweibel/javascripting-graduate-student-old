import fs from 'fs'
import path from 'path'
import React, { useEffect, useState } from 'react'
import ConvertMarkdown from '../components/ConvertMarkdown'
import matter from 'gray-matter'
import yaml from '../config.yml'
import Image from 'next/image'
import logo from '../public/images/logo.png';
import dynamic from 'next/dynamic'
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import TocIcon from '@mui/icons-material/Toc';

const Workshop = dynamic(
  () => import('../components/Workshop'),
  { loading: function loading() { return <p>...</p> } }
)

export default function Home({ workshop }) {

  const content = workshop.content;

  // convert markdown to html and split into pages
  const htmlContent = function (content) {
    const htmlifiedContent = ConvertMarkdown(content);
    // split react element array into pages
    const allPages = [];
    const pages = htmlifiedContent.props.children.reduce((acc, curr) => {
      // allPages = [[h1, h2, h2][h1, h2]]
      if (typeof curr === 'string') {
        return acc;
      } else if (curr.type === 'h1') {
        allPages.push([curr]);
      } else if (curr.type === 'h2') {
        allPages[allPages.length - 1].push(curr);
      }
      return acc;
    }, []);
    return (
      allPages);
  }

  const [pages, setPages] = useState(htmlContent(content));

  let whichChapter = 0;
  const tableOfContents = pages.map((page, index) => {
    let subPages = 0;
    return (
      page.map((item, index) => {
        if (subPages > 4) {
          return null;
        }
        if (item.type === 'h1') {
          whichChapter++;
          return (
            <Typography key={index} variant="h4" style={{ margin: '0.5rem 0' }}>
              <a href={`workshop/${workshop.slug}/?page=${whichChapter}`}>{whichChapter}. {item.props.children}</a>
            </Typography>
          )
        } else if (item.type === 'h2') {
          subPages++;
          if (subPages > 4) {
            return (
              '...'
            )
          } else {
            // if not last item 
            if (index !== page.length - 1) {
              return (
                <span>{item.props.children} / </span>
              )
            } else {
              return (
                <span>{item.props.children}</span>
              )
            }
          }
        }
      })
    )
  })
  return (
    <Container
      disableGutters={true}
      maxWidth="xl"
    >
      <div className='frontpage card-page'>
        <div>
          <div className='frontpage-top'>
            <Image
              src={'/images/logo.png'}
              alt={yaml.organization + ' logo'}
              width={300}
              height={300}
              className='frontpage-logo' />
            <h2 className='title'>{yaml.event}</h2>
          </div>
          <Typography
          >
            <h2 className='lineUp'>{yaml.motto || 'Further Expanding Digital Humanities Communities of Practice'}</h2>
            <div
              style={{
                margin: '10px',
              }}
              className='rectangle'></div>
            <p
              style={{
                margin: '30px',
              }}
              className='intro-text'>{yaml.intro}</p>
          </Typography>
        </div>
        <div className='sectionTitle'><TocIcon /> Table of Contents</div>
        <div className='workshops'>
          <ul>
            {tableOfContents}
          </ul>
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  // Get files from the workshops dir
  const getFilesandProcess = (dir) => {

    const dirents = fs.readdirSync(path.join(dir), { withFileTypes: true })
    const dirFiles = dirents
      .filter((file) => file.isFile())
      .map((file) => file.name);
    // Get slug and frontmatter from workshop
    const markdownFiles = dirFiles.map((filename) => {
      // Create slug
      const slug = filename.replace('.md', '')

      // Get frontmatter
      const markdownWithMeta = fs.readFileSync(
        path.join(dir, filename),
        'utf-8',
      )

      const matterResult = matter(markdownWithMeta)
      const content = matterResult.content
      return {
        slug,
        content: content,
        ...matterResult.data,
      }

    })
    return markdownFiles
  }
  const workshopFiles = getFilesandProcess('workshop')


  return {
    props: {
      workshop: workshopFiles[0],
    },
  }
}
