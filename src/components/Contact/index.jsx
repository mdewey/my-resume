import React from "react"
import "./style.scss"

const ContactSection = ({ icon, type, data, linkStyle = "" }) => {
  return (
    <p>
      <i className={icon}></i>
      <p>{type}:</p>
      <p>
        <a
          href={linkStyle ? `${linkStyle}:${data}` : data}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      </p>
    </p>
  )
}

const index = () => {
  return (
    <div className="contact-me">
      <section className="social-media">
        <section className="linkedin">
          <a
            href="https://www.linkedin.com/in/mark-dewey/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fab fa-linkedin-in"></i>
            /in/mark-dewey/
          </a>
        </section>
        <section className="github">
          <a
            href="https://github.com/mdewey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="devicon-github-plain"></i>
            mdewey
          </a>
        </section>
      </section>
      <section className="contact-info">
        <ContactSection
          icon="fas fa-envelope"
          type="email"
          data="mark.t.dewey@gmail.com"
          linkStyle="mailto"
        />
        <ContactSection
          icon="fas fa-wifi"
          type="website"
          data="https://www.markdewey.dev"
        />
        <ContactSection
          icon="fas fa-phone"
          type="phone"
          data="814-421-9298"
          linkStyle="tel"
        />
      </section>
    </div>
  )
}

export default index
