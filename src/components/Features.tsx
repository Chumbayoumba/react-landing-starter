import { motion } from 'framer-motion'
import { Zap, Shield, Palette, Smartphone, Code, Rocket } from 'lucide-react'

const features = [
  { icon: Zap, title: 'Быстрый', desc: 'Vite + оптимизированная сборка' },
  { icon: Shield, title: 'TypeScript', desc: 'Полная типизация из коробки' },
  { icon: Palette, title: 'Tailwind', desc: 'Utility-first стилизация' },
  { icon: Smartphone, title: 'Адаптивный', desc: 'Mobile-first дизайн' },
  { icon: Code, title: 'Чистый код', desc: 'Лучшие практики React' },
  { icon: Rocket, title: 'Production', desc: 'Готов к деплою' },
]

export function Features() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl font-bold text-center mb-16">
          Всё что нужно
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 rounded-2xl hover:bg-white/10 transition-all"
            >
              <feature.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
