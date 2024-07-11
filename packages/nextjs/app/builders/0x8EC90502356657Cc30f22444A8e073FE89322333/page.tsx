import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center space-y-8 py-8">
      <div className="max-w-3xl w-full mx-4 bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center justify-between">
          <div className="personal-info">
            <h1 className="text-3xl font-bold text-black">Ivan Ursulovic</h1>
            <p className="text-gray-600">Backend C# Developer &amp; Blockchain Enthusiast</p>
            <p className="text-gray-600">Location: Belgrade, Serbia</p>
            <p className="text-gray-600">Education: Computer engineering, School of computing</p>
          </div>
          <div className="profile-img">
            <Image
              src="/avatar-photo.jpeg"
              alt="Ivan Ursulović"
              width={150}
              height={150}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="max-w-3xl w-full mx-4 bg-white rounded-lg shadow-md p-8">
        <div className="bio">
          <h2 className="text-2xl font-semibold mb-4 text-black">Bio</h2>
          <p className="text-gray-700">
            Hello! I&apos;m Ivan Ursulovic, a backend C# developer with a great interest in blockchain technology. My
            journey into web3 began with the book &#34;Mastering Bitcoin&#34; and I have since attended several web3
            events, including ETH Belgrade. I have decent theoretical knowledge about blockchain, but now I am looking
            to advance my development skills and meet people in this field.
          </p>
        </div>
      </div>

      <div className="max-w-3xl w-full mx-4 bg-white rounded-lg shadow-md p-8">
        <div className="contact">
          <h2 className="text-2xl font-semibold mb-4 text-black">Contact Me</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/ivanursulovic"
              target="_blank"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
            <a href="https://t.me/ivanursulovic" target="_blank" className="text-blue-600 hover:underline">
              Telegram
            </a>
            <a href="https://github.com/ursulovic" target="_blank" className="text-blue-600 hover:underline">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
