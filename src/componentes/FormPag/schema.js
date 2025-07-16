import * as yup from "yup"

const schema = yup.object().shape({
    email:yup.string().email("e-mail invalido").required("O campo é obrigatorio"),
    senha:yup.string().required("O campo senha é obrigatorio")
})