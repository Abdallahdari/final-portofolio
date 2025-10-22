const PDFViewer = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        name=""
        title="PDF Viewer"
        src="/resumecv.pdf"
        className="w-full h-full"
      />
    </div>
  );
};

export default PDFViewer;
