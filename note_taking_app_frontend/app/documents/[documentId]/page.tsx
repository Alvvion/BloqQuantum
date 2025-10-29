import Editor from "@/components/Editor";
import Toolbar from "@/components/Toolbar/Toolbar";

type DocumentIdPageProps = {
  params: Promise<{ documentId: string }>;
};

async function DocumentIdPage({ params }: DocumentIdPageProps) {
  const { documentId } = await params;
  return (
    <div className="dark min-h-screen bg-[#fafbfd] dark:bg-[#262626]">
      <Toolbar />
      <Editor />
    </div>
  );
}

export default DocumentIdPage;
