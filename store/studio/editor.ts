export const form = {
  component: 'Form',
  children: [
    {
      component: 'Field',
      props: {
        label: 'Email',
        type: 'text',
        name: 'email',
        id: '',
        placeholder: 'Name',
        defaultValue: 'sdds',
      },
      style: {
        padding: '10px 20px',
      }
    },
    {
      component: 'Field',
      props: {
        label: 'Contact Number',
        type: 'text',
        name: 'contactNumber',
        id: 'contactNumber',
        placeholder: 'Name',
        defaultValue: '+1 800 000 0000',
      },
      style: {
        padding: '10px 20px',
      }
    },
    {
      component: 'Field',
      props: {
        label: 'Can call you',
        type: 'checkbox',
        name: 'isTrue',
        id: 'isTrue',
        placeholder: 'Name',
        defaultValue: 'true',
      },
      style: {
        padding: '10px 20px',
      }
    },
    {
      component: 'Button',
      props: {
        title: 'Submit'
      },
      style: {
        padding: '10px',
        margin: '10px'
      },

    }
  ],
  style: {
    padding: '10px',
    border: '1px solid red',
    borderRadius: '4px'
  },

  props: {
    post: '/',
    isExternalRoute: false,
    defaultData: {
      name: 'Prakash Acharya'
    },
    fields: {
      name: 'stirng',
      email: 'string',
      userName: 'string',
      phoneNumber: 'phone',
      isTrue: 'boolean',
    },
    headers: {

    }
  }
}