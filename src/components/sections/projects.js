import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledTableContainer = styled.div`
  margin: 50px -20px;

  @media (max-width: 768px) {
    margin: 50px -10px;
  }

  table {
    width: 100%;
    border-collapse: collapse;

    .hide-on-mobile {
      @media (max-width: 768px) {
        display: none;
      }
    }

    h4 {
      &.title {
        font-family: var(--font-mono);
        color: var(--lightest-slate);
        font-size: var(--fz-md);
        font-weight: 600;
      }
    }

    h5 {
      color: var(--light-slate);
      font-family: var(--font-mono);
      font-size: var(--fz-xs);
      p {
        color: var(--slate);
        font-style: italic;
        padding-top: 1px;
        white-space: nowrap;
      }

      &.code {
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        color: var(--green);
        font-weight: 400;
      }

      &.overline {
        font-family: var(--font-mono);
        font-size: var(--fz-sm);
        color: var(--slate);
        font-weight: 400;
      }
    }

    tbody tr {
      &:hover,
      &:focus {
        background-color: var(--light-navy);
      }
    }

    th,
    td {
      padding: 10px;
      text-align: left;

      &:first-child {
        padding-left: 20px;

        @media (max-width: 768px) {
          padding-left: 10px;
        }
      }
      &:last-child {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
        }
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }

    tr {
      cursor: default;

      td:first-child {
        border-top-left-radius: var(--border-radius);
        border-bottom-left-radius: var(--border-radius);
      }
      td:last-child {
        border-top-right-radius: var(--border-radius);
        border-bottom-right-radius: var(--border-radius);
      }
    }

    td {
      &.year {
        padding-right: 20px;

        @media (max-width: 768px) {
          padding-right: 10px;
          font-size: var(--fz-sm);
        }
      }

      &.title {
        padding-top: 15px;
        padding-right: 20px;
        color: var(--lightest-slate);
        font-size: var(--fz-xl);
        font-weight: 600;
        line-height: 1.25;
      }

      &.authors {
        font-size: var(--fz-xxs);
        font-family: var(--font-mono);
        line-height: 1.5;
        .separator {
          margin: 0 5px;
        }
        span {
          display: inline-block;
        }
      }

      &.links {
        min-width: 100px;

        div {
          display: flex;
          align-items: center;

          a {
            ${({ theme }) => theme.mixins.flexCenter};
            flex-shrink: 0;
          }

          a + a {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  h3 {
    font-family: var(--font-mono);
    padding: 20px;
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-lg);
    &:after {
      bottom: 0.1em;
    }
  }
`;

const Projects = () => {
  const data = useStaticQuery(graphql`
    query {
      projects: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/projects/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            frontmatter {
              date
              title
              external
              company
              tech
              venue
            }
            html
          }
        }
      }
    }
  `);

  const revealTitle = useRef(null);
  const revealTable = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealTitle.current, srConfig());
    sr.reveal(revealTable.current, srConfig(200, 0));
    sr.reveal(revealArchiveLink.current, srConfig());
    revealProjects.current.forEach((ref, i) => sr.reveal(ref, srConfig(i * 100)));
  }, []);

  const GRID_LIMIT = 6;
  const projects = data.projects.edges.filter(({ node }) => node);

  return (
    <StyledProjectsSection id="projects">
      <h2 className="numbered-heading" ref={revealTitle}>
        Stuff I've done
      </h2>

      <h3>Research, Teaching and Hackathons</h3>
      <Link className="inline-link archive-link" to="/archive" ref={revealArchiveLink}>
        View the entire list
      </Link>

      <StyledTableContainer ref={revealTable}>
        <table>
          <tbody>
            {projects
              .filter(({ node }) => node.frontmatter.venue !== 'Teaching')
              .slice(0, GRID_LIMIT)
              .map(({ node }, i) => {
                const { date, external, title, company, tech } = node.frontmatter;
                return (
                  <tr key={i} ref={el => (revealProjects.current[i] = el)}>
                    <a href={external} aria-label="External Link">
                      <td>
                        <h5 className="code">{`${new Date(date).getFullYear()}`}</h5>
                      </td>
                      <td>
                        <h4 className="title">{title}</h4>
                        <h5>
                          {tech ? <span>{tech}</span> : <span></span>}
                          <p>{company ? <span>{company}</span> : <span></span>}</p>
                        </h5>
                      </td>
                    </a>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </StyledTableContainer>
    </StyledProjectsSection>
  );
};

export default Projects;
