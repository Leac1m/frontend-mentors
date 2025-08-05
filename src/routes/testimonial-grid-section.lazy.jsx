import { createLazyFileRoute } from '@tanstack/react-router'
import TestimonialGridSection from '../pages/testimonials-grid-section-main/TestimonialGridSection'

export const Route = createLazyFileRoute('/testimonial-grid-section')({
  component: RouteComponent,
})

function RouteComponent() {
  return <TestimonialGridSection />
}
