

interface ResourceCardProps {
  title: string;
  description: string;
  link: string;
  type: "PDF" | "DOCX";
}

const ResourceCard = ({ title, description, link, type }: ResourceCardProps) => (
  <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition duration-300">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600 mb-4">{description}</p>
    <div className="flex justify-between items-center">
      <span className="text-xs text-white px-2 py-1 rounded bg-green-600">{type}</span>
      <a
        href={link}
        className="text-blue-600 hover:underline text-sm font-medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
    </div>
  </div>
);

interface VideoCardProps {
  title: string;
  description: string;
  videoUrl: string;
}

const VideoCard = ({ title, description, videoUrl }: VideoCardProps) => (
  <div className="border rounded-lg shadow-md p-4 bg-white hover:shadow-xl transition duration-300">
    <div className="mb-4">
      <iframe
        className="w-full h-48 rounded"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const Resources = () => {
  const downloadableResources: ResourceCardProps[] = [
    {
      title: "Biomaterials Research Guide",
      description: "A comprehensive guide to conducting biomaterials research.",
      link: "/docs/biomaterials-guide.pdf",
      type: "PDF",
    },
    {
      title: "Proposal Template",
      description: "A helpful DOCX template for submitting project proposals.",
      link: "/docs/proposal-template.docx",
      type: "DOCX",
    },
  ];

  const videoResources: VideoCardProps[] = [
    {
      title: "Agroecology Workshop",
      description: "Learn key principles of agroecology with this recorded workshop.",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
    },
    {
      title: "Creative Biomaterial Uses",
      description: "Explore innovative applications of biomaterials in art and science.",
      videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Resources & Knowledge Hub</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Downloadable Materials</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {downloadableResources.map((res, index) => (
            <ResourceCard key={index} {...res} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Video Library</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {videoResources.map((vid, index) => (
            <VideoCard key={index} {...vid} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
