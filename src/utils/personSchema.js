import { jobs } from "../components/Employment/data.json"
import { skills } from "../components/Skills/data.json"

const SITE_URL = "https://resume.markdewey.dev/"

// The first job in the list is the current one.
const currentJob = jobs[0]

// Pull the technical skill groups into a flat list of things Mark "knows about".
const TECHNICAL_GROUPS = [
  "Languages",
  "Frameworks & Libraries",
  "Concepts",
  "Databases",
  "Deployment Environments",
]

const knowsAbout = skills
  .filter(group => TECHNICAL_GROUPS.includes(group.name))
  .flatMap(group => group.keywords)
  .map(keyword => keyword.trim())

// Schema.org Person structured data, emitted as JSON-LD for search engines and
// AI crawlers. Derived from the resume data so it never drifts out of sync.
export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Dewey",
  jobTitle: currentJob.position,
  worksFor: {
    "@type": "Organization",
    name: currentJob.company,
    url: currentJob.website,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Pittsburgh at Johnstown",
  },
  email: "mailto:mark.t.dewey@gmail.com",
  url: SITE_URL,
  sameAs: [
    "https://www.linkedin.com/in/mark-dewey/",
    "https://github.com/mdewey",
  ],
  knowsAbout,
}
