import { createLazyFileRoute } from '@tanstack/react-router'
import ProductCard from '../pages/product-preview-card/ProductCard'

export const Route = createLazyFileRoute('/product-preview-card')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ProductCard />
}
