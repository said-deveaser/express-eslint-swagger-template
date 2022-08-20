import { Router } from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'

/**
 * Makes swagger docs, based on comments
 * */

// EXAMPLE: comment before endpoint job
/**
 * @swagger
 * /customers:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
// router.use('/customers', ...)

const swaggerRouter = Router()

// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'Customer API',
      description: 'Customer API Information',
      contact: {
        name: 'Amazing Developer',
      },
      servers: ['http://localhost:3000'],
    },
  },
  // replace to your router files, like 'api/*Router.ts'
  apis: [path.resolve(__dirname, '../app.[tj]s')],
}
const swaggerDocs = swaggerJSDoc(swaggerOptions)

swaggerRouter.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

export default swaggerRouter
