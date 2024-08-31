import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FormComponent = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    setUsers([...users, data]);
    reset();
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block">First Name</label>
          <input {...register('firstName')} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Last Name</label>
          <input {...register('lastName')} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Age</label>
          <input type="number" {...register('age')} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Email Address</label>
          <input type="email" {...register('email')} className="border p-2 w-full" />
        </div>
        <div>
          <label className="block">Place of Residence</label>
          <input {...register('residence')} className="border p-2 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Confirm</button>
      </form>

      <table className="table-auto w-full mt-4">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Residence</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{user.firstName}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.residence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormComponent;
