import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'

export type ProjectProps = {
  id: string
  name: string
  description: string
}

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  return (
    <div>
      <h2>{project.name}</h2>
      <ReactMarkdown children={project.description} />
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  )
}

export default Project
