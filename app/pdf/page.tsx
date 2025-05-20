const PDFViewer = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        name=""
        title="PDF Viewer"
        src="/resume.pdf"
        className="w-full h-full"
      />
    </div>
  );
};

export default PDFViewer;
