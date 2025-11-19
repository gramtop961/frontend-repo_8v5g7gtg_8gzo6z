import { Bot, Brain, Workflow, Database } from 'lucide-react'

const services = [
  {
    icon: Brain,
    title: 'AI Strategy & Roadmap',
    desc: 'Identify high-ROI use cases, define KPIs, and align AI initiatives with business goals.'
  },
  {
    icon: Workflow,
    title: 'Automation & Copilots',
    desc: 'Design assistants that streamline workflows: intake triage, research copilots, and agentic automations.'
  },
  {
    icon: Database,
    title: 'RAG & Knowledge Systems',
    desc: 'Build retrieval systems over your docs and data with robust evaluation and guardrails.'
  },
  {
    icon: Bot,
    title: 'Model Integration',
    desc: 'Ship with OpenAI, Anthropic, local LLMs or vision—instrumented and cost-aware.'
  }
]

function Services() {
  return (
    <section id="services" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Where I help the most</h2>
          <p className="mt-3 text-blue-200/80 max-w-2xl mx-auto">From ideation to launch, I partner with your team to deliver outcomes, not just prototypes.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:border-blue-400/30 transition">
              <Icon className="h-8 w-8 text-blue-400" />
              <h3 className="mt-4 text-white font-semibold">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
