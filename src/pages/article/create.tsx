import ReactEditor from "@/components/ReactEditor";
import { useLocation, useNavigate } from "react-router-dom";
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
import { fetchCategoryBySectionId, fetchSections, storeArticle } from "@/api/blog/blog";
import { useEffect, useState } from "react";
import { CategoryItem, Section } from "@/api/blog/index.d"
import { createRequire } from "module";

type FormValues = {
    title: string;
    sectionId: number;
    categoryId: number;
    content: string;
}

const Create = () => {
    // =============================
    // =========== Hooks ===========
    // =============================
    useDocumentTitle("Create Article");
    const location = useLocation();
    const navigate = useNavigate();

    // =============================
    // =========== APIs ============
    // =============================
    const [loading, setLoading] = useState<boolean>(false);
    const [sections, setSections] = useState<Section[]>([]);
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [content, setContent] = useState<string>("");

    const initialValues: FormValues = {
        title: "",
        sectionId: location.state.sectionId,
        categoryId: 0,
        content: "hello",
    }

    // =============================
    // =========== APIs ============
    // =============================
    const getSections = () => {
        fetchSections().then(res => setSections(res.data))
    }
    const getCategories = () => {
        fetchCategoryBySectionId(location.state.sectionId).then(res => {
            setCategories(res.data);
        });
    }
    const createArticle = (values: FormValues) => {
        setLoading(true);
        storeArticle<FormValues>(values).then((res) => {
            setLoading(false);
            goDetailPage(res.data.newId);
        }).catch((error) => {
            setLoading(false);
        })
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
        values.content = content;
        createArticle(values)
    }
    const goDetailPage = (articleId: number) => {
        navigate(`/article/${articleId}`);
    }

    useEffect(() => {
        getSections();
        getCategories();
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
                                    {
                                        categories.map(item => {
                                            return <option key={item.id} value={item.id}>
                                                {item.title}({item.numArticle})
                                            </option>
                                        })
                                    }
                                </Select>
                                <FormErrorMessage>{form.errors.categoryId}</FormErrorMessage>
                            </FormControl>
                        )}
                    </Field>
                    <Field name="content">
                        {({ field, form }: any) => (
                            <FormControl>
                                <FormLabel>Content</FormLabel>
                                <ReactEditor onChange={(editor) => setContent(editor.getHtml)} />
                            </FormControl>

                        )}
                    </Field>
                    <Button
                        className="mt-4"
                        colorScheme="blue"
                        type="submit"
                        isLoading={loading}
                    >
                        OK
                    </Button>
                </Form>
            </Formik>
        </div>
    </>
}

export default Create;
