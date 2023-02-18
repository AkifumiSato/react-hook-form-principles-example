import Head from "next/head";
import { Input, Text, Button, Modal, Row } from "@nextui-org/react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const closeHandler = () => setVisible(false);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Text h1 size={30} weight="bold">
            サンプルForm
          </Text>
          <form>
            <div className={styles.formInner}>
              <dl className={styles.formItem}>
                <dt>名前</dt>
                <dd>
                  <Input clearable initialValue="田中太郎" width="200px" />
                </dd>
              </dl>
              <dl className={styles.formItem}>
                <dt>クレジットカード</dt>
                <dd className={styles.formItemContents}>
                  <Text>none</Text>
                  <Button onClick={() => setVisible(true)} auto>
                    変更
                  </Button>
                  <Modal
                    closeButton
                    aria-labelledby="modal-title"
                    open={visible}
                    onClose={closeHandler}
                  >
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
                  </Modal>
                </dd>
              </dl>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
