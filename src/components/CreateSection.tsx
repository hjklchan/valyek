import { useState } from "react";
import {
    Button,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalOverlay,
    ModalCloseButton,
    ModalFooter,
} from "@chakra-ui/react";
import { CreateSectionParameters } from "@/api/blog";
import { Formik, useFormik } from "formik";

export interface FormProps {
    onOk: (values: CreateSectionParameters) => void;
    isOpen: boolean;
    onClose: () => void;
}

const CreateSectionModal = (props: FormProps) => {
    // TODO Need to build a Section module form
    const formik = useFormik<CreateSectionParameters>({
        initialValues: {
            title: "",
            description: "",
            maintainers: "",
        },
        onSubmit: (values) => {
            console.log(values);
        }
    });

    const onOkClick = () => { }
    const onSubmit = (values: CreateSectionParameters, actions) => {
        console.log(values);
    }

    return <>
        <Modal isOpen={props.isOpen} onClose={props.onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Section</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                </ModalBody>
                <ModalFooter>
                    <Button size="xs"
                        borderRadius="0"
                        colorScheme="blue"
                        mr="3"
                        onClick={props.onClose}
                    >
                        Close
                    </Button>
                    <Button
                        size="xs"
                        borderRadius="0"
                        colorScheme="green"
                        onClick={onOkClick}
                    >
                        OK
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default CreateSectionModal;
