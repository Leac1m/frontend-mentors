import { createFileRoute } from '@tanstack/react-router'
import SocialProfilePage from '../pages/social-Profile/SocialProfilePage'

export const Route = createFileRoute('/social-profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SocialProfilePage />
}
