import { createFileRoute } from '@tanstack/react-router'
import ClipborderLandingPage from '../pages/clipboard-landing-page-master/ClipborderLandingPage'

export const Route = createFileRoute('/clipborder-landing-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ClipborderLandingPage />
}
