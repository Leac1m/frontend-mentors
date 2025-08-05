import { createLazyFileRoute } from '@tanstack/react-router'
import BlogCardPage from '../pages/blog-preview-card/BlogCardPage'

export const Route = createLazyFileRoute('/blog-preview-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <BlogCardPage />
}
