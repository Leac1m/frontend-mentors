import { createLazyFileRoute } from '@tanstack/react-router'
import FourCardFeatureSection from '../pages/four-card-feature-section-master/FourCardFeatureSection'

export const Route = createLazyFileRoute('/four-card-feature')({
  component: RouteComponent,
})

function RouteComponent() {
  return <FourCardFeatureSection />
}
