import http from 'http'
import { CorsOptions } from '@geckos.io/common/lib/typings'

const SetCORS = (req: http.IncomingMessage, res: http.ServerResponse, cors: CorsOptions) => {
  const { origin } = cors

  if (typeof origin === 'function') {
    res.setHeader('Access-Control-Allow-Origin', origin(req))
  } else {
    res.setHeader('Access-Control-Allow-Origin', origin)
  }

  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Request-Headers', 'X-Requested-With, accept, content-type')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST')
  res.setHeader('Access-Control-Allow-Headers', 'content-type')
}

export default SetCORS
