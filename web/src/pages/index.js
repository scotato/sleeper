import React, { lazy, Suspense } from 'react'
import { importMDX } from 'mdx.macro'

import { Loading } from 'extension/src/components/Icon'
import Page from '../components/Page'

const AboutMarkdown = lazy(() => importMDX('./About.mdx'))
const PrivacyMarkdown = lazy(() => importMDX('./Privacy.mdx'))

const LazyLoad = props => (
  <Page>
    <Suspense fallback={<Loading />}>
      {props.children}
    </Suspense>
  </Page>
)

export const About = () => (
  <LazyLoad>
    <AboutMarkdown />
  </LazyLoad>
)

export const Privacy = () => (
  <LazyLoad>
    <PrivacyMarkdown />
  </LazyLoad>
)

