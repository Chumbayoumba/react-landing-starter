import { motion } from 'framer-motion'
import { Send } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-8 rounded-2xl"
        >
          <h2 className="font-display text-3xl font-bold mb-6 text-center">
            Связаться с нами
          </h2>
          
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Имя"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <textarea
              placeholder="Сообщение"
              rows={4}
              className="w-full p-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button className="w-full py-4 bg-primary hover:bg-primary/90 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all">
              <Send className="w-5 h-5" />
              Отправить
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
