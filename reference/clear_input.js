import { useForm } from "react-hook-form";

function MyForm() {
  const { register: register1, handleSubmit: handleSubmit1, reset: reset1 } = useForm();
  const { register: register2, handleSubmit: handleSubmit2, reset: reset2 } = useForm();

  const onSubmitForm1 = (data) => {
    // handle form 1 submission
    reset2(); // clear inputs of form 2
  }

  const onSubmitForm2 = (data) => {
    // handle form 2 submission
  }

  return (
    <>
      <form onSubmit={handleSubmit1(onSubmitForm1)}>
        <input {...register1("form1Input1")} />
        <input {...register1("form1Input2")} />
        <button type="submit">Submit Form 1</button>
      </form>
      <form onSubmit={handleSubmit2(onSubmitForm2)}>
        <input {...register2("form2Input1")} />
        <input {...register2("form2Input2")} />
        <button type="submit">Submit Form 2</button>
      </form>
    </>
  );
}
