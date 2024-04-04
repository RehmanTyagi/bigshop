const Overlay = ({ isOpen, onClose, className }) => {
    if (!isOpen) return null;

    const handleClick = (e) => {
        if (e.target === e.currentTarget) onClose();
    }

    return (
        <div onClick={handleClick} className={`fixed inset-0 bg-blend-darken bg-black/60 ${className}`}>
        </div>
    );
};
export default Overlay
