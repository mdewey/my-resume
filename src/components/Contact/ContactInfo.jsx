import React from "react"
import "./style.scss"

import { useShowAll } from "../../context/ShowAllContext"

const ContactSection = ({ icon, data, linkStyle = "" }) => {
  return (
    <section className="contact-section">
      <i className={icon}></i>
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

const ContactInfo = () => {
  const { showAll } = useShowAll()
  return (
    <div className="contact-me">
      <section className="social-media">
        {showAll && (
          <>
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
                  <i className="fab fa-linkedin-in"></i>{" "}
                  linkedin.com/in/mark-dewey/
                </span>
              </a>
            </section>
            <section className="github">
              <a
                href="https://github.com/mdewey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="no-print">
                  <i className="fab fa-github no-print"></i>{" "}
                </span>
                <span className="print-only">
                  <i className="fab fa-github"></i> mdewey
                </span>
              </a>
            </section>
          </>
        )}
      </section>
      <section className="contact-info">
        {!showAll && (
          <ContactSection
            icon="fab fa-github"
            data="https://www.linkedin.com/in/mark-dewey/"
          />
        )}
        {!showAll && (
          <ContactSection
            icon="fab fa-linkedin-in"
            data="https://github.com/mdewey"
          />
        )}

        <ContactSection
          icon="fas fa-envelope"
          data="mark.t.dewey@gmail.com"
          linkStyle="mailto"
        />
        {/* <ContactSection icon="fas fa-wifi" data="https://www.markdewey.dev" /> */}
        <ContactSection
          icon="fas fa-phone"
          data="814-421-9298"
          linkStyle="tel"
        />
      </section>
    </div>
  )
}

export default ContactInfo
