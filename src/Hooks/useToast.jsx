import { useData } from "../Contexts/DataContext/DataContext";

const useToast = () => {
  const { setData } = useData();
  const postToast = (type, message) => {
    console.log(type, message);
    setData({ type: "TOAST", toastType: type, toastMessage: message });
    setTimeout(() => {
      setData({ type: "TOAST", toastType: "", toastMessage: "" });
    }, 5000);
  };
  return postToast;
};

export default useToast;
