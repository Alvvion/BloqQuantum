import Editor from "@/components/Editor";

type DocumentIdPageProps = {
  params: Promise<{ documentId: string }>;
};

async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;
  return (
    <div className="min-h-screen bg-[#fafbfd]">
      <Editor />
    </div>
  );
}

export default DocumentIdPage;
