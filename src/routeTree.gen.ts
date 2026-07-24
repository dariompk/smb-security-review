/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as SitemapDotxmlRouteImport } from './routes/sitemap[.]xml'
import { Route as ResourcesRouteImport } from './routes/resources'
import { Route as CompareRouteImport } from './routes/compare'
import { Route as AboutRouteImport } from './routes/about'
import { Route as IndexRouteImport } from './routes/index'
import { Route as ReviewsIndexRouteImport } from './routes/reviews.index'
import { Route as ResourcesIndexRouteImport } from './routes/resources.index'
import { Route as ReviewsSlugRouteImport } from './routes/reviews.$slug'
import { Route as ResourcesTop3RouteImport } from './routes/resources.top-3-cybersecurity-tools-2026'
import { Route as ResourcesSlugRouteImport } from './routes/resources.$slug'
const SitemapDotxmlRoute = SitemapDotxmlRouteImport.update({ id: '/sitemap.xml', path: '/sitemap.xml', getParentRoute: () => rootRouteImport } as any)
const ResourcesRoute = ResourcesRouteImport.update({ id: '/resources', path: '/resources', getParentRoute: () => rootRouteImport } as any)
const CompareRoute = CompareRouteImport.update({ id: '/compare', path: '/compare', getParentRoute: () => rootRouteImport } as any)
const AboutRoute = AboutRouteImport.update({ id: '/about', path: '/about', getParentRoute: () => rootRouteImport } as any)
const IndexRoute = IndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => rootRouteImport } as any)
const ReviewsIndexRoute = ReviewsIndexRouteImport.update({ id: '/reviews/', path: '/reviews/', getParentRoute: () => rootRouteImport } as any)
const ResourcesIndexRoute = ResourcesIndexRouteImport.update({ id: '/', path: '/', getParentRoute: () => ResourcesRoute } as any)
const ReviewsSlugRoute = ReviewsSlugRouteImport.update({ id: '/reviews/$slug', path: '/reviews/$slug', getParentRoute: () => rootRouteImport } as any)
const ResourcesTop3Route = ResourcesTop3RouteImport.update({ id: '/top-3-cybersecurity-tools-2026', path: '/top-3-cybersecurity-tools-2026', getParentRoute: () => ResourcesRoute } as any)
const ResourcesSlugRoute = ResourcesSlugRouteImport.update({ id: '/$slug', path: '/$slug', getParentRoute: () => ResourcesRoute } as any)
interface ResourcesRouteChildren { ResourcesSlugRoute: typeof ResourcesSlugRoute; ResourcesTop3Route: typeof ResourcesTop3Route; ResourcesIndexRoute: typeof ResourcesIndexRoute; }
const ResourcesRouteChildren: ResourcesRouteChildren = { ResourcesSlugRoute, ResourcesTop3Route, ResourcesIndexRoute }
const ResourcesRouteWithChildren = ResourcesRoute._addFileChildren(ResourcesRouteChildren)
export const routeTree = rootRouteImport._addFileChildren({ IndexRoute, AboutRoute, CompareRoute, ResourcesRoute: ResourcesRouteWithChildren, SitemapDotxmlRoute, ReviewsSlugRoute, ReviewsIndexRoute })
