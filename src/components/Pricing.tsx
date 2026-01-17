import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Бесплатно',
    features: ['React компоненты', 'Tailwind CSS', 'Framer Motion', 'MIT лицензия'],
  },
  {
    name: 'Pro',
    price: '$49',
    featured: true,
    features: ['Всё из Starter', '10+ страниц', 'Премиум поддержка', 'Figma файлы'],
  },
  {
    name: 'Enterprise',
    price: 'Договорная',
    features: ['Всё из Pro', 'Кастомизация', 'Приоритетная поддержка', 'Консультации'],
  },
]

export function Pricing() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="font-display text-4xl font-bold text-center mb-16">
          Тарифы
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`glass p-8 rounded-2xl ${plan.featured ? 'ring-2 ring-primary' : ''}`}
            >
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-primary mb-6">{plan.price}</p>
              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-green-500" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-8 py-3 bg-primary hover:bg-primary/90 rounded-xl font-semibold transition-all">
                Выбрать
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
