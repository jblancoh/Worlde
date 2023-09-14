import PropTypes from 'prop-types';

export default function Modal({open, onClose, children}) {
  return (
    <div onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-colors pt-10 ${open ? "visible bg-black/20" : "invisible" }`}>
      <div className="flex flex-col justify-center items-center gap-4 bg-white rounded-xl">
        {children}
      </div>
    </div>
  )
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
