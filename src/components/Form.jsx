export default function Form(setMessage) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setMessage(event.target.name.value);
      }}
    >
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
