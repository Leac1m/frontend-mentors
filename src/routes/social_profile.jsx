import { createFileRoute } from '@tanstack/react-router'
import SocialProfilePage from '../pages/social_Profile/SocialProfilePage'

export const Route = createFileRoute('/social_profile')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SocialProfilePage />
}
