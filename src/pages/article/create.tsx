import ReactEditor from "@/components/ReactEditor";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Select
} from "@chakra-ui/react";

const Create = () => {
    useDocumentTitle("Create Article");
    const onSubmit = (values) => {
    }
    return <>
        <h1 className="text-2xl font-semibold">创建博文</h1>
        <div className="my-3">
            <form onSubmit={() => {}}>
                <FormControl isRequired>
                    <FormLabel>Title</FormLabel>
                    <Input borderRadius="0" type="text" />
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Block</FormLabel>
                    <Select borderRadius="0">
                        <option value="1">软件区</option>
                        <option value="2">编程区</option>
                        <option value="3">原创区</option>
                    </Select>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel>Category</FormLabel>
                    <Select borderRadius="0">
                        <option value="1">原创工具</option>
                        <option value="2">原创汉化</option>
                        <option value="3">Android 工具</option>
                        <option value="4">Android 汉化</option>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormLabel>Content</FormLabel>
                    <ReactEditor />
                </FormControl>
                <Button
                    className="mt-4"
                    colorScheme="blue"
                    type="submit"
                    isLoading={true}
                >
                    OK
                </Button>
            </form>
        </div>
    </>
}

export default Create;
