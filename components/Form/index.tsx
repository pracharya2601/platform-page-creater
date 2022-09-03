import React, { FormEvent, useEffect, useState } from 'react';
export default function Form({
    children, 
    post, 
    isExternal, 
    defaultData, 
    fields, 
    headers, 
    style
}: any) {

  const onSubmitHandle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries())
    const newData = { ...defaultData, ...fieldValues }
    console.log(newData);
    e.currentTarget.reset();
  }
  return (
    <form style={style} onSubmit={onSubmitHandle}>
      {children}
    </form>
  )
}