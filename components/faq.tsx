"use client"

import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function FAQ({ faqs }: FAQProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          style={{ WebkitTextFillColor: "transparent" }}>
          Ko'p so'raladigan savollar
        </h2>
        <div ref={ref} className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-black">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-black">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}