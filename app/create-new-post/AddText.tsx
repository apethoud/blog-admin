import { Formik, Field, Form, FormikHelpers } from "formik";
import PageHeader from "../_UI-components/PageHeader";
import Button from "../_UI-components/Button";
import { convertTextBodyToParagraphs, convertTitleToSlug } from "../utils";
import InputLabel from "../_UI-components/InputLabel";
import { InProgressParagraphs } from "./interfaces";
import { Dispatch, SetStateAction } from "react";

interface Values {
  postTitle: string;
  postText: string;
}

interface AddTextProps {
  setNewParagraphs: Dispatch<SetStateAction<InProgressParagraphs>>
  setNewPost: ({ title, slug }: { title: string, slug: string }) => void;
  setStep: (arg0: number) => void;
  step: number;
}

export default function AddText({ setNewParagraphs, setNewPost, setStep, step }: AddTextProps) {
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
            <InputLabel htmlFor="postTitle">Post Title</InputLabel>
            <Field 
              as="input"
              className="bg-slate-100 dark:bg-slate-900 border border-solid border-slate-300 dark:border-slate-600 font-sans text-lg text-slate-900 dark:text-slate-100 antialiased"
              id="postTitle" 
              name="postTitle" 
              placeholder="Post title"
              type="text"
            />

            <InputLabel htmlFor="postText">Post Text</InputLabel>
            <Field 
              as="textarea"
              className="bg-slate-100 dark:bg-slate-900 border border-solid border-slate-300 dark:border-slate-600 font-sans text-lg text-slate-900 dark:text-slate-100 antialiased"
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