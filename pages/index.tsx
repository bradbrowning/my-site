import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import Project, { ProjectProps } from '../components/Post'
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const projects = await prisma.project.findMany()
  const allProjects = JSON.parse(JSON.stringify(projects))
  return {
    props: { projects: allProjects },
    revalidate: 10,
  }
}

type Props = {
  projects: ProjectProps[]
}

const Blog: React.FC<Props> = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className="page">
        <h1>Projects</h1>
        <main>
          {props.projects.map((project) => (
            <div key={project.id} className="post">
              <Project project={project} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Blog
