import GenerateCode from './generatecode'

export default  (app) => {
  app.use('/code', GenerateCode)
}
