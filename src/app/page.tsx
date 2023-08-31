import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import CreatePost from "@/components/CreatePost";
import Posts from "@/components/Posts";

export default function Home() {
  return (
    <>
      <Header />
      <Posts />
      <Footer />

      <Modal>
        <CreatePost />
      </Modal>
    </>
  );
}
