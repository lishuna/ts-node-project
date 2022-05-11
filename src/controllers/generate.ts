import { schemaToCode } from '../models/generate'
import { Request, Response } from 'express'

const downloadCode = async(req: Request, res: Response) => {
  console.log(req.body)
  const json = JSON.parse(req.body.pageSchema)
  console.log('json11122333444555: ',json)
  try {
    await schemaToCode('test', json)
    res.end();
  } catch (error) {

  }
}

export default  {
  downloadCode
}

