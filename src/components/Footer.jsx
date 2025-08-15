import React from 'react'

const Footer = () => {
  return (
 <footer className="fixed bottom-0 left-0 w-full backdrop-blur-lg bg-white/1 border-t font-medium border-white/20 text-white text-center py-3 text-sm z-50">
      <p>
        © {new Date().getFullYear()} Creatibl Solutions | All rights reserved 
      </p>
    </footer>
  )
}

export default Footer
