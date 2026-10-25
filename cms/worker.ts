import { createCms } from '@joebailey26/static-wordpress/worker'
import type { SiteConfigInput } from '@joebailey26/static-wordpress/config'
import config from './cms.config.json'

export default createCms(config satisfies SiteConfigInput)
