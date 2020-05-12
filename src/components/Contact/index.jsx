import React from "react"
import "./style.scss"

const ContactSection = ({ icon, type, data, linkStyle = "" }) => {
  return (
    <section className="contact-section">
      <i className={icon}></i>
      {/* <p className="label">{type}:</p> */}
      <p className="data">
        <a
          href={linkStyle ? `${linkStyle}:${data}` : data}
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      </p>
    </section>
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
            <span className="no-print">
              <i className="fab fa-linkedin-in"></i>
            </span>
            <span className="print-only">
              <i className="fab fa-linkedin-in"></i> linkedin.com/in/mark-dewey/
            </span>

            {/* <p>/in/mark-dewey</p> */}
          </a>
        </section>
        <section className="github">
          <a
            href="https://github.com/mdewey"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="no-print">
              <i className="fab fa-github no-print"></i>
            </span>
            <span className="print-only">
              <i className="fab fa-github"></i> mdewey
            </span>
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
