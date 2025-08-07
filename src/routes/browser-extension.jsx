import { createFileRoute } from '@tanstack/react-router'
import BrowseExtension from '../pages/browser-extensions-manager/BrowseExtension'

export const Route = createFileRoute('/browser-extension')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BrowseExtension />
}
