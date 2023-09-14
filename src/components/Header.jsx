/* eslint-disable react/no-unknown-property */
import DarkModeSwitch from "./DarkModeSwitch";
import PropTypes from 'prop-types';

export default function Header({ onStatsClick, onInstructionsClick }) {
  return (
    <div className="grid grid-cols-3">
      <div className="grid place-items-center">
        <div className="cursor-pointer" onClick={onInstructionsClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
      </div>
      <div className="grid place-items-center">
        <h1 className="text-lg font-bold">WORLDE</h1>
      </div>
      <div className="grid place-items-center">
        <div className="flex gap-2">
          <div className="cursor-pointer" onClick={onStatsClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
            </svg>
          </div>
          <DarkModeSwitch />
        </div>
      </div>
    </div>
  )
}

Header.propTypes = {
  onStatsClick: PropTypes.func.isRequired,
  onInstructionsClick: PropTypes.func.isRequired,
};
