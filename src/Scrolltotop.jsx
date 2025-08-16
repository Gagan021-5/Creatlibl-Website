


const Scrolltotop = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleScroll}
      className="fixed bottom-15 cursor-pointer sm:hidden right-1 z-50 px-4 py-2 rounded-lg bg-white/10 text-white backdrop-blur-md hover:bg-white/20 transition-all duration-300 shadow-lg"
    >
      ↑ Top
    </button>
  );
};

export default Scrolltotop;
