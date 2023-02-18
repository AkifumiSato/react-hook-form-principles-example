import CreditModal from "@/components/CreditModal";
import Head from "next/head";
import { Input, Text, Button, Modal } from "@nextui-org/react";
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
                    <CreditModal closeHandler={closeHandler} />
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
