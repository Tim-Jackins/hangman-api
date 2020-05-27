import * as React from "react"
import { 
  Form,
  Button
} from "react-bootstrap"

interface IFormProps {
  /* The http path that the form will be posted to */
  action: string

  /* Function given by the parent to return information back to parent */
  onFinish: boolean

  body: any
}

export interface IValues {
  /* Key value pairs for all the field values with key being the field name */
  [key: string]: any
}

export interface IErrors {
  /* The validation error messages for each field (key is the field name */
  [key: string]: string
}

export interface IFormState {
  /* The field values */
  values: IValues

  /* The field validation error messages */
  errors: IErrors

  /* Whether the form has been successfully submitted */
  submitSuccess?: boolean
}

export class UserForm extends React.Component<IFormProps, IFormState> {
  constructor(props: IFormProps) {
    super(props)
    // this.onFinish = this.props.onFinish.bind(this)

    const errors: IErrors = {}
    const values: IValues = {}
    this.state = {
      errors,
      values,
    }
    // console.log('inside userform')
    // console.log(props.onFinish)
  }

  /**
   * Returns whether there are any errors in the errors object that is passed in
   * @param {IErrors} errors - The field errors
   */
  private haveErrors(errors: IErrors) {
    let haveError: boolean = false
    Object.keys(errors).map((key: string): void => {
      if (errors[key].length > 0) {
        haveError = true
      }
    })
    return haveError
  }

  /**
   * Handles form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form event
   */
  private handleSubmit = async (
    e: React.SyntheticEvent
  ): Promise<void> => {
    e.preventDefault()
    let target = e.target as HTMLFormElement


    // var formData = new FormData(document.querySelector('form'))

    if (this.validateForm()) {
      const submitSuccess: boolean = this.props.onFinish(target)
      // await this.submitForm()
      
      this.setState({ submitSuccess })
    }
  }

  /**
   * Executes the validation rules for all the body on the form and sets the error state
   * @returns {boolean} - Whether the form is valid or not
   */
  private validateForm(): boolean {
    // TODO - validate form
    return true
  }

  /**
   * Submits the form to the http api
   * @returns {boolean} - Whether the form submission was successful or not
   */
  private async submitForm(): Promise<boolean> {
    // TODO - submit form
    return true
  }

  public render() {
    const { submitSuccess, errors } = this.state
    return (
      <Form onSubmit={ this.handleSubmit } noValidate={true}>
        <div className="container">
          {/* TODO - render body */}

          {this.props.body()}

          <div className="form-group">
            <Button
              variant="primary"
              type="submit"
              className="btn btn-primary"
              disabled={this.haveErrors(errors)}
            >
              Submit
            </Button>
          </div>

          {submitSuccess && (
            <div className="alert alert-info" role="alert">
              The form was successfully submitted!
            </div>
          )}
          
          {submitSuccess === false && !this.haveErrors(errors) && (
            <div className="alert alert-danger" role="alert">
              Sorry, an unexpected error has occurred
            </div>
          )}
          {submitSuccess === false && this.haveErrors(errors) && (
            <div className="alert alert-danger" role="alert">
              Sorry, the form is invalid. Please review, adjust and try again
            </div>
          )}
        </div>
      </Form>
    )
  }
}
