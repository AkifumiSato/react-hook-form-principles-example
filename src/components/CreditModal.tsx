import { Input, Text, Button, Modal, Row } from "@nextui-org/react";

type Props = {
  closeHandler: () => void;
};

export default function CreditModal({ closeHandler }: Props) {
  return (
    <>
      <Modal.Header>
        <Text id="modal-title" size={15}>
          クレジットカード番号を入力してください
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="xxxx-yyyy-zzzz"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button auto onPress={closeHandler}>
          保存
        </Button>
      </Modal.Footer>
    </>
  );
}
