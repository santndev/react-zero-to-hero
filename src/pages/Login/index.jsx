import React, {useState} from "react";
import {
    Button,
    FormControl,
    FormGroup,
    FormLabel,
    InputGroup,
    Modal,
    ModalDialog
} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const revertMargin = {
    marginBottom: "revert"
};

function Login() {
    const [isShow, setShow] = useState(true);
    const navigate = useNavigate();
    const onClose = () => {
        navigate("/");
    };
    const onShow = () => {
        setShow(true);
    };
    const onSubmit = () => {

    };
    return (
        <ModalDialog className="modal-dialog">
            <Button variant="primary" onClick={onShow}>Show</Button>
            <Modal show={isShow}>
                <Modal.Header>
                    Login
                </Modal.Header>
                <Modal.Body>
                    <FormGroup controlId={"username"} className={"mb-3"}>
                        <InputGroup.Text>
                            <FormLabel className={"col-3"} style={revertMargin}>
                                Username
                            </FormLabel>
                            <FormControl
                                type={"text"}
                                placeholder={"User name"}
                                aria-label={"User name"}
                            ></FormControl>
                        </InputGroup.Text>
                    </FormGroup>
                    <FormGroup controlId={"password"}>
                        <InputGroup.Text>
                            <FormLabel className={"col-3"} style={revertMargin}>
                                Password
                            </FormLabel>
                            <FormControl
                                type={"password"}
                                placeholder={"Password"}
                                aria-label={"Password"}
                            ></FormControl>
                        </InputGroup.Text>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={onSubmit}>
                        Login
                    </Button>
                </Modal.Footer>
            </Modal>
        </ModalDialog>
    );
}

export default Login;
