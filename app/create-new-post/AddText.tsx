import { Formik, Field, Form, FormikHelpers } from "formik";
import PageHeader from "../PageHeader";

interface Values {
  text: string;
}

export default function AddText() {
  return (
    <>
      <PageHeader text="Add some text to your post" />
      <Formik
        initialValues={{
          text: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className="flex flex-col">
            <label htmlFor="text">Post Text</label>
            <Field 
              id="text" 
              name="text" 
              placeholder="Insert blog post text here"
              type="textarea"
            />

            <button type="submit">Next</button>
          </div>
        </Form>
      </Formik>
    </>
  )
}