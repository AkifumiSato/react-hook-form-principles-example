import CreditModal from "@/components/CreditModal";
import Head from "next/head";
import { Input, Text, Button, Modal } from "@nextui-org/react";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Home() {
  const { register, handleSubmit, setValue, watch } = useForm<{
    name: string;
    credit: string;
  }>();
  const credit = watch("credit");
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
          <form
            onSubmit={handleSubmit((data) => {
              console.log("submit: ", data);
            })}
          >
            <div className={styles.formInner}>
              <dl className={styles.formItem}>
                <dt>名前</dt>
                <dd>
                  <Input
                    clearable
                    initialValue="田中太郎"
                    width="200px"
                    {...register("name")}
                  />
                </dd>
              </dl>
              <dl className={styles.formItem}>
                <dt>クレジットカード</dt>
                <dd className={styles.formItemContents}>
                  <Text>{credit ?? "none"}</Text>
                  <Button onClick={() => setVisible(true)} auto flat>
                    変更
                  </Button>
                </dd>
              </dl>
              <Button type="submit">submit</Button>
            </div>
          </form>
          <Modal
            closeButton
            aria-labelledby="modal-title"
            open={visible}
            onClose={closeHandler}
          >
            <CreditModal
              closeHandler={closeHandler}
              onSubmit={({ credit }) => {
                console.log("CreditModal submit");
                setValue("credit", credit);
              }}
            />
          </Modal>
        </div>
      </main>
    </>
  );
}
