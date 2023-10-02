import React from 'react';

const HowItWork: React.FC = () => {
  return (
    <div className="bg-lightRed text-white p-4">
      <div className="container mx-auto">
        {/* How It Works */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-secondaryText">How It Works</h1>
          <p className="text-lg text-grey-300">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
            lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
            tempus. Phasellus at quam id elit hendrerit semper feugiat id nunc.
            Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
            quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
            faucibus vel elit. Integer adipiscing erat eget risus sollicitudin
            pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.
          </p>
          <ol className="list-disc text-grey-300 pl-2 mt-4">
            <li>Self Assessment</li>
            <li>Submit an Expression of Interest (EOI)</li>
            <li>Receive an Invitation to Apply (ITA)</li>
            <li>
              If you have 160 points or more you’ll be selected from the EOI pool
              and may be sent an ITA
            </li>
            <li>Submit a resident application</li>
            <li>if successful, you’ll be issued a resident visa</li>
          </ol>
        </div>

        {/* Long Term Skill Shortage List */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-secondaryText">Long Term Skill Shortage List</h2>
          <p className="text-lg text-grey-300">
            Duis semper lacus scelerisque, aliquam leo quis, porttitor leo. Etiam
            lobortis dapibus libero vel porttitor. Nulla tempor elit nec feugiat
            tempus. Phasellus at quam id elit hendrerit semper feugiat id nunc.
            Morbi quis justo velit. Duis semper lacus scelerisque, aliquam leo
            quis, porttitor leo. Fusce lectus ex, pretium efficitur suscipit sed,
            faucibus vel elit. Integer adipiscing erat eget risus sollicitudin
            pellentesque non erat. Maecenas nibh dolor malesuada sagittis accumsan
            ipsum. Pellentesque ultrices ultrices sapien, nec tincidunt nunc posuere.
          </p>
        </div>

        {/* Video Section */}
        <div className="mb-8">
         
          <div className="aspect-w-16 aspect-h-9 mt-4">
            <iframe
              src="https://www.youtube.com/embed/your-video-id"
              title="Your Video"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
