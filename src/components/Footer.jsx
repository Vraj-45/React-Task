export default function Footer() {
  return (
    <>
      
      <footer className="bg-[#C7E1FF] px-6 py-10 mt-10 mb-6 w-[85%] mx-auto rounded">
        <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div>
            <div className="font-bold mb-3 text-lg">Social</div>
            <div className="flex items-center mb-2">
              <img
                src="https://cdn.simpleicons.org/facebook/1877F2"
                alt="Facebook"
                className="w-5 h-5 mr-2"
              />
              <span>Facebook</span>
            </div>
            <div className="flex items-center mb-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="Linkedin"
                className="w-5 h-5 mr-2"
              />
              <span>Linkedin</span>
            </div>
            <div className="flex items-center">
              <img
                src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
                alt="Google+"
                className="w-5 h-5 mr-2"
              />
              <span>Google +</span>
            </div>
          </div>

          
          <div>
            <div className="font-bold mb-3 text-lg">Explore</div>
            <div className="mb-2">Services</div>
            <div className="mb-2">Team</div>
            <div>Clients</div>
          </div>

          
          <div>
            <div className="font-bold mb-3 text-lg">Contact</div>
            <div className="mb-2">Lorem Ipsum dummy address</div>
            <div className="mb-2">used for display</div>
            <div>1234567890</div>
          </div>

          
          <div>
            <div className="font-bold mb-3 text-lg">Email</div>
            <div>mendelsoncommunication@email.com</div>
          </div>
        </div>
      </footer>

      
      <div className="text-center text-sm text-gray-700 mb-10">
        © Copyright 2018 Mendelson Communication Pty Ltd
      </div>
    </>
  );
}
