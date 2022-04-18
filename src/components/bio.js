/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author {
            description
            name
            siteUrl
            social {
              linkedin
            }
            summary
          }
          author2 {
            description
            name
            siteUrl
            social {
              linkedin
            }
            summary
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author_babacan = data.site.siteMetadata?.author
  const author_aydin = data.site.siteMetadata?.author2
  // const social = data.site.siteMetadata?.author2

  return (
    <div className="bio">
      <h2>Yazarlar</h2>
      {author_babacan?.name && author_aydin?.name && (
        <div className="bios">
          <div className="yazar">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile-pic.png"
              width={50}
              height={50}
              quality={95}
              alt="Profile picture"
            />
            <div class="bio-infos">
              <span className="yazar-adi">{author_babacan.name}</span>
              <p>
                {author_babacan?.summary || null}
                {` `}
                <a
                  href={`https://linkedin.com/in/${
                    author_babacan.social?.linkedin || ``
                  }`}
                >
                  Mehmet Semih BABACAN
                </a>
              </p>
            </div>
          </div>

          <div className="yazar">
            <StaticImage
              className="bio-avatar"
              layout="fixed"
              formats={["auto", "webp", "avif"]}
              src="../images/profile-pic.png"
              width={50}
              height={50}
              quality={95}
              alt="Profile picture"
            />
            <div className="bio-infos">
              <span className="yazar-adi">{author_aydin.name}</span>
              <p>
                {author_aydin?.summary || null}
                {` `}
                <a
                  href={`https://linkedin.com/in/${
                    author_aydin.social?.linkedin || ``
                  }`}
                >
                  Semih AYDIN
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Bio
