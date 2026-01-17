import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            Готовый шаблон лендинга
          </span>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            Создайте
            <span className="text-primary"> потрясающий </span>
            лендинг
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            React + TypeScript + Tailwind CSS + Framer Motion.
            Современный, быстрый, адаптивный.
          </p>
          
          <div className="flex gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold flex items-center gap-2 transition-all">
              Начать бесплатно
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass hover:bg-white/10 rounded-xl font-semibold transition-all">
              Демо
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
