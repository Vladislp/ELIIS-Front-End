import React from 'react';
import './personal.css';

const Personal = () => {
  return (
    <>
    <div className="hidden md:flex flex-col">
      <span className="font-semibold">Eliis Õpetaja</span>
      <span className="text-sm text-secondary">ELIIS Lasteaed</span>
    </div>
      <div className="relative justify-end">
        <button
          id="headlessui-menu-button-:r1:"
          type="button"
          aria-haspopup="menu"
          aria-expanded="false"
          data-headlessui-state=""
        >
          <span className="rounded-full p-1 flex items-center justify-center font-bold w-12 h-12 bg-secondary text-white text-2xl font-[400] relative">
            <span>EÕ</span>
            <div className="grid grid-col-1 grid-row-1 absolute bottom-[-0.35rem] right-[-0.35rem] w-6 h-6 justify-items-center items-center justify-center">
              <div className="col-start-1 row-start-1 bg-white rounded-full w-5 h-5"></div>
              <svg
                className="mdi-icon col-start-1 row-start-1 text-primary w-6 h-6 rounded-full"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"></path>
              </svg>
            </div>
          </span>
        </button>
      </div>
    </>
  );
}

export default Personal;
