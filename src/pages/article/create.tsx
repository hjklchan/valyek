import ReactEditor from "@/components/ReactEditor";
import { useLocation } from "react-router-dom";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import {
    Button,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik"
import { fetchSections } from "@/api/blog/blog";
import { useEffect, useState } from "react";
import { Section } from "@/api/blog/index.d"

type FormValues = {
    title: string;
    sectionId: string;
    categoryId: string;
    content: string;
}

const Create = () => {
    useDocumentTitle("Create Article");
    const location = useLocation();

    // =============================
    // =========== APIs ============
    // =============================
    const [sections, setSections] = useState<Section[]>([]);

    const initialValues: FormValues = {
        title: "",
        sectionId: location.state.sectionId,
        categoryId: "",
        content: "hello",
    }

    // =============================
    // =========== APIs ============
    // =============================
    const getSections = () => {
        fetchSections().then(res => setSections(res.data))
    }


    // =============================
    // ========= Validates =========
    // =============================
    const validateTitle = (value: string): string => {
        if (!value) {
            return "Title is required";
        } else if (value.length <= 4) {
            return "Title cannot be less than or equal to 4 chars";
        }
        return ""
    }
    const validateCategory = (value: string): string => {
        if (!value) return "Category is required";
        else if (value === "") return "Category is required";
        else return "";
    }

    // =============================
    // ========== Events ===========
    // =============================
    const onSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
        console.log(values);
    }

    useEffect(() => {
        getSections();
    }, [])

    return <>
        <h1 className="text-2xl font-semibold">创建博文</h1>
        <div className="my-3">
            <Formik<FormValues>
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                <Form>
                    <Field name="title" validate={validateTitle}>
                        {({ field, form }: any) => (
                            <FormControl isRequired isInvalid={form.errors.title && form.touched.title}>
                                <FormLabel>Title</FormLabel>
                                <Input {...field} borderRadius="0" type="text" />
                                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
                            </FormControl>

                        )}
                    </Field>
                    <Field component="select" name="sectionId">
                        {({ field, form }: any) => {
                            return <FormControl isRequired>
                                <FormLabel>Section</FormLabel>
                                <Select borderRadius="0" value={location.state.sectionId} disabled>
                                    {
                                        sections.map(item => (
                                            <option key={item.id} value={item.id}>
                                                {item.title}({item.numArticle})
                                            </option>)
                                        )
                                    }
                                </Select>
                            </FormControl>
                        }}
                    </Field>
                    <Field name="categoryId" validate={validateCategory}>
                        {({ field, form }: any) => (
                            <FormControl isRequired isInvalid={form.errors.categoryId}>
                                <FormLabel>Category</FormLabel>
                                <Select borderRadius="0" {...field}>
                                    <option value="">Select...</option>
                                    <option value="1">原创工具</option>
                                    <option value="2">原创汉化</option>
                                    <option value="3">Android 工具</option>
                                    <option value="4">Android 汉化</option>
                                </Select>
                                <FormErrorMessage>{form.errors.categoryId}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="content">
                        {({ field, form }: any) => (
                            <FormControl>
                                <FormLabel>Content</FormLabel>
                                <ReactEditor />
                            </FormControl>

                        )}
                    </Field>
                    <Button
                        className="mt-4"
                        colorScheme="blue"
                        type="submit"
                    // isLoading={true}
                    >
                        OK
                    </Button>
                </Form>
            </Formik>
            <form onSubmit={() => { }}>
            </form>
        </div>
    </>
}

export default Create;
