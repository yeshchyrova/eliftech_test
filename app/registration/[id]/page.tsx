"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

enum heardFromEnum {
  socMedia = "socMedia",
  friends = "friends",
  myself = "myself",
}

interface Inputs {
  fullName: string;
  email: string;
  birthDate: Date;
  heardFrom: heardFromEnum;
}

const RegistrationPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {console.log(data); reset();}
  return (
    <section>
      <h1 className="mb-8 text-2xl mt-7 ml-5">Event registration</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[400px] mx-auto relative"
      >
        <div className="w-[350px]">
          <label className="block text-m font-medium text-gray-900 mb-8 relative">
            Full name
            <input
              className="w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none focus:border-2"
              type="text"
              {...register("fullName", { required: true })}
            />
            {errors.fullName && (
              <span className="absolute text-[#E10000] text-sm">
                This field is required
              </span>
            )}
          </label>
          <label className="block text-m font-medium text-gray-900 mb-8 relative">
            Email
            <input
              className="w-full h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none focus:border-2"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="absolute text-[#E10000] text-sm">
                This field is required
              </span>
            )}
          </label>
          <label className="block text-m font-medium text-gray-900 mb-8 relative">
            Date of birth
            <input
              className="w-full h-10 bg-gray-50 border border-gray-300 text-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 outline-none focus:border-2"
              type="date"
              {...register("birthDate", { required: true })}
            />
            {errors.birthDate && (
              <span className="absolute text-[#E10000] text-sm">
                This field is required
              </span>
            )}
          </label>
        </div>

        <div className="flex flex-wrap gap-x-10 mb-10 relative">
          <legend className="block text-m font-medium text-gray-900 mb-3">
            Where did you hear about this event?
          </legend>
          <div>
            <input
              type="radio"
              id="socMedia"
              value="socMedia"
              // name="heardFrom"
              {...register("heardFrom", { required: true })}
            />
            <label htmlFor="socMedia" className="ml-2">
              Social media
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="friends"
              value="friends"
              {...register("heardFrom", { required: true })}
            />
            <label htmlFor="friends" className="ml-2">
              Friends
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="myself"
              value="myself"
              {...register("heardFrom", { required: true })}
            />
            <label htmlFor="myself" className="ml-2">
              Found myself
            </label>
          </div>
          {errors.heardFrom && (
            <span className="absolute text-[#E10000] text-sm font-medium -bottom-5">
              This field is required
            </span>
          )}
        </div>

        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ease-linear duration-100"
          type="submit"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegistrationPage;
