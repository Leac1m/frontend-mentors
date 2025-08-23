import { createLazyFileRoute } from '@tanstack/react-router'
import Ecommerce from '../pages/ecommerce-product-page/Ecommerce'

export const Route = createLazyFileRoute('/ecommerce-product-page')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Ecommerce />
}
