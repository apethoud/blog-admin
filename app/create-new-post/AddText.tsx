import { Formik, Field, Form, FormikHelpers } from "formik";
import PageHeader from "../_UI-components/PageHeader";
import Button from "../_UI-components/Button";
import { convertTextBodyToParagraphs, convertTitleToSlug } from "../utils";

interface Values {
  text: string;
}

export default function AddText({ setNewParagraphs, setNewPost, setStep, step }) {
  return (
    <>
      <PageHeader text="Add a title and some text to your post" />
      <Formik
        initialValues={{
          postTitle: '',
          postText: ''
        }}
        onSubmit={(
          values: Values,
          { setSubmitting }: FormikHelpers<Values>
        ) => {
          setNewPost({
            title: values.postTitle,
            slug: convertTitleToSlug(values.postTitle)
          })
          setNewParagraphs(convertTextBodyToParagraphs(values.postText))
          setStep(step + 1)
          setTimeout(() => {
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <div className="flex flex-col">
            <label htmlFor="postTitle">Post Title</label>
            <Field 
              as="input"
              className="bg-slate-100 dark:bg-slate-900 border border-solid border-slate-300 dark:border-slate-600"
              id="postTitle" 
              name="postTitle" 
              placeholder="Post title"
              type="text"
            />

            <label htmlFor="postText">Post Text</label>
            <Field 
              as="textarea"
              className="bg-slate-100 dark:bg-slate-900 border border-solid border-slate-300 dark:border-slate-600"
              id="postText" 
              name="postText" 
              placeholder="Post text"
              type="text"
            />

            <Button type="submit" label="Next" primary />
            <Button type="button" label="Cancel" />
          </div>
        </Form>
      </Formik>
    </>
  )
}