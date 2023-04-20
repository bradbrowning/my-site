import React from 'react'
import Router from 'next/router'
import ReactMarkdown from 'react-markdown'
import { resource } from '../common/types/Resource'

export type ProjectProps = {
  id: string
  name: string
  description: string
  resources: resource[]
}

const Project: React.FC<{ project: ProjectProps }> = ({ project }) => {
  console.log('project', project)
  return (
    <div>
      <h2>{project.name}</h2>
      <ReactMarkdown children={project.description} />
      {project.resources?.length ? (
        <>
          <strong>Resources used</strong>
          <ul>
            {project.resources.map((resource) => (
              <li key={resource.id}>resource: {resource.name}</li>
            ))}
          </ul>
        </>
      ) : (
        <></>
      )}
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
