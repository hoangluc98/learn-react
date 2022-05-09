import React from 'react';

type NameAndNotes = {
  name: string;
  notes: string;
};

function PersonForm() {
  const [values, setValues] = React.useState<NameAndNotes>({
    name: '',
    notes: ''
  });

  const handleChange =
    (fieldName: keyof NameAndNotes) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues({ ...values, [fieldName]: e.currentTarget.value });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit', values);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your name"
        value={values.name}
        onChange={handleChange('name')}
      />
      <textarea
        placeholder="Enter some notes"
        value={values.notes}
        onChange={handleChange('notes')}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PersonForm;
