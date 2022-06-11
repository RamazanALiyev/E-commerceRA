import Commerce from '@chec/commerce.js';

// Create a Commerce instance

const PublicApi = process.env.REACT_APP_CHECK_PUBLIC_API_KEY

const commerce = new Commerce(PublicApi)


export default commerce