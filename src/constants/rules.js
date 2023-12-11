import { isValidEmail } from 'src/utils/helpes';

export const rules = {
  email: {
    required: {
      value: true,
      message: 'Email là bắt buộc nhập'
    },
    minLength: {
      value: 5,
      message: 'Email có độ dài từ 6 kí tự trở lên'
    },
    maxLength: {
      value: 30,
      message: 'Email có độ dài tối đa 30 kí tự'
    },
    validate: {
      email: v => isValidEmail(v) || 'Email không đúng định dạng'
    }
  },

  password: {
    required: {
      value: true,
      message: 'Password là bắt buộc nhập'
    },
    minLength: {
      value: 6,
      message: 'Password có độ dài ít nhất 6 kí tự'
    },
    maxLength: {
      value: 12,
      message: 'Password có độ dài tối đa 12 kí tự'
    }
  }
};
