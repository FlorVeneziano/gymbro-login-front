import { useState } from "react";
import { useMutation } from "react-query";
import { login } from "../../providers";

export const useLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const { mutate, isLoading, isError } = useMutation(login, {
    onError: (e) => {
        console.log(e, 'acaa')
    },
    onSuccess: (data) => {
        alert(data.data.message);
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async () => {
    mutate(data);
  };


  return {
    data,
    handleChange,
    onSubmit,
    isLoading,
    isError,
  };
};
