
const basePublicUrl = 'https://pc2.labs.birt.eus/back-end/api';
const baseUrl = 'https://pc2.labs.birt.eus/back-end';

export const environment = {
  production: true,
  apiUrl: basePublicUrl,
  api: {
    login: `${baseUrl}/login`,
    subject: `${basePublicUrl}/subjects`,
    course: `${basePublicUrl}/courses`,
    unit : `${basePublicUrl}/units`,
    exercise: `${basePublicUrl}/exercises`,
    user : `${basePublicUrl}/users`
  }
};
