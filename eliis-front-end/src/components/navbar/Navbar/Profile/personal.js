import React from 'react';
import './personal.css';

const Personal = () => {
  return (
    <div className='grid grid-cols-1 gap-2 md:grid-cols-[2fr_1fr] place-items-end'>
      <div className='flex-col flex hidden custom-measurements-profile-logo'>
        <span className="font-semibold">Eliis Õpetaja</span>
        <span className="text-sm text-secondary">ELIIS Lasteaed</span>
      </div>
      <div className="rounded-full p-2 military-color text-2xl flex">
        <svg
          className="mdi-icon e3-img-overlay"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          {/* Background rectangle */}
          <circle cx="12" cy="12" r="11" fill="#fff" stroke="#f79e80" strokeWidth=".1rem" />

          {/* Checkmark */}
          <polyline points="7,9 12,14 17,9" stroke="#f79e80" strokeWidth="2" fill="none" />
        </svg>
        <span className="ml-2">EÕ</span>
      </div>
    </div>
  );
}

export default Personal;
