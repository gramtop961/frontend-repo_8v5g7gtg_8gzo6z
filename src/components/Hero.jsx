import Spline from '@splinetool/react-spline'
import { ArrowRight, Sparkles } from 'lucide-react'

function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] lg:min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[540px] w-[540px] rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6 pt-20 md:pt-28 lg:pt-32 grid lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-white/5 px-3 py-1 text-blue-200/90 backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span className="text-xs">AI Consultant • Portfolio</span>
            </div>
            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Make AI work for your business
            </h1>
            <p className="mt-4 text-blue-200/90 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              I help teams design, build, and deploy AI solutions that actually ship—automation, copilots, RAG, and analytics that deliver measurable ROI.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-white font-medium shadow-lg shadow-blue-500/20 hover:bg-blue-600 transition">
                Book a discovery call
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#work" className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-white/90 hover:bg-white/5 transition">
                View case studies
              </a>
            </div>
          </div>

          {/* 3D Spline scene */}
          <div className="relative h-[320px] sm:h-[420px] md:h-[520px] lg:h-[640px] w-full">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              {/* Soft gradient overlay for contrast; pointer-events none so 3D remains interactive */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
