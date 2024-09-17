import React from 'react';

function NotFoundPage() {
  return (
    <div className='container-sm p-5 m-5 bg-primary text-light text-center rounded shadow-lg'>
      <h1 className='display-4 font-weight-bold mb-4'>404 - Page Not Found</h1>
      <p className='lead'>Sorry, the page you are looking for does not exist.</p>
      <a href="/" className='btn btn-light mt-4'>Go Back to Home</a>
    </div>
  );
}

export default NotFoundPage;
