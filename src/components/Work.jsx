import { BadgeCheck, LineChart, Building2 } from 'lucide-react'

const items = [
  {
    company: 'Fintech Scaleup',
    impact: '+22% sales productivity',
    summary: 'Deployed a GPT-4 powered sales copilot integrated with CRM and email, with guardrails and analytics.'
  },
  {
    company: 'Healthcare Provider',
    impact: '60% faster intake',
    summary: 'Built an intake triage and summarization workflow with PHI-safe processing and audit logs.'
  },
  {
    company: 'SaaS B2B',
    impact: 'NPS +14',
    summary: 'Launched a retrieval-augmented support assistant across help center and product docs; reduced resolution time.'
  }
]

function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Selected work</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">A few snapshots of outcomes Ive delivered recently.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.company} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center gap-2 text-blue-300">
                <Building2 className="h-4 w-4" />
                <span className="text-sm">{item.company}</span>
              </div>
              <h3 className="mt-2 text-white font-semibold text-lg flex items-center gap-2">
                <BadgeCheck className="h-5 w-5 text-blue-400" /> {item.impact}
              </h3>
              <p className="mt-2 text-blue-200/80 text-sm">{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
