const { jobs } = require("../src/components/Employment/data.json")
const { skills } = require("../src/components/Skills/data.json")

const SITE_URL = "https://resume.markdewey.dev/"

// Tier 1: the volatile content (employment + skills) is pulled straight from
// data.json so it never drifts. The rarely-changing education and contact
// details are maintained here.
const CONTACT = {
  email: "mark.t.dewey@gmail.com",
  linkedin: "https://www.linkedin.com/in/mark-dewey/",
  github: "https://github.com/mdewey",
}

const EDUCATION = {
  degree: "Bachelor of Science, Computer Science",
  school: "University of Pittsburgh at Johnstown",
  dates: "Aug 2007 – May 2011",
  notes: "GPA 3.7 · Presidential Scholar",
}

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

// Format an ISO date ("2026-06-29") as "Jun 2026" without timezone surprises.
function formatDate(iso) {
  if (!iso) return "present"
  const [year, month] = iso.split("-")
  return `${MONTHS[Number(month) - 1]} ${year}`
}

// Build an LLM-friendly Markdown summary of the resume (the /llms.txt file).
function buildLlmsTxt() {
  const current = jobs[0]
  const lines = []

  lines.push(`# Mark Dewey`)
  lines.push(``)
  lines.push(
    `> ${current.position} at ${current.company}. Full-stack software engineer and engineering leader with 15+ years of experience building web applications and providing technical leadership across the VA.gov ecosystem.`
  )
  lines.push(``)
  lines.push(`- Website: ${SITE_URL}`)
  lines.push(`- Email: ${CONTACT.email}`)
  lines.push(`- LinkedIn: ${CONTACT.linkedin}`)
  lines.push(`- GitHub: ${CONTACT.github}`)
  lines.push(``)

  lines.push(`## Experience`)
  lines.push(``)
  for (const job of jobs) {
    const range = `${formatDate(job.startDate)} – ${formatDate(job.endDate)}`
    lines.push(`### ${job.position} — ${job.company} (${range})`)
    if (job.location) lines.push(`Location: ${job.location}`)
    if (job.summary) lines.push(job.summary)
    lines.push(``)
    for (const project of job.projects) {
      // Skip low-signal projects (those hidden in the resume's slim view).
      if (project.canHide) continue
      lines.push(`**${project.name}**`)
      if (project.summary) lines.push(project.summary)
      for (const task of project.responsibilities) {
        lines.push(`- ${task}`)
      }
      lines.push(``)
    }
  }

  lines.push(`## Education`)
  lines.push(``)
  lines.push(
    `- ${EDUCATION.degree} — ${EDUCATION.school} (${EDUCATION.dates}), ${EDUCATION.notes}`
  )
  lines.push(``)

  lines.push(`## Skills`)
  lines.push(``)
  for (const group of skills) {
    const keywords = group.keywords.map(keyword => keyword.trim()).join(", ")
    lines.push(`- **${group.name}**: ${keywords}`)
  }
  lines.push(``)

  return lines.join("\n")
}

module.exports = { buildLlmsTxt }
