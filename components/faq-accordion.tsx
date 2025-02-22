"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How long does it take to see results?</AccordionTrigger>
        <AccordionContent>
          Results vary depending on your current audience and content strategy. However, most clients see significant
          growth within 3-6 months of consistent implementation of our strategies.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do you handle equipment setup for podcasts?</AccordionTrigger>
        <AccordionContent>
          Yes, we provide guidance on equipment selection and can assist with setup to ensure optimal audio quality for
          your podcast recordings.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can you help with content ideation?</AccordionTrigger>
        <AccordionContent>
          Our team of content strategists will work with you to develop engaging topics that resonate with your target
          audience and align with your brand message.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How often should I be posting content?</AccordionTrigger>
        <AccordionContent>
          The ideal posting frequency depends on your audience and platform. Generally, we recommend at least weekly
          content for podcasts and 2-3 times per week for YouTube to maintain engagement.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Do you offer custom packages?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer custom packages tailored to your specific needs and goals. Please contact us for a personalized
          consultation and quote.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

