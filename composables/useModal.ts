import { ref, shallowRef } from "vue";
import FormRegister from "../components/FormRegister.vue";
import FormLogin from "../components/FormLogin.vue";

const show = ref<boolean>(false);
const component = shallowRef();
const isForm = ref<string>("");

enum stateTYPE {
  LOGIN = "LOGIN",
  REGISTER = "REGISTER",
}

function selectModal(type: string) {
  switch (type) {
    case stateTYPE.LOGIN:
      return (component.value = FormLogin);
    case stateTYPE.REGISTER:
      return (component.value = FormRegister);
    default:
      return undefined;
  }
}

export function useModal() {
  return {
    show,
    stateTYPE,
    isForm,
    component,
    showModal: (type: stateTYPE.REGISTER | stateTYPE.LOGIN) => {
      show.value = true;
      isForm.value = type;
      selectModal(type);
    },
    hideModal: () => {
      isForm.value = "";
      show.value = false;
    },
  };
}
