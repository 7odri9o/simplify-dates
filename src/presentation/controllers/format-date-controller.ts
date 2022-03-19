import { badRequest, Controller, HttpRequest, HttpResponse, Validation } from '@/presentation/protocols'

export class FormatDateController implements Controller {
  constructor (private readonly validation: Validation) {}

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = this.validation.validate(httpRequest.body)
    if (error) {
      return badRequest(error)
    }
  }
}
